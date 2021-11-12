import { Document } from "bson";
import { Request, Response } from "express";
import { HttpStatusCodes } from "../../helpers/http_status_codes.js";
import Mongo from "../../helpers/Mongo.js";
import ArticlesModel from "../../models/articles_model/main.js";

export default async function getArticles(req: Request, res: Response) {
  const parsedReq = req.parsedReq;
  if (!parsedReq || (!parsedReq.fields.slug && !parsedReq.fields.category)) {
    return res.sendStatus(HttpStatusCodes.bad_request);
  }

  const filters = {
    slug: parsedReq.fields.slug
      ? parsedReq.fields.slug.map((val) => {
          return {
            slug: {
              [Mongo.comOp.equal]: val.toString(),
            },
          };
        })
      : [],
    category: parsedReq.fields.category
      ? parsedReq.fields.category.map((val) => {
          return {
            category: {
              [Mongo.comOp.equal]: val.toString(),
            },
          };
        })
      : [],
  };

  if (filters.slug.length === 1 && filters.category.length === 0) {
    const findFilter = filters.slug[0];
    const article = await ArticlesModel.mongoClient.findOne(findFilter);
    if (!article) {
      return res.sendStatus(HttpStatusCodes.not_found);
    }
    return res.status(HttpStatusCodes.ok).send(article);
  } else {
    const mergedFilters = [...filters.slug, ...filters.category];
    if (mergedFilters.length === 0) {
      return res.sendStatus(HttpStatusCodes.bad_request);
    }
    const findFilter = {
      [Mongo.logOp.matchAny]: mergedFilters,
    };
    const cursor = await ArticlesModel.mongoClient.find(findFilter);
    if (parsedReq.limit) {
      cursor.limit(parsedReq.limit);
    }
    const articles: Document[] = [];
    await cursor.forEach((doc) => {
      articles.push(doc);
    });
  }
}
