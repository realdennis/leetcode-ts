const compareSymmetric = (left: TreeNode | null, right: TreeNode | null): boolean => {
    if (left === null && right === null) return true;
    if (left === null || right === null) return false;
    if (left.val !== right.val) return false;

    return compareSymmetric(left.left, right.right) && compareSymmetric(left.right, right.left);
};
function isSymmetric(root: TreeNode | null): boolean {
    if (root === null) return true;
    return compareSymmetric(root.left, root.right);
}
