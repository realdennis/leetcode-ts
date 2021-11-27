function flatten(head: Node | null): Node | null {
    if (head === null) return null;
    const ref = head;

    const stack: Node[] = [];
    while (true) {
        if (head.child !== null) {
            head.next !== null && stack.push(head.next);
            head.next = head.child;
            head.child = null;
        }
        if (head.next === null) {
            if (stack.length === 0) break;
            head.next = stack.pop()!;
        }

        head.next!.prev = head;
        head = head.next!;
    }

    return ref;
}
