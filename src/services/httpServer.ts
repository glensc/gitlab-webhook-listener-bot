import express from "express";

import routes from "./routes";

const app = express();
const port = 3000;
const prefix = "/";
const url = `http://localhost:${port}${prefix}`;

app.use(prefix, routes);
app.set("prefix", prefix);
app.set("port", port);
app.set("url", url);

export default app;
