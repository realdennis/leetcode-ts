# Summary Binary Search Tree

## Recall the definition

1. Each tree node n, `n.left.val` < `n.val` < `n.right.val`
2. So all left sub-tree values should smaller than root
3. So all right sub-tree values should bigger than root

## Deal with the BST prob

1. Recursion, just focus on `node` & `node.left` & `node.right`
    - eg. `trim-a-binary-search-tree.ts`
2. Scope the min val and max val question
    - recursion and pass as params
        - for `root.left`, max bound should be `root.val`
        - for `root.right`, min bound should be `root.val`
    - eg. `validate-binary-search-tree.ts`
3. Inorder (LDR) traversal would be increasing sorted array
4. Inorder traversal could be replaced to Morris traversal (space O(1)), by raising up the L tree, concat the D(root) to `rightmost` of L.
5. Delete node `n`
    - raise up the `n.left`
    - Put the `n.right` to the rightmost of `n.left`
        - if `n.left` is null, just raising up `n.right`
