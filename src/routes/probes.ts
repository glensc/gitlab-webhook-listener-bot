import { Router } from "express";
import registry from "../services/registry";

const router = Router();

// https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/

// liveness probes could catch a deadlock, where an application is running, but unable to make progress.
// Restarting a container in such a state can help to make the application more available despite bugs.
router.get("/liveness", (req, res) => {
  try {
    registry.livenessProbe();
    res.status(200).send("ok\n");
  } catch (err) {
    registry.logger.error(err);
    res.status(500).send("err\n");
  }
});

// pod is ready to accept traffic
router.get("/readiness", (req, res) => {
  try {
    registry.readinessProbe();
    res.status(200).send("ok\n");
  } catch (err) {
    registry.logger.error(err);
    res.status(500).send("err\n");
  }
});

export default router;
