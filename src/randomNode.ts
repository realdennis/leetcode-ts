/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

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
