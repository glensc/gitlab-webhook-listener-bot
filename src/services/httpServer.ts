import bodyParser from "body-parser";
import express, { Express } from "express";

import routes from "../routes";

const app: Express = express();
const port = 3000;
const prefix = "/";
const url = new URL(`http://localhost:${port}${prefix}`);

app.use(bodyParser.json({ limit: "5mb" }));
app.use(prefix, routes);
app.set("prefix", prefix);
app.set("port", port);
app.set("url", url);

export default app;
