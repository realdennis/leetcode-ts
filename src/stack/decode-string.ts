function decodeString(s: string): string {
  let res: string = "";
  let numStr: string = "";
  const stack: [string, string][] = [];

  for (let i = 0; i < s.length; i++) {
    const ch = s.charAt(i);
    if (
      ch.charCodeAt(0) - "a".charCodeAt(0) >= 0 &&
      ch.charCodeAt(0) - "a".charCodeAt(0) < 26
    ) {
      res += ch;
    }
    if (!Number.isNaN(Number(ch))) {
      numStr += ch;
    }

    if (ch === "[") {
      stack.push([res, numStr]);
    }
    if (ch === "]") {
      const [_res, _numStr] = stack.pop()!;
      res = _res + res.repeat(Number(_numStr));
    }
  }

  return res;
}
