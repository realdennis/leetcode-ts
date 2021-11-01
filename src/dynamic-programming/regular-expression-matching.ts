function isMatch(s: string, p: string): boolean {
    const _isMatch = _.memoize(
        (ptrS: number, ptrP: number): boolean => {
            if (ptrS >= s.length) {
                if (ptrP < p.length && p[p.length - 1] !== "*") return false;
                while (ptrP + 1 < p.length) {
                    if (p[ptrP + 1] !== "*") return false;
                    ptrP += 2;
                }
                return true;
            }
            if (ptrP >= p.length) return false;

            const nextIsStar = (): boolean => ptrP + 1 < p.length && p[ptrP + 1] === "*";
            const currIsMatch = (): boolean => s[ptrS] === p[ptrP] || p[ptrP] === ".";

            if (!nextIsStar() && currIsMatch()) return _isMatch(ptrS + 1, ptrP + 1);

            if (nextIsStar() && currIsMatch())
                return _isMatch(ptrS + 1, ptrP) || _isMatch(ptrS, ptrP + 2);

            if (nextIsStar() && !currIsMatch()) return _isMatch(ptrS, ptrP + 2);

            return false;
        },
        (...args: number[]) => JSON.stringify(args)
    );
    return _isMatch(0, 0);
}
