function recoverTree(root: TreeNode | null): void {
    const inorder = (node = root): TreeNode[] =>
        node === null ? [] : [...inorder(node.left), node, ...inorder(node.right)];
    const nodes: TreeNode[] = inorder(root);
    const N = nodes.length;
    let first: TreeNode | undefined, second: TreeNode | undefined;
    for (let i = 0; i < N; i++) {
        if (first === undefined) {
            if (nodes[i].val > nodes[i + 1].val) first = nodes[i];
        } else {
            if (nodes[i].val < nodes[i - 1].val) second = nodes[i];
        }
    }

    const temp = first!.val;
    first!.val = second!.val;
    second!.val = temp;
}
