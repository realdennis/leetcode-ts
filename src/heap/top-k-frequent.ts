export {};
function topKFrequent(nums: number[], k: number): number[] {
  const map: Map<number, number> = new Map();
  for (const num of nums) map.set(num, (map.get(num) || 0) + 1);

  const maxHeap = new MaxPriorityQueue({
    priority: (obj: number[]) => obj[1],
  });

  for (const entry of map) maxHeap.enqueue(entry);

  const ret: number[] = [];

  for (let i = 0; i < k; i++) ret.push(maxHeap.dequeue().element[0]);

  return ret;
}
