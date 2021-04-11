import { Router as ExpressRouter } from "express";
import { userRouter } from "./users/user.route";

const router = ExpressRouter();

router.use("/users", userRouter);

export const Router = router;
