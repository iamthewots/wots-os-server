import { Router } from "express";
import getArticles from "../controllers/articles_controllers/get_articles";
import parseGetRequest from "../middlewares/parse_get_request";

const router = Router();

router.get("/", parseGetRequest, getArticles);
export default router;
