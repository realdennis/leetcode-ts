function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    // case 0. nothing to kill
    if (root === null) return null;

    // case 1. key in the root.left
    if (key < root.val) {
        root.left = deleteNode(root.left, key);
        return root;
    }

    // case 2. key in the root.right
    if (key > root.val) {
        root.right = deleteNode(root.right, key);
        return root;
    }

    // case 3. root is the key
    const left = root.left,
        right = root.right;

    if (left === null) return right;
    if (right === null) return left;

    // so we need to remove the root, and choose a new root val
    // from left's right-most (or right's left-most)
    let ptr = left;
    while (ptr.right !== null) ptr = ptr.right;

    root.val = ptr.val;
    root.left = deleteNode(left, ptr.val); // since we pick the left's rightmost, recursion kill this picked node

    return root;
}
