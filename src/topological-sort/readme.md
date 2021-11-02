# Summary of Topological Sort

## Topological sort pattern

1. prerequisites relation
    - `a > b` , `b > c`, `d < a`
    - [0,1], [1,0] prerequisite course
2. topological sort could check
    - If it's a legal relations
    - A sort order for these

## How to implement

1. Prerequisites
    1. Collect the in-degree (or out-degree, by case)
    2. Collect the adjacency graph
2. N times iteration
    1. Start from the degree 0
    2. Relax the 0-degree node's degree (to -1, de-dup)
    3. Relax the 0-degree noded's adjacency nodes, so next iteration we should find the new 0-degree

```typescript

const degree = Array.from({length:N}, ()=>0);
const graph:number[][] = Array.from({length:N}, ()=>[])

for(const relation of relations) {
    const [from, to] = relation;
    degree[to]++; // collect in-degree
    graph[to].push(from); // collect the adjacency
}

// do n times pick the zero degree
for(let i=0; i<N; i++) {
    const idx = degree.findIndex(deg => deg===0);
    if(idx === -1) return false; // or return [], means not legal to sort

    degree[idx]--;
    for(const adj of graph[idx]) degree[adj]--; // update the adjacency node's degree
}
```