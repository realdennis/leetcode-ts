function trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {
    if (root === null) return null;
    if (root.val < low) return trimBST(root.right, low, high);
    if (root.val > high) return trimBST(root.left, low, high);

    if (root.right && root.right.val > high) root.right = root.right.left;
    if (root.left && root.left.val < low) root.left = root.left.right;

    root.right = trimBST(root.right, low, high);
    root.left = trimBST(root.left, low, high);
    return root;
}
