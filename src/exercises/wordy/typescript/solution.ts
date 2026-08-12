export function answer(question: string): number | { error: string } {
  if (!question.startsWith("What is ") || !question.endsWith("?")) {
    return { error: "Unknown question or syntax error" };
  }

  const expr = question.slice("What is ".length, -1).trim();
  if (expr.length === 0) {
    return { error: "Syntax error" };
  }

  const normalized = expr
    .replace(/multiplied by/g, "multiplied_by")
    .replace(/divided by/g, "divided_by");

  const tokens = normalized.split(/\s+/);
  if (tokens.length === 0) return { error: "Syntax error" };

  let currentAcc: number | null = null;
  let currentOp: string | null = null;

  for (const token of tokens) {
    if (/^-?\d+$/.test(token)) {
      const num = parseInt(token, 10);
      if (currentAcc === null) {
        if (currentOp !== null) return { error: "Syntax error" };
        currentAcc = num;
      } else {
        if (currentOp === null) return { error: "Syntax error" };
        if (currentOp === "plus") currentAcc += num;
        else if (currentOp === "minus") currentAcc -= num;
        else if (currentOp === "multiplied_by") currentAcc *= num;
        else if (currentOp === "divided_by") currentAcc = Math.trunc(currentAcc / num);
        else return { error: "Unknown operation" };
        currentOp = null;
      }
    } else if (["plus", "minus", "multiplied_by", "divided_by"].includes(token)) {
      if (currentAcc === null || currentOp !== null) {
        return { error: "Syntax error" };
      }
      currentOp = token;
    } else {
      if (/^\d+$/.test(token)) {
        return { error: "Syntax error" };
      }
      return { error: "Unknown operation" };
    }
  }

  if (currentAcc === null || currentOp !== null) {
    return { error: "Syntax error" };
  }

  return currentAcc;
}
