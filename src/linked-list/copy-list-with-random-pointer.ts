export {};
const getNode = _.memoize((node: Node | null): Node | null =>
    node === null ? null : new Node(node.val)
);

function copyRandomList(head: Node | null): Node | null {
    if (head === null) return null;

    const val = head.val;
    const root = getNode(val);
    root.next = copyRandomList(head.next);
    root.random = head.random === null ? null : getNode(head.random.val);
    return root;
}
