function evalRPN(tokens: string[]): number {
  /**
        Using stack
    **/

  const stack: number[] = [];
  const isNumber = (input: string): boolean => !Number.isNaN(Number(input));

  for (const token of tokens) {
    if (isNumber(token)) stack.push(Number(token));
    else {
      const op2 = stack.pop();
      const op1 = stack.pop();
      if (token === "+") stack.push(op1 + op2);
      else if (token === "-") stack.push(op1 - op2);
      else if (token === "*") stack.push(op1 * op2);
      else if (token === "/") {
        stack.push((op1 / op2) << 0);
      }
    }
  }
  return stack.pop();
}
