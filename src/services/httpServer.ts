import bodyParser from "body-parser";
import express from "express";

import routes from "../routes";

import type { Express } from "express";

const build = (
  port = 3000,
  prefix = "/",
) => {
  const app: Express = express();
  const url = new URL(`http://localhost:${port}${prefix}`);

  app.use(bodyParser.json({ limit: "5mb" }));
  app.use(prefix, routes);
  app.set("prefix", prefix);
  app.set("port", port);
  app.set("url", url);

  return app;
};

export default build;
