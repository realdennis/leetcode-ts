export {};

import {
  MaxPriorityQueue,
  PriorityQueueItem,
} from "@datastructures-js/priority-queue";

function topKFrequent(nums: number[], k: number): number[] {
  const map: Map<number, number> = new Map();
  for (const num of nums) map.set(num, (map.get(num) || 0) + 1);

  const maxHeap: MaxPriorityQueue<[number, number]> = new MaxPriorityQueue({
    priority: (obj) => obj[1],
  });

  for (const entry of map) maxHeap.enqueue(entry);

  const ret: number[] = [];

  for (let i = 0; i < k; i++)
    ret.push(
      (maxHeap.dequeue() as PriorityQueueItem<[number, number]>).element[0]
    );

  return ret;
}
