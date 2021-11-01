/**

Set a dummy head, then looping until all list is null

Always choose the minimum one(greedy), and the chosen one go to next;

Ignore the null pointer

**/
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    lists = lists.filter((list) => list !== null);
    const dummy = new ListNode();
    let ptr = dummy;

    while (lists.length !== 0) {
        let minList = lists.reduce((prev, next) => (prev!.val < next!.val ? prev : next));
        const minListIdx = lists.indexOf(minList);
        ptr.next = minList;
        ptr = ptr.next!;
        lists[minListIdx] = minList!.next;
        lists = lists.filter((list) => list !== null);
    }

    return dummy.next;
}
