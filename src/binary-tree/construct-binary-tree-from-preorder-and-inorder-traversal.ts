function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (preorder.length === 0) return null;

    const D = preorder.shift()!;
    const partitionIdx = inorder.indexOf(D);

    const leftInorder = inorder.slice(0, partitionIdx),
        rightInorder = inorder.slice(partitionIdx + 1);

    const leftPreorder = preorder.slice(0, partitionIdx),
        rightPreorder = preorder.slice(partitionIdx);

    const root = new TreeNode(D);
    root.left = buildTree(leftPreorder, leftInorder);
    root.right = buildTree(rightPreorder, rightInorder);
    return root;
}
