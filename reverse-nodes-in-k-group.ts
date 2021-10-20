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

const reverse = (head: ListNode, tail: ListNode): void => {
	const tailNext = tail.next;
	let prev = tailNext;
	while (head !== tailNext) {
		const next = head.next;
		head.next = prev;
		prev = head;
		head = next;
	}
};
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
	let f = head;
	for (let i = 1; i < k && f !== null; i++) f = f.next;
	if (f === null) return head;
	f.next = reverseKGroup(f.next, k);
	reverse(head, f);
	return f;
}
