import express from "express";
import { GlobalMiddleWares } from "./middlewares";

const app = express();

app.use(GlobalMiddleWares);

export default app;
