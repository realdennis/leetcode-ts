function isValidBST(root: TreeNode | null): boolean {
    const validate = (
        node: TreeNode | null,
        min = Number.MIN_SAFE_INTEGER,
        max = Number.MAX_SAFE_INTEGER
    ): boolean => {
        if (node === null) return true;
        if (node.val <= min || node.val >= max) return false;

        return validate(node.left, min, node.val) && validate(node.right, node.val, max);
    };
    return validate(root);
}
