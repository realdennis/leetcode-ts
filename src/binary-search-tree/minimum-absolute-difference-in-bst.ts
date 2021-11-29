function getMinimumDifference(root: TreeNode | null): number {
    let ret = Number.MAX_SAFE_INTEGER;

    // Let's do the morris traversal
    let cur = root;
    let prev = Number.MIN_SAFE_INTEGER;
    while (cur !== null) {
        if (cur.left !== null) {
            const left = cur.left;
            cur.left = null; // prune

            let rightmost = left;
            while (rightmost.right !== null) rightmost = rightmost.right;
            rightmost.right = cur;

            cur = left;
        } else {
            ret = Math.min(ret, cur.val - prev);
            prev = cur.val;
            cur = cur.right;
        }
    }
    return ret;
}
