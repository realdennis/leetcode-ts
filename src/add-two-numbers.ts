function addTwoNumbers(
	l1: ListNode | null,
	l2: ListNode | null
): ListNode | null {
	let root = l1;
	let carry = 0;
	while (l1 !== null && l2 !== null) {
		l1.val = carry + l1.val + l2.val;
		carry = 0;

		// handle carry
		if (l1.val > 9) {
			carry = Math.floor(l1.val / 10);
			l1.val %= 10;
		}

		// extend the shortest list
		if (l1.next === null && l2.next !== null) l1.next = new ListNode(0);
		if (l1.next !== null && l2.next === null) l2.next = new ListNode(0);

		// [corner case] handle the lastest carry case
		if (l1.next === null && l2.next === null && carry !== 0)
			l1.next = new ListNode(carry);

		l1 = l1.next;
		l2 = l2.next;
	}
	return root;
}
