export function encode(plaintext: string): string {
  const normalized = plaintext.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (normalized.length === 0) return "";

  const len = normalized.length;
  const c = Math.ceil(Math.sqrt(len));
  const r = (c - 1) * c >= len ? c - 1 : c;

  const padded = normalized.padEnd(r * c, " ");

  const columns: string[] = [];
  for (let col = 0; col < c; col++) {
    let colStr = "";
    for (let row = 0; row < r; row++) {
      colStr += padded[row * c + col];
    }
    columns.push(colStr);
  }

  return columns.join(" ");
}
