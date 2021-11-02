function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (root === null) return root;
    if (root.val === key) {
        const { left, right } = root;
        if (left === null) return right;
        else if (right === null) return left;
        let ptr = left;
        while (ptr.right !== null) ptr = ptr.right;
        ptr.right = right;
        return left;
    } else if (root.left && root.left.val === key) {
        const { left, right } = root.left;
        if (left === null) root.left = right;
        else {
            let ptr = left;
            while (ptr.right !== null) ptr = ptr.right;
            ptr.right = right;
            root.left = left;
        }
    } else if (root.right && root.right.val === key) {
        const { left, right } = root.right;
        if (left === null) root.right = right;
        else {
            let ptr = left;
            while (ptr.right !== null) ptr = ptr.right;
            ptr.right = right;
            root.right = left;
        }
    } else if (root.val < key) {
        root.right = deleteNode(root.right, key);
    } else {
        root.left = deleteNode(root.left, key);
    }
    return root;
}
