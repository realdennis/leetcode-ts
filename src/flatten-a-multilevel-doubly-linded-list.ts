function flatten(head: Node | null): Node | null {
  const stack: Node[] = []; // store the next
  let ptr = head;
  while (ptr !== null) {
    if (ptr.child !== null) {
      const next = ptr.next;
      const child = ptr.child;
      next !== null && stack.push(next);
      ptr.next = child;
      ptr.child = null;
    }
    if (ptr.next === null && stack.length !== 0) ptr.next = stack.pop() as Node;
    if (ptr.next !== null) ptr.next.prev = ptr;

    ptr = ptr.next;
  }

  return head;
}
