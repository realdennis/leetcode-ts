/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
export {};
const reverse = (node: ListNode | null): ListNode | null => {
  if (node === null) return null;
  let prev = null;
  while (node !== null) {
    const next: ListNode | null = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  return prev;
};

function isPalindrome(head: ListNode | null): boolean {
  if (head === null) return false;
  if (head.next === null) return true;

  let N = 0;
  let fast: ListNode | null = head;
  let slow: ListNode | null = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow!.next;
  }
  let right = reverse(slow);
  while (right) {
    if (right.val !== head!.val) return false;
    right = right.next;
    head = head!.next;
  }
  return true;
}
