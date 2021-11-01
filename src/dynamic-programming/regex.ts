export {};
function isMatch(s: string, p: string): boolean {
  if (s.length === 0) {
    if (
      p.length % 2 === 0 &&
      p
        .split("")
        .filter((ch, idx) => idx % 2 == 1)
        .filter((ch) => ch !== "*").length === 0
    )
      return true;
    else return false;
  }

  if (p.length === 0) return false;

  const nextIsStar = (): boolean => p.length > 1 && p[1] === "*";
  const currIsMatch = (): boolean => s[0] === p[0] || p[0] === ".";

  // normal case
  if (!nextIsStar() && currIsMatch())
    return isMatch(s.substring(1), p.substring(1));
  // * as multiple or as 0
  if (nextIsStar() && currIsMatch())
    return isMatch(s.substring(1), p) || isMatch(s, p.substring(2));
  // another chance while we treat the * as 0 times
  if (nextIsStar() && !currIsMatch()) return isMatch(s, p.substring(2));

  return false;
}
