import express, { Response, Request } from "express";
import dotenv from "dotenv";
import cors from "cors";
const PORT = 8080 || process.env.NODE_PORT;
dotenv.config();

const startApp = () => {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.get("/", (req: Request, res: Response) => {
    res.send(`Hello World!`);
  });

  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
};

startApp();
