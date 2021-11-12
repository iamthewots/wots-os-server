import { Request, Response } from "express";
import { HttpStatusCodes } from "../../helpers/http_status_codes";
import ArticlesModel from "../../models/articles_model/main";

export default async function getArticles(req: Request, res: Response) {
  const parsedReq = req.parsedReq;
  if (!parsedReq || (!parsedReq.slug && !parsedReq.category)) {
    return res.sendStatus(HttpStatusCodes.bad_request);
  }

  const filters = {
    slug: parsedReq.slug.map((val) => {
      return {
        slug: {
          $eq: val,
        },
      };
    }),
    category: parsedReq.category.map((val) => {
      return {
        category: {
          $in: val,
        },
      };
    }),
  };

  if (filters.slug.length === 1 && filters.category.length === 0) {
    const filter = filters.slug[0];
    const article = await ArticlesModel.mongoClient.findOne(filter);
  }
}
