export interface ParsedReq {
  limit?: number;
  projection?: string;
  fields: {
    [prop: string]: any[];
  };
}