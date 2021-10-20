import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

class MedianFinder {
	ordered: MaxPriorityQueue<number> = new MaxPriorityQueue<number>({
		priority: (val) => val,
	});
	addNum(num: number): void {
		this.ordered.enqueue(num);
	}

	findMedian(): number {
		const size = this.ordered.size();
		const counts = Math.floor(size / 2);

		while (counts-- !== 0) {
			this.ordered.front;
		}
	}
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
