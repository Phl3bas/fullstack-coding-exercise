import { Router as ExpressRouter } from "express";
import { userRouter } from "./user/user.route";

const router = ExpressRouter();

router.use("/user", userRouter);

export const Router = router;
