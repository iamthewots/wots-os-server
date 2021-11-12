import Model from "../main_model/main";
import createSlug from "./methods/create_slug";
import parseDocument from "./methods/parse_document";
import save from "./methods/save";

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
