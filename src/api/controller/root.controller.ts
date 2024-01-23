import { Request, Response } from "express";
import rootService from "../service/root.service";
import httpStatus from "http-status";

const health = (req: Request, res: Response) => {
  const _health = rootService.health();
  res.status(httpStatus.OK).json(_health);
};

export default {
  health,
};
