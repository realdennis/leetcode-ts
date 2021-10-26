function trap(A: number[]): number {
  const N = A.length;

  /**
    
        Using monotonic queue(stack) to keep the decreasing height (it'd trap the water)
    
        1. Keep the queue(stack) decreasing
            1. so we keep pop-out the last if shorter
            2. then we update the water
        2. Before we add it in monotonic queue(stack)
            1. collect the rest water
    
    **/

  let lastHeight = 0;
  let ret = 0;

  let mq: [index: number, height: number][] = []; // decreasing

  for (let i = 0; i < N; i++) {
    const index = i;
    const height = A[i];

    while (mq.length !== 0 && mq[mq.length - 1][1] <= height) {
      const prev = mq.pop();
      const [prevIndex, prevHeight] = prev;

      const water = (index - prevIndex - 1) * (prevHeight - lastHeight);
      ret += water;

      lastHeight = prevHeight;
    }

    if (mq.length !== 0) {
      const prev = mq[mq.length - 1];
      const [prevIndex, prevHeight] = prev; // now current is the min height

      const water = (index - prevIndex - 1) * (height - lastHeight);
      ret += water;
    }
    mq.push([index, height]);
  }

  return ret;
}
