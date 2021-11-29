function delNodes(root: TreeNode | null, to_delete: number[]): (TreeNode | null)[] {
    const shouldDelete = _.memoize(
        (node: TreeNode | null) => node !== null && to_delete.includes(node.val)
    );
    const ret: (TreeNode | null)[] = [];
    const backtracking = (node: TreeNode | null = root, isRoot = true): void => {
        if (node === null) return;

        const left = node.left,
            right = node.right;

        if (shouldDelete(left)) node.left = null;
        if (shouldDelete(right)) node.right = null;

        if (isRoot && !shouldDelete(node)) ret.push(node);

        backtracking(left, shouldDelete(node));
        backtracking(right, shouldDelete(node));
    };

    backtracking(root, true);

    return ret;
}
