export {};

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  const path: (TreeNode | null)[] = [];
  const preorder = (node: TreeNode | null) => {
    path.push(node);
    if (node === null) {
      return;
    }
    preorder(node.left);
    preorder(node.right);
  };

  preorder(root);
  return path.map((node) => (node === null ? "#" : node.val)).join(",");
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  if (data === "") return null;
  const path = data
    .split(",")
    .map((val) => (val === "#" ? null : new TreeNode(Number(val))));

  const preorder = (path: (TreeNode | null)[]): TreeNode | null => {
    if (path.length === 0) return null;
    const node = path.shift()!;
    if (node === null) return null;

    node.left = preorder(path);
    node.right = preorder(path);

    return node;
  };
  return preorder(path);
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
