export default class Mongo {
  static logOp = {
    matchAll: "$and",
    dontMatch: "$not",
    matchNone: "$nor",
    matchAny: "$or",
  };
  static comOp = {
    equal: "$eq",
    notEqual: "$ne",
    greater: "$gt",
    greaterOrEqual: "$gte",
    lower: "$lt",
    lowerOrEqual: "$lte",
    includes: "$in",
    doesntInclude: "$nin",
    exists: "$exists",
    isType: "$type",
  };
}

export type LogicalOperator = keyof typeof Mongo.logOp;

export type ComparisonOperator = keyof typeof Mongo.comOp;
