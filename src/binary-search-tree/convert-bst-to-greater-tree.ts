function convertBST(root: TreeNode | null): TreeNode | null {
    const findMax = (root: TreeNode | null): TreeNode | null => {
        if (root === null) return null;
        while (root.left) {
            root = root.left;
        }
        return root;
    };
    const greaterTree = (root: TreeNode | null, initialValue = 0): TreeNode | null => {
        if (root === null) return null;
        if (root.right !== null) {
            root.right = greaterTree(root.right, initialValue);
            root.val += findMax(root.right)!.val;
        } else {
            root.val += initialValue;
        }
        root.left = greaterTree(root.left, root.val);
        return root;
    };
    return greaterTree(root);
}
