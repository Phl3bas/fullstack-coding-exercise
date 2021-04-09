import express from "express";
import { GlobalMiddleWares } from "./middlewares";
import { Router } from "./routes";

const app = express();

app.use(GlobalMiddleWares);
app.use("/api", Router);

export default app;
