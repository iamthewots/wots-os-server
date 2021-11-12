import { NextFunction, Request, Response } from "express";
import { HttpStatusCodes } from "../helpers/http_status_codes";

export default function parseGetRequest(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const parsedReq: { [prop: string]: any[] } = {};
  const queryKeys = Object.keys(req.query);

  if (queryKeys.length === 0) {
    return res.sendStatus(HttpStatusCodes.bad_request);
  }

  queryKeys.forEach((key) => {
    const value = req.query[key];
    if (Array.isArray(value)) {
      parsedReq[key] = value;
    } else {
      parsedReq[key] = [value];
    }
  });

  req.parsedReq = parsedReq;
  next();
}
