import express, { Response, Request } from "express";
import dotenv from "dotenv";
import cors from "cors";
const PORT = 8080 || process.env.NODE_PORT;
dotenv.config();
import rootController from "./api/controller/root.controller";
import logger from "./config/logger";

const startApp = () => {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.get("/", (req: Request, res: Response) => {
    res.send(`Hello World!`);
  });

  // Queues
  rootController.welcomeMailListWorker;
  rootController.emailVerificationMailWorker;
  rootController.resetPasswordMailWorker;

  app.listen(PORT, () => {
    logger.info(`Example app listening on port ${PORT}`);
    console.log(`Example app listening on port ${PORT} pineapple`);
  });
};

startApp();
