class ListNode {
  val: number;
  next: ListNode | null = null;
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
  }
}
