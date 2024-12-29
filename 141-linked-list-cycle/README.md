### First (naive) approach

#### <ins>Time Complexity</ins>

* while loop has `O(n)`
* map operations has `O(1)`
* comparison of `next` nodes has `O(1)`

*Overall time complexity* of this solution is `O(n)` where `n` is the number of nodes in the linked list.

#### <ins>Space Complexity</ins>

* Map is used to store `node.values` as `key` and `node.next` as `values`.
* In the worst-case where we have no cycle, we would store every node in the map which requires `O(n)` additional space.

*Overall space complexity* is `O(n)`.

### Second approach

We can use 2 pointers to detect a cycle in the list. This is also called `Floyd’s Tortoise and Hare Algorithm`. The idea is to move 2 pointers at different speed through a list until they meet on the same value.

#### <ins>Time Complexity</ins>

* while loop has `O(n)`

*Overall time complexity* of this solution is `O(n)`

#### <ins>Space Complexity</ins>

* We only have `slow` and `fast` pointers. So, they have has `O(1)`

*Overall space complexity* is `O(1)`.

### Step by step visualisation of 2nd approach

Let's use the following example: [3,2,0,-4] and `pos = 1` (cycle starts at the second node - 2 in this example)

```
3 -> 2 -> 0 -> -4
     ^           |
     |-----------|
```
<ins>Initial Step</ins>

Both slow and fast refers to head (node 3)

<ins>Step 1</ins>

`slow` moves to 2
`fast` moves to 0

```
Current List:
slow -> 2
fast -------> 0
3 -> 2 -> 0 -> -4
     ^           |
     |-----------|
```
<ins>Step 2</ins>

`slow` moves to 0
`fast` moves to 2

```
Current List:
        slow -> 0
        fast -------> 2
3 -> 2 -> 0 -> -4
     ^           |
     |-----------|
```

<ins>Step 3</ins>

`slow` moves to -4
`fast` moves to -4

```
Current List:
              slow, fast -> -4
3 -> 2 -> 0 -> -4
     ^           |
     |-----------|
```

At this step, both `slow` and `fast` meet at node -4 which indicates that we have a cycle in the list

***Key Improvements with the second approach***

* Less memory usage: `O(n) --> O(1)`

