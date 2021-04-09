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
    // Read sampledata.json as buffer
    const data: Buffer = await fs.readFile(
      path.join(__dirname, "../../", "db", "sampledata.json")
    );

    // convert buffer to string and parse as json
    return await JSON.parse(data.toString());
  } catch (err) {
    throw new Error(err);
  }
}

router.get("/", (_: Request, res: Response, next: NextFunction) => {
  /**
   * cant make handler function async until 5.0 *sad trombone* so will have to make do with .then
   */
  getJsonData()
    .then((users) => res.json(users))
    .catch((err) => {
      /**
       * any caught errors will be internal server erros (most likely issues reading the file)
       * the suggested way to handle these errors it to pass it to the nextFunction and let express deal with it
       * */
      next(err);
    });
});

export const userRouter = router;
