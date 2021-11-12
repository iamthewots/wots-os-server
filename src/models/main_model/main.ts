import { mongoClient } from "../../server.js";

export default abstract class Model {
  static db: string;
  static collection: string;
  protected abstract document: any;

  abstract parseDocument(): void;
  abstract save(): void;

  static get mongoClient() {
    return mongoClient.db(this.db).collection(this.collection);
  }
}
