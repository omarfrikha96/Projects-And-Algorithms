class Node {
  //create a node class
  constructor(data) {
    this.data = data; //give the node a data property
    this.next = null; // pointer to the next node
  }
}

class LinkedList {
  constructor() {
    this.head = null; //first node in the list
  }
  addFront(value) {
    var newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    return this.head; // or you can return return this;
  }
  removeFront() {
    if (this.head) {
      this.head = this.head.next;
    }
    return this;
  }
  front() {
    if (this.head) {
      return this.head.data;
    }
    return null;
  }
}

SLL1 = new LinkedList();
SLL1.addFront(18);
SLL1.addFront(20);
// console.log(SLL1.removeFront());
// console.log(SLL1.front());
