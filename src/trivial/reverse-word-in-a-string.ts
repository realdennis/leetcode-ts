function reverseWords(s: string): string {
  s += " ";
  let ret = "";
  const N = s.length;

  const isSpace = (str: string) => str === " ";
  const isEmpty = (str: string) => str.length === 0;

  const update = (word: string): void => {
    if (isEmpty(ret)) ret = word;
    else ret = word + " " + ret;
  };

  let word = "";
  for (let i = 0; i < N; i++) {
    if (isSpace(s[i])) {
      if (!isEmpty(word)) {
        update(word);
        word = "";
      }
    } else {
      word += s[i];
    }
  }

  return ret;
}
