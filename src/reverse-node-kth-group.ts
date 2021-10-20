class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
	const reverse = (
		_head: ListNode | null,
		_tail: ListNode | null
	): ListNode | null => {
		let node = _head;
		let prevNode: ListNode | null = _tail.next;
		while (node && node !== _tail.next) {
			const next = node.next;
			node.next = prevNode;
			prevNode = node;
			node = next;
		}
		_head.next = reverseKGroup(head.next, k);
		return node;
	};

	if (head === null) return null;

	// f/s pointer to group k-th nodes
	let fast = head;
	let slow = head;
	let counts = k;
	while (fast !== null && --counts !== 0) fast = fast.next;

	// no group, early return
	if (counts !== 0) return head;
	return reverse(slow, fast);
}
