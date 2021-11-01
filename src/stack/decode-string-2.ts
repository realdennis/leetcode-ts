export {};
function decodeString(s: string): string {
  let ret = "";
  let stack: string[][] = [];
  let digits = "";

  const isDigit = (ch: string) => !Number.isNaN(Number(ch));
  const isOpen = (ch: string) => ch === "[";
  const isClose = (ch: string) => ch === "]";
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (isDigit(ch)) digits += ch;
    else if (isOpen(ch)) {
      stack.push([ret, digits]); // collect the local variable
      ret = "";
      digits = "";
    } else if (isClose(ch)) {
      const [prevRet, prevDigits] = stack.pop()!;
      const times = Number(prevDigits);
      ret = prevRet + ret.repeat(times);
    } else ret += ch;
  }

  return ret;
}
