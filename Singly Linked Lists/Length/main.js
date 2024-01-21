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

  length() {
    var runner = this.head;
    var count = 0;
    while (runner != null) {
      count++;
      runner = runner.next;
    }
    return count;
  }

 
}

SLL1 = new LinkedList();
SLL1.addFront(18);
SLL1.addFront(20);
SLL1.addFront(22);
console.log(SLL1.length());
