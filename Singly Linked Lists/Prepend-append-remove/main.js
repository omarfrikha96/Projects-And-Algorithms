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
  display() {
    var runner = this.head;
    var list = '';
    while (runner) {
      list += `${runner.data} - `;
      runner = runner.next;
    }
    return console.log(list);
  }
  // create prependValue(value, target) that will insert a new node with the given value immediately before the node with the given value.
  prependValue(value, target) {
    var newNode = new Node(value);
    // Handle case where the list is empty
    if (!this.head) {
      // If the list is empty, make the new node the head of the list
      this.head = newNode;
      return this.head;
    }
    // Handle case where the target is the head of the list
    if (this.head.data === target) {
      // If the target is the head, make the new node the head and set its next to the old head
      newNode.next = this.head;
      this.head = newNode;
      return this.head;
    }
    var runner = this.head;
    while (runner.next && runner.next.data !== target) {
      // Find the target node or the end of the list
      runner = runner.next;
    }
    // Check if the target value was not found in the list
    if (!runner.next) {
      console.log('Target value not found in the list.');
      return this.head;
    }
    newNode.next = runner.next; // Set the new node's next to the target's next node
    runner.next = newNode; // Set the target's next node to the new node
    return this.head;
  }

  appendValue(value, target) {
    // Handle case where the list is empty
    if (!this.head) {
      // If the list is empty, make the new node the head of the list
      this.head = newNode;
      return this.head;
    }
    // Handle case where the target is the head of the list
    if (this.head.data === target) {
      // If the target is the head, make the new node the head and set its next to the old head
      newNode.next = this.head;
      this.head = newNode;
      return this.head;
    }
    var runner = this.head;
    var newNode = new Node(value);
    while (runner.next && runner.next.data !== target) {
      runner = runner.next;
    }
    // Check if the target value was not found in the list
    if (!runner.next) {
      console.log('Target value not found in the list.');
      return this.head;
    }
    newNode.next = runner.next; // Set the new node's next to the target's next node
    runner.next = newNode; // Set the target's next node to the new node
    return this.head;
  }

  removeVal(value) {
    // Handle case where the list is empty
    if (!this.head) {
      return this.head;
    }
    // Handle case where the target is the head of the list
    if (this.head.data === value) {
      this.head = this.head.next; // Set the head to the target's next node (removing the target node from the list)
      return this.head;
    }
    var runner = this.head;
    while (runner.next && runner.next.data != value) {
      runner = runner.next;
    }
    // Check if the target value was not found in the list
    if (!runner.next) {
      console.log('Target value not found in the list.');
      return this.head;
    }
    runner.next = runner.next.next; // Set the target's next node to the new node (removing the target node from the list)
    return this.head;
  }
}

SLL1 = new LinkedList();
SLL1.addFront(18);
SLL1.addFront(20);
SLL1.addFront(22);
SLL1.display();

SLL1.prependValue(19, 20);
SLL1.display();
SLL1.appendValue(21, 20);
SLL1.display();
SLL1.removeVal(20);
SLL1.display();
