function countNodes(root: TreeNode | null): number {
    if (root === null) return 0;

    const getHeight = (node: TreeNode | null): number => {
        let height = 0;
        let ptr = node;
        while (ptr !== null) {
            height++;
            ptr = ptr.left;
        }
        return height;
    };
    const isFullTree = (node: TreeNode | null): boolean => {
        if (node === null) return true;
        let left = node.left,
            right = node.right;
        while (left !== null && right !== null) {
            left = left.left;
            right = right.right;
        }
        return left === right; // should be null in same time
    };
    const traversal = (node: TreeNode | null, lo: number, hi: number): number => {
        let mi = Math.floor((lo + hi) / 2);
        if (node === null || isFullTree(node)) return hi;
        if (!isFullTree(node.right)) return traversal(node.right, mi + 1, hi);
        if (!isFullTree(node.left)) return traversal(node.left, lo, mi);

        return mi;
    };

    const treeHeight = getHeight(root);
    return traversal(root, 2 ** (treeHeight - 1), 2 ** treeHeight - 1);
}
