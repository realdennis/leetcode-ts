function minDiffInBST(root: TreeNode | null): number {
    let ret = Number.MAX_SAFE_INTEGER;
    const inorder = (node: TreeNode | null): number[] => {
        if (node === null) return [];

        const left = inorder(node.left);
        const right = inorder(node.right);

        ret = Math.min(
            ret,
            left.length === 0 ? Number.MAX_SAFE_INTEGER : node.val - left[left.length - 1],
            right.length === 0 ? Number.MAX_SAFE_INTEGER : right[0] - node.val
        );
        return [...left, node.val, ...right];
    };

    inorder(root);
    return ret;
}
