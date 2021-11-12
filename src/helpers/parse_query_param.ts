export default function parseQueryValues(
  queryParam: any,
  convertTo: "boolean" | "number" | "string" = "string"
) {
  if (!queryParam) {
    return [];
  }

  const values = Array.isArray(queryParam) ? queryParam : [queryParam];

  return values.map((val) => {
    switch (convertTo) {
      case "boolean":
        return !!val;
      case "number":
        return parseFloat(val.toString());
      case "string":
      default:
        return val.toString();
    }
  });
}
