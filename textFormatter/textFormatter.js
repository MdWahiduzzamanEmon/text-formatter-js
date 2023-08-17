export const textFormatter = (key = "") => {
  if (typeof key !== "string") {
    console.error("Please provide a string");
    throw new Error("Please provide a string");
  }
  return key
    ?.replace?.(/_/g, " ")
    ?.replace?.(/\w\S*/g, (w) => w?.replace(/^\w/, (c) => c?.toUpperCase()))
    ?.replace(/([a-z])([A-Z])/g, "$1 $2")
    ?.trim();
};
