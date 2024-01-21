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
  moveMinToFront() {
    // Handle cases where the list is empty
    if (!this.head) {
      return this.head;
    }
    var current = this.head;
    var min = current.data;
    var minNode = current;
    while (current.next) {
      //find the minNode in the list
      if (current.data < min) {
        //if the current node's data is less than the min, set the min to the current node's data
        min = current.data;
        minNode = current;
      }
      current = current.next; //move to the next node
    }
    current = this.head; //reset current to the head of the list
    while (current.next != minNode) {
      //find the node before the minNode to remove it from the list
      current = current.next; //move to the next node
    }
    current.next = minNode.next; //remove the minNode from the list
    minNode.next = this.head; //move the minNode to the front of the list
    this.head = minNode; //make the minNode the head of the list
    return this.head;
  }
  moveMaxToBack() {
    // Handle cases where the list is empty
    if (!this.head) {
      return this.head;
    }
    var current = this.head;
    var max = current.data;
    var maxNode = current;
    // Find the maximum node and its previous node
    while (current.next) {
      if (current.next.data > max) {
        max = current.next.data;
        maxNode = current.next;
      }
      current = current.next;
    }
    current = this.head; //reset current to the head of the list
    while (current.next !== maxNode) { //find the node before the maxNode to remove it from the list
      current = current.next;
    }
    current.next = maxNode.next; // Remove the maxNode from the list
    current = this.head; //reset current to the head of the list
    while (current.next) { //find the last node in the list
      current = current.next; //move to the next node
    }
    current.next = maxNode; //add the maxNode to the end of the list
    maxNode.next = null; //set the next pointer of the maxNode to null
    return this.head;
  }
}

SLL1 = new LinkedList();
SLL1.addFront(40);
SLL1.addFront(20);
SLL1.addFront(45);
SLL1.addFront(18);
SLL1.addFront(22);

SLL1.display();
SLL1.moveMinToFront();
SLL1.display();
SLL1.moveMaxToBack();
SLL1.display();
