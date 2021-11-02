function increasingBST(root: TreeNode | null): TreeNode | null {
    // do in order traversal first
    if (root === null) return null;

    const inorder = (node: TreeNode | null): number[] => {
        return node === null ? [] : [...inorder(node.left), node.val, ...inorder(node.right)];
    };

    const nodes = inorder(root);
    const firstNode = nodes.shift()!;

    let _root = new TreeNode(firstNode);
    const _root_ref = _root;
    while (nodes.length !== 0) {
        const node = nodes.shift()!;
        _root.right = new TreeNode(node);
        _root = _root.right;
    }
    return _root_ref;
}
