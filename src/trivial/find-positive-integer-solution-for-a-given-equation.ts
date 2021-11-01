/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * class CustomFunction {
 *      f(x: number, y: number): number {}
 * }
 */

function findSolution(customfunction: CustomFunction, z: number): number[][] {
    const f = customfunction.f.bind(customfunction); // somehow only typescript got the context error
    const ret: number[][] = [];
    for (let i = 1; i <= 1000; i++) {
        for (let j = 1; j <= 1000; j++) {
            if (f(i, j) > z) break;
            if (f(i, j) === z) ret.push([i, j]);
        }
    }

    return ret;
}
