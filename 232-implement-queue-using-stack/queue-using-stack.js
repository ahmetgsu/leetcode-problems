/*
Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.
Notes:

You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.

*/

class MyQueue {
    constructor() {
        this.inputStack = []
        this.outputStack = []
    }
    peek() {
        if (this.outputStack.length === 0) {
            while (this.inputStack.length > 0) {
                this.outputStack.push(this.inputStack.pop());
            }
        }
        return this.outputStack[this.outputStack.length - 1];
    }

    push(value) {
        this.inputStack.push(value)
        return this
    }

    pop() {
        if (this.outputStack.length === 0) {
            while (this.inputStack.length > 0) {
                this.outputStack.push(this.inputStack.pop())
            }
        }
        return this.outputStack.pop()
    }

    empty() {
        return this.inputStack.length === 0 && this.outputStack.length === 0;
    }
};
var obj = new MyQueue()
console.log("obj.push(2)", obj.push(2))
console.log("obj.push(3)", obj.push(3))
console.log("obj.pop()", obj.pop())
console.log(obj.empty())
console.log("obj.push(3)", obj.push(4))
console.log("obj.push(3)", obj.push(5))
console.log("obj.push(3)", obj.push(6))
console.log("obj.pop()", obj.pop())
console.log("obj.pop()", obj.pop())
console.log("obj.pop()", obj.pop())
console.log(obj.empty())

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */