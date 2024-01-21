//Create an SList with values entered. Use the prompt function to gather values one at a time from the user,
//putting each into a ListNode that you add to the end of the list.
// When the user hits [Cancel], return the list you have created.

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
  // prompt the user for a value
  prompt() {
    let data = prompt('Enter a value ( press cancel to stop):');
    return data;
  }
  // add a node to the front of the list
  addFront(value) {
    var newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }
  // build the list
  buildList() {
    let value = this.prompt(); // prompt the user for a value
    while (value !== null) {
      this.addFront(value);
      value = this.prompt();
    }
  }
}

var SList = new LinkedList();
SList.buildList();
console.log(SList);
