const separateList = (head: ListNode): [ListNode, ListNode] => {
    const root = head;
    let slow: ListNode = head;
    let fast: ListNode | null = head;
    let prev: ListNode;

    while (fast && fast.next) {
        prev = slow;
        slow = slow.next!;
        fast = fast.next.next;
    }
    prev!.next = null; // de-dup the mid node.next actually
    return [root, slow];
};

function sortedListToBST(head: ListNode | null): TreeNode | null {
    if (head === null) return null;
    if (head.next === null) {
        const root = new TreeNode(head.val);
        return root;
    }

    let [left, right] = separateList(head);
    // reverse left and

    const rootHead = right;
    right = right.next!;

    const root = new TreeNode(rootHead.val);
    root.left = sortedListToBST(left);
    root.right = sortedListToBST(right);

    return root;
}
