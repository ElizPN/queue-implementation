class Queue {
    constructor() {
        this.inStack = [];
        this.outStack = [];
    }

    enqueue(item) {
        this.inStack.push(item);
    }

    dequeue() {
        if (this.outStack.length === 0) {
            while (this.inStack.length > 0) {
                this.outStack.push(this.inStack.shift());
            }
        }

        if (this.outStack.length === 0) {
            throw new Error("Queue is empty");
        }

        return this.outStack.shift();
    }

    isEmpty() {
        return this.inStack.length === 0 && this.outStack.length === 0;
    }

}

// Test cases
const queue = new Queue();

// Enqueue elements
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);




// Test dequeue
console.assert(queue.dequeue() === 1, "Dequeue failed 1");
console.assert(queue.dequeue() === 2, "Dequeue failed 2");

// // Test enqueue after dequeue
queue.enqueue(4);
console.assert(queue.dequeue() === 3, "Dequeue failed 3");
console.assert(queue.dequeue() === 4, "Dequeue failed 4");

// // Test empty queue
console.assert(queue.isEmpty() === true, "Queue not empty");

// Test empty queue dequeue (raises exception)
try {
    queue.dequeue();
} catch (error) {
    console.assert(error.message === "Queue is empty", "Unexpected error");
}

console.log("All tests passed!");