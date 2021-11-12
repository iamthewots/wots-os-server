import { Request, Response } from "express";
import { HttpStatusCodes } from "../../helpers/http_status_codes";
import parseQueryValues from "../../helpers/parse_query_param";

export default function getArticles(req: Request, res: Response) {
  if (!req.query.slug && !req.query.category) {
    return res.sendStatus(HttpStatusCodes.bad_request);
  }

  const slugs = parseQueryValues(req.query.slug);
  const categories = parseQueryValues(req.query.category);

  const mongoFilter = { $or: [] };
}
