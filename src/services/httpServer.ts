import bodyParser from "body-parser";
import express from "express";

import routes from "../routes";

const app = express();
const port = 3000;
const prefix = "/";
const url = new URL(`http://localhost:${port}${prefix}`);

app.use(bodyParser.json());
app.use(prefix, routes);
app.set("prefix", prefix);
app.set("port", port);
app.set("url", url);

export default app;
