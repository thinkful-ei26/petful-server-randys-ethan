'use strict';

class _Node {
  constructor(value) {
    this.value = value,
    this.next = null,
    this.prev = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      node.next = this.last;
      this.last.prev = node;
    }
    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }
    
    //make the second node the first node
    const node = this.first;
    this.first = node.prev;

    //if there is only 1 item in queue
    if (node === this.last) {
      this.last = null;
    }

    return node.value;
  }

  peek() {
    return this.first.value;
  }
}

module.exports = Queue;
