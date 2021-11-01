function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (head === null) return null;

  const reverse = (head: ListNode, tail: ListNode): void => {
    const tailNext = tail.next;
    let prev = tailNext;
    while (head !== tailNext) {
      const next = head.next;
      head.next = prev;
      prev = head;
      head = next!;
    }
  };

  let f: ListNode | null = head;
  for (let i = 1; i < k && f !== null; i++) f = f.next;
  if (f === null) return head;
  f.next = reverseKGroup(f.next, k);
  reverse(head, f);
  return f;
}
