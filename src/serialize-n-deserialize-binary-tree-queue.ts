/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  let ret: (number | string)[] = [];

  if (root === null) return "";

  const queue = [];
  queue.push(root);

  while (queue.length !== 0) {
    let counts = queue.length;
    while (counts-- !== 0) {
      const first = queue.shift();
      if (first === null) {
        ret.push("#");
        continue;
      }
      ret.push(first.val);
      queue.push(first.left);
      queue.push(first.right);
    }
  }
  return ret.join(",");
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  if (data === "") return null;
  const res = data.split(",").map((str) => (str === "#" ? null : Number(str)));
  const root = new TreeNode(res.shift());

  const queue = [];
  queue.push(root);

  while (queue.length !== 0) {
    let node = queue.shift();
    if (res.length > 0) {
      const next = res.shift();
      if (next !== null) node.left = new TreeNode(next);
    }
    if (res.length > 0) {
      const next = res.shift();
      if (next !== null) node.right = new TreeNode(next);
    }
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }
  return root;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
