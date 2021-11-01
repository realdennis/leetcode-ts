function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode();
  dummy.next = head;

  let slow: ListNode | null = dummy,
    fast: ListNode | null = dummy;

  while (n-- !== 0 && fast != null) fast = fast.next; // revisit later
  if (fast === null) return head; // means n > list node counts

  while (fast.next !== null) {
    fast = fast.next;
    slow = slow!.next;
  }

  // remove slow.next
  slow!.next = slow!.next!.next;

  return dummy.next;
}
