export default function createSlug(title: string) {
  if (typeof title !== "string") {
    throw new Error("invalid_title");
  }

  return title.trim().toLowerCase().replace(/\W+/g, "-");
}
