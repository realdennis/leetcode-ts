function multiply(num1: string, num2: string): string {
    if (num1 === "0" || num2 === "0") return "0";

    const M = num1.length,
        N = num2.length;
    const ret = Array.from({ length: M + N }, () => 0);

    const getNum = (digit: string): number => digit.charCodeAt(0) - "0".charCodeAt(0);

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            const localRes = getNum(num1[i]) * getNum(num2[j]);
            const carry = Math.floor(localRes / 10);
            const digit = localRes % 10;
            ret[i + j] += carry;
            ret[i + j + 1] += digit;
        }
    }
    for (let i = M + N - 1; i > 0; i--) {
        const carry = Math.floor(ret[i] / 10);
        ret[i] %= 10;
        ret[i - 1] += carry;
    }
    if (ret.length !== 0 && ret[0] === 0) ret.shift();

    return ret.join("");
}
