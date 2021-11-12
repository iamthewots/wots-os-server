import { Router } from "express";
import articlesRouter from "./articles_router";
import usersRouter from "./users_router";

const router = Router();

router.use("/articles", articlesRouter);
router.use("/users", usersRouter);

export default router;
