class Node {
    val: number;
    prev: Node | null;
    next: Node | null;
    child?: Node | null;
    random: Node | null;
    neighbors: Node[];
    constructor(
        val?: number,
        prev?: Node,
        next?: Node,
        child?: Node,
        random?: Node,
        neighbors?: Node[]
    ) {
        this.val = val === undefined ? 0 : val;
        this.prev = prev === undefined ? null : prev;
        this.next = next === undefined ? null : next;
        this.child = child === undefined ? null : child;
        this.random = random === undefined ? null : random;
        this.neighbors = neighbors === undefined ? [] : neighbors;
    }
}
