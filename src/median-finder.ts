import {
  MinPriorityQueue,
  MaxPriorityQueue,
  PriorityQueueItem,
} from "@datastructures-js/priority-queue";
class MedianFinder {
  minHeap: MinPriorityQueue<number> = new MinPriorityQueue({
    priority: (val) => val,
  });
  maxHeap: MaxPriorityQueue<number> = new MaxPriorityQueue({
    priority: (val) => val,
  });

  addNum(num: number): void {
    if (
      this.minHeap.size() === 0 ||
      num > (this.minHeap.front() as PriorityQueueItem<number>).element
    ) {
      this.minHeap.enqueue(num);
    } else {
      this.maxHeap.enqueue(num);
    }
    if (this.minHeap.size() > this.maxHeap.size() + 1) {
      this.maxHeap.enqueue(
        (this.minHeap.dequeue() as PriorityQueueItem<number>).element
      );
    }
    if (this.maxHeap.size() > this.minHeap.size() + 1) {
      this.minHeap.enqueue(
        (this.maxHeap.dequeue() as PriorityQueueItem<number>).element
      );
    }
  }

  findMedian(): number {
    if (this.minHeap.size() === this.maxHeap.size()) {
      return (
        ((this.minHeap.front() as PriorityQueueItem<number>).element +
          (this.maxHeap.front() as PriorityQueueItem<number>).element) /
        2
      );
    }
    if (this.minHeap.size() > this.maxHeap.size())
      return (this.minHeap.front() as PriorityQueueItem<number>).element;
    else return (this.maxHeap.front() as PriorityQueueItem<number>).element;
  }
}

// These union type made me sick...
