import { NextFunction, Request, Response } from "express";
import { HttpStatusCodes } from "../helpers/http_status_codes.js";
import { ParsedReq } from "../types/ParsedReq";

export default function parseGetRequest(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const parsedReq: ParsedReq = { fields: {} };

  handleUniqueKeys(req, parsedReq);
  const queryKeys = Object.keys(req.query);
  if (queryKeys.length === 0) {
    return res.sendStatus(HttpStatusCodes.bad_request);
  }

  queryKeys.forEach((key) => {
    const value = req.query[key];
    if (Array.isArray(value)) {
      parsedReq.fields[key] = value;
    } else {
      parsedReq.fields[key] = [value];
    }
  });

  req.parsedReq = parsedReq;
  next();
}

function handleUniqueKeys(req: Request, parsedReq: ParsedReq) {
  if (req.query.limit) {
    parsedReq.limit = parseInt(req.query.limit.toString());
    if (parsedReq.limit <= 0) {
      parsedReq.limit = 1;
    }
    delete req.query.limit;
  }

  if (req.query.projection) {
    parsedReq.projection = req.query.projection.toString();
    delete req.query.projection;
  }
}
