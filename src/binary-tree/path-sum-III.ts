const continuousSum = (node: TreeNode | null, targetSum: number): number => {
    if (node === null) return 0;
    return (
        (targetSum - node.val === 0 ? 1 : 0) +
        continuousSum(node.left, targetSum - node.val) +
        continuousSum(node.right, targetSum - node.val)
    );
};
function pathSum(root: TreeNode | null, targetSum: number): number {
    if (root === null) return 0;
    return (
        continuousSum(root, targetSum) +
        pathSum(root.left, targetSum) +
        pathSum(root.right, targetSum)
    );
}
