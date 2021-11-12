declare namespace Express {
  export interface Request {
    parsedReq?: {
      limit?: number;
      projection?: string;
      fields: {
        [prop: string]: any[];
      };
    };
  }
}
