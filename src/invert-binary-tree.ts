function invertTree(root: TreeNode | null): TreeNode | null {
	if (root === null) return null;
	[root.left, root.right] = [root.right, root.left];
	invertTree(root.left);
	invertTree(root.right);
	return root;
}
