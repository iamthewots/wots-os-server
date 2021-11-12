import dotenv from "dotenv";
import express from "express";
import { MongoClient } from "mongodb";

dotenv.config();

const app = express();

const mongoClient = new MongoClient(process.env.MONGO_URI);
await mongoClient.connect();

const server = app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

export { mongoClient, server };
