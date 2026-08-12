export function parse(phrase: string): string {
  const cleaned = phrase.replace(/_/g, "").replace(/-/g, " ");
  const words = cleaned.split(/\s+/).filter((w) => w.length > 0);
  return words.map((w) => w[0].toUpperCase()).join("");
}
