/**

The idea is for this data stream, we can think about there're two part:

smaller part / bigger part

And we keep put the smaller part item to the `MAX HEAP`
                    bigger                   `MIN HEAP`

So the front of this two heap would be the median.

**/
export {};
class MedianFinder {
  minHeap = new MinPriorityQueue({
    priority: (val: number) => val,
  });
  maxHeap = new MaxPriorityQueue({
    priority: (val: number) => val,
  });

  addNum(num: number): void {
    if (this.minHeap.size() === 0 || num > this.minHeap.front().element) {
      this.minHeap.enqueue(num);
    } else {
      this.maxHeap.enqueue(num);
    }
    if (this.minHeap.size() > this.maxHeap.size() + 1) {
      this.maxHeap.enqueue(this.minHeap.dequeue().element);
    }
    if (this.maxHeap.size() > this.minHeap.size() + 1) {
      this.minHeap.enqueue(this.maxHeap.dequeue().element);
    }
  }

  findMedian(): number {
    if (this.minHeap.size() === this.maxHeap.size()) {
      return (this.minHeap.front().element + this.maxHeap.front().element) / 2;
    }
    if (this.minHeap.size() > this.maxHeap.size())
      return this.minHeap.front().element;
    else return this.maxHeap.front().element;
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
