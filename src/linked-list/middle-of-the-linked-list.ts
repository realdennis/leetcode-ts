function middleNode(head: ListNode | null): ListNode | null {
  if (head === null) return null;

  let slow = head,
    fast: ListNode | null = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next!;
    fast = fast.next.next;
  }
  return slow;
}
