export {};
const getNode = _.memoize((val: number): Node => new Node(val));
const visited: Set<Node> = new Set();
function cloneGraph(node: Node | null): Node | null {
    if (node === null) return null;
    if (visited.has(node)) return getNode(node.val);
    visited.add(node);

    const _node = getNode(node.val);
    _node.neighbors = node.neighbors.map(cloneGraph);

    return _node;
}
