# AGENTS.md

## Commands

- Toolchain: Node.js >=22, pnpm (version pinned via the `packageManager` field in `package.json`). Use **pnpm** (lockfile is `pnpm-lock.yaml`); do not use npm/yarn.
- Install: `pnpm install`
- Build: `pnpm build`
- Verify changes:
  - Full typecheck: `pnpm exec tsc --noEmit` (root `tsconfig.json` includes `src/**` and `demo/**`).
  - There are **no lint/test scripts** in this repo. The pre-commit hook (husky + lint-staged via `.lintstagedrc.json`) runs `sh -c tsc --noEmit` on staged `*.ts` files; CI (`.github/workflows/test.yml`, on PRs) runs `pnpm install --frozen-lockfile && pnpm build`. Treat `tsc` as the verification gate.
- Run demo: `pnpm start`. Demo reads `GITLAB_URL` / `GITLAB_TOKEN` env vars.
- Tunnel: `pnpm ngrok` (ngrok config points at port 3000).

## Architecture

- Library entry: `src/index.ts` re-exports `main` (default + named) from `src/main.ts`, plus `logger`, handler types, `EVENT_TYPES`, concrete handlers, payload types, and `GitlabClient`.
- `main(options)` in `src/main.ts` is the composition root. Options: `handlers`, `logger`, optional `livenessProbe` / `readinessProbe` / `shutdownHandler`, `port` (default 3000), `prefix` (default "/").
- Wiring is manual DI via singletons in `src/services/*` (registry, handlers, queue, worker, httpServer, webhook) — `src/main.ts` consumes these singletons rather than using a DI framework.
- Request flow: Express (`src/services/httpServer.ts`) → `src/routes` → `POST /` (webhook; `POST /webhook` is deprecated alias) → `WebHookHandler` validates required GitLab headers (`user-agent`, `x-gitlab-event`, `x-gitlab-event-uuid`, `x-gitlab-instance`, `x-gitlab-webhook-uuid`) → enqueues `WebhookEvent` → `QueueWorker` polls queue every 1s → `HandlerRegistry` dispatches to handlers matching event type (`ANY` or exact).
- Handlers extend `BaseHandler` implementing abstract `isValid`/`handle`; `event_types` defaults to `[EVENT_TYPES.ANY]`. Handlers in `src/handlers/*` set specific types (e.g. `MergeRequestHandler` → `[EVENT_TYPES.MERGE_REQUEST]`). Handlers without `event_types` are rejected with a log and skipped.
- Event types enum `EVENT_TYPES` (`src/types.ts`): any, deployment, feature_flag, issue, build, merge_request, note, pipeline, project_create, project_rename, project_update. Dispatch falls back event type → object_kind → event_name.
- GitLab API access via `GitlabClient` (`src/gitlab/GitlabClient.ts`, wraps `@gitbeaker/rest`). Handlers that need GitLab construct their own client (see demo handlers).
- Payload shapes live in `src/payload/**`, grouped per object kind.

## Gotchas

- Two tsconfigs: root `tsconfig.json` (`rootDir: "."`, includes `src` + `demo`, outputs to `dist/`) vs `tsconfig.main.json` (library sources only, outputs to `dist/src/`). Library build/publish uses `tsconfig.main.json`.
- Build quirk: `pnpm build` = `tsc -p tsconfig.main.json` → demo install → root `tsc` (demo + src). The demo depends on the library via `"gitlab-webhook-listener-bot": "file:.."`.
- `.npmignore` whitelists only `dist/**/*.js`, `dist/**/*.d.ts` (plus package.json/README/LICENSE); `.npmrc` sets `enable-pre-post-scripts=true`.
- TS extends `@tsconfig/node22` with `experimentalDecorators` enabled; incremental build info (`*.tsbuildinfo`) lands in `dist/`.

## References

- `README.md` – usage and handler authoring example.
- `demo/` – standalone copyable project to run a listener (depends on local package via `file:..`).
