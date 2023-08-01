import { Router } from "express";

const router = Router();

// https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/

// liveness probes could catch a deadlock, where an application is running, but unable to make progress.
// Restarting a container in such a state can help to make the application more available despite bugs.
router.get("/liveness", (req, res) => {
  res.status(200).send("ok\n");
});

// pod is ready to accept traffic
router.get("/readiness", (req, res) => {
  res.status(200).send("ok\n");
});

export default router;
