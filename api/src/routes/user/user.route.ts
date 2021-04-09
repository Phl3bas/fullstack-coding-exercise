import {
  Router as ExpressRouter,
  Response,
  Request,
  NextFunction,
} from "express";
import fs from "fs/promises";

import path from "path";

const router = ExpressRouter();

async function getJsonData() {
  try {
    const data: Buffer = await fs.readFile(
      path.join(__dirname, "../../", "db", "sampledata.json")
    );
    return await JSON.parse(data.toString());
  } catch (err) {
    throw new Error(err);
  }
}

router.get("/", (_: Request, res: Response, next: NextFunction) => {
  getJsonData()
    .then((users) => res.json(users))
    .catch((err) => {
      next(err);
    });
});

export const userRouter = router;
