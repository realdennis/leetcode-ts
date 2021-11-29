function flatten(root: TreeNode | null) {
    // morris traversal
    let cur = root;
    while (cur !== null) {
        if (cur.left !== null) {
            let right = cur.right;
            let left = cur.left;

            // prune
            cur.left = null;

            let rightmost = left;
            while (rightmost.right !== null) rightmost = rightmost.right;
            rightmost.right = right;
            cur.right = left;
        }
        cur = cur.right;
    }
}
