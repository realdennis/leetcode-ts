# Summary of Binary Tree

## Traversal

See the D(root) position
- Preorder (DLR)
- Inorder (LDR) 
- Postorder (LRD)
- Level order

### Implement traversal

1. Level order: Using BFS (queue structure)

```typescript

let queue:TreeNode = [];
queue.push(node);

while(queue.length !== 0) {
    let counts = queue.length;
    while(counts--!==0) {
        const first = queue.shift()!
        first.left!==null && queue.push(first.left);
        first.right!==null && queue.push(first.right);
    }
}
```

2. Inorder / Preorder / Postorder (stack structure)

```typescript
// inorder
const inorder = (root:TreeNode):TreeNode[] => root === null ? [] :[...inorder(root.left), root.val, ...inorder(root.right)]

// same as preorder & postorder, just put the root to first or last
```

3. Inorder (morris traversal) O(1) space (w/o call stack)

Raise up the `L` tree, and concat the `DR` to the rightmost of `L`, change the pointer to `L`.

```typescript
// inorder morris (no structure recover)

let cur = root
while(cur!==null) {
    const {left, right} = cur;
    if(left !== null) {
        // find rightmost of L
        let ptr = left;
        while(ptr.right!==null) ptr = ptr.right
        ptr.right = cur;
        cur.left = null; // prune
    }else {
        // collect the cur
        // move the cur to next
        cur = cur.right;
    }
}
```
