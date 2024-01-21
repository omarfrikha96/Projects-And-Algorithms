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
  contains(value) {
    var runner = this.head;
    while (runner) {
      if (runner.data === value) {
        return true;
      }
      runner = runner.next;
    }
    return false;
  }
}

SLL1 = new LinkedList();
SLL1.addFront(18);
SLL1.addFront(20);
console.log(SLL1.contains(18));
