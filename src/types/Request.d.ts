declare namespace Express {
  export interface Request {
    parsedReq?: { [prop: string]: any[] };
  }
}
