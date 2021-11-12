import Model from "../main_model/main.js";
import createSlug from "./methods/create_slug.js";
import parseDocument from "./methods/parse_document.js";
import save from "./methods/save.js";

export default class ArticlesModel extends Model {
  static db = process.env.MAIN_DB;
  static collection = "articles";
  protected document = {};

  constructor() {
    super();
  }

  parseDocument = parseDocument;
  save = save;

  static createSlug = createSlug;
}
