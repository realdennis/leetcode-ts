const getHeightOf = _.memoize((root: TreeNode | null): number =>
    root === null ? 0 : 1 + Math.max(getHeightOf(root.left), getHeightOf(root.right))
);
function isBalanced(root: TreeNode | null): boolean {
    return root === null
        ? true
        : isBalanced(root.left) &&
              isBalanced(root.right) &&
              Math.abs(getHeightOf(root.left) - getHeightOf(root.right)) <= 1;
}
