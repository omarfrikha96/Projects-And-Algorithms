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
  max() {
    var current = this.head;
    var max = current.data;
    while (current) {
      if (current.data > max) {
        max = current.data;
      }
      current = current.next;
    }
    return `maximum value is : ${max}`;
  }
  min() {
    var current = this.head;
    var min = current.data;
    while (current) {
      if (current.data < min) {
        min = current.data;
      }
      current = current.next;
    }
    return `minimum  value is : ${min}`;
  }
  average(){
    var current = this.head;
    var average = 0;
    while (current) {
      average += current.data;
      current = current.next;
    }
    return `average  value is : ${average}`;
  }
}

SLL1 = new LinkedList();
SLL1.addFront(18);
SLL1.addFront(20);
SLL1.addFront(22);
SLL1.display();
console.log(SLL1.min());
console.log(SLL1.max());
console.log(SLL1.average());
