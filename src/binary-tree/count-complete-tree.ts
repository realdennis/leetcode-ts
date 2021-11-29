const getLength = (node: TreeNode | null, direction: "left" | "right"): number =>
    node === null ? 0 : getLength(node[direction], direction) + 1;

function countNodes(root: TreeNode | null): number {
    let ret = 0;

    const backtracking = (node: TreeNode | null = root, prevRes = 1) => {
        if (node === null) return;
        if (node.left === null && node.right === null) {
            ret = prevRes;
            return;
        }
        const ll = getLength(node.left, "left"),
            lr = getLength(node.left, "right"),
            rl = getLength(node.right, "left");

        if (ll > lr || lr > rl) {
            // means left subtree is not full-tree + left is full but last node still in left
            backtracking(node.left, prevRes * 2);
        } else {
            backtracking(node.right, prevRes * 2 + 1);
        }
    };

    backtracking();
    return ret;
}
