import { Request } from "express";

interface Options {
  [prop: string]: {
    operator: string;
    type?: string;
  };
}

export default function getMongoFilters(req: Request, options: Options) {}
{
  
}
