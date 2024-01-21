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
    var current = this.head;
    var list = '';
    while (current) {
      list += `${current.data} - `;
      current = current.next;
    }
    return console.log(list);
  }
  back() {
    if (this.head == null) { // if the list is empty return null
      return null;
    }
    var current = this.head; // set current to the first node
    while (current.next) { // while the next node is not null (last node)
      current = current.next; // move to the next node
    }
    return current.data; // return the last node
  }
  removeBack() {
    if (this.head == null) { // if the list is empty return null
      return null;
    }
    var current = this.head; // set current to the first node
    while (current.next.next) { // while the next node is not null (last node)
      current = current.next; // move to the next node
    }
    current.next = null; // remove the last node
    return this.head;  // return this
  }
  addBack(value) {
    var newNode = new Node(value); // create a new node
    if (this.head == null) { // if the list is empty add the new node to the head
      this.head = newNode;
    }
    var current = this.head; // set current to the first node
    while (current.next) { // while the next node is not null (last node)
      current = current.next; // move to the next node
    }
    current.next = newNode; // add the new node to the end of the list
    return this.head;
  }
}

SLL1 = new LinkedList();
SLL1.addFront(18);
SLL1.addFront(20);
SLL1.addFront(22);
SLL1.display();
console.log(SLL1.back());
console.log(SLL1.removeBack());
SLL1.addBack(0);
SLL1.display();