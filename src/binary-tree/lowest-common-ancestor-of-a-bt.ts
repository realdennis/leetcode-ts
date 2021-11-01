function lowestCommonAncestor(
    root: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null
): TreeNode | null {
    if (root === null || root === p || root === q) return root;
    const leftRes = lowestCommonAncestor(root.left, p, q);
    const rightRes = lowestCommonAncestor(root.right, p, q);

    return leftRes !== null && rightRes !== null ? root : leftRes !== null ? leftRes : rightRes;
}
