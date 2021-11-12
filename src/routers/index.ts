import { Router } from "express";
import articlesRouter from "./articles_router.js";
import usersRouter from "./users_router.js";

const router = Router();

router.use("/articles", articlesRouter);
router.use("/users", usersRouter);

export default router;
