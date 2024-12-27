### Push operation

* Push an item to the `inputStack`

<ins>Time Complexity</ins>: Adding an item to the top of a stack is constant-time operation `O(1)`
<ins>Space Complexity</ins>: Only the new item is added to the inputStack and this doesn't require additional space `O(1)`

#### <ins>Pop operation</ins>
The pop method removes and returns the item at the front of the queue (FIFO)

* if `outputStack` is empty, all elements from `inputStack` are transferred to `outputstack`. This action will reverse the order of items, and making the oldest item accessible at the top of `outputStack`
* The front of the queue becomes accessible by popping the top element from `outputStack`

<ins>Time Complexity</ins>

* Worst-case: when we transfer all items from `inputStack` to `outputStack` -> `O(n)`

<ins>Space Complexity</ins>: Since `inputStack` and `outputStack` stores items, the total number of items equals the size of the queue. So, the space complexity is proportional to the queue size `O(n)`

#### <ins>Peek operation</ins>
The peek method returns the item at the front of the queue without removing it.

* if `outputStack` is empty, all elements from `inputStack` are transferred to `outputstack`. This action will reverse the order of items, and making the oldest item accessible at the top of `outputStack`
* The front of the queue is accessed by peeking the top element of `outputStack`

<ins>Time Complexity</ins>

* Worst-case: when we transfer all items from `inputStack` to `outputStack` -> `O(n)`

<ins>Space Complexity</ins>: Similar to `pop`, both stacks collectively hold all the queue elements `O(n)`

#### <ins>Empty operation</ins>
The empty method checks whether the queue is empty by verifying if both `inputStack` & `outputstack` are empty.

<ins>Time Complexity</ins>: Checking the length of 2 stacks is a constant-time operation -> `O(1)`

<ins>Space Complexity</ins>: No additional space is required `O(1)`



