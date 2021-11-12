import dotenv from "dotenv";
import express from "express";
import { MongoClient } from "mongodb";
import mainRouter from "./routers/index.js";

dotenv.config();

const app = express();
app.use("/", mainRouter);

const mongoClient = new MongoClient(process.env.MONGO_URI);
await mongoClient.connect();

const server = app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

export { mongoClient, server };
