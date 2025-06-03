import express from "express";
const morgan = require("morgan");

import { PORT } from "./config";
import postRouter from "./routes/post.router";

const app = express();

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use(postRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
