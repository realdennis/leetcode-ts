const maxdepth = _.memoize((node: TreeNode | null): number => {
    if (node === null) return 0;
    return 1 + Math.max(maxdepth(node.left), maxdepth(node.right));
});
function diameterOfBinaryTree(root: TreeNode | null): number {
    if (root === null) return 0;

    return Math.max(
        maxdepth(root.right) + maxdepth(root.left),
        diameterOfBinaryTree(root.right),
        diameterOfBinaryTree(root.left)
    );
}
