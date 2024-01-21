
class BTNode {
  constructor(data) {
    this.data = data; // value of the node
    this.left = null; // left child pointer
    this.right = null; // right child pointer
  }
}
class BST {
  constructor() {
    this.root = null; // root of the tree
  }
  add(data) {
    var node = new BTNode(data);
    if (this.root == null) {
      // if the tree is empty
      this.root = node; // the root is the new node
      return this;
    }
    var current = this.root;
    while (current != null) {
      // if the tree is not empty
      if (current.data > node.data) {
        // if the current node is greater than the new node
        if (current.left == null) {
          // if the current node has no left child
          current.left = node; // the new node is the current node's left child
          break; // break out of the loop
        }
        current = current.left; // if the current node has a left child, move to the left child
      } else {
        // if the current node is less than or equal to the new node
        if (current.right == null) {
          // if the current node has no right child
          current.right = node; // the new node is the current node's right child
          break; // break out of the loop
        }
        current = current.right; // if the current node has a right child, move to the right child
      }
    }
    return this;
  }
  contains(data) {
    var current = this.root;
    while (current != null) {
      // if the tree is not empty
      if (current.data == data) {
        // if the current node is equal to the data
        return `${data} is in the tree `;
      } else if (current.data > data) {
        // if the current node is greater than the data
        current = current.left; // move to the left child
      } else {
        // if the current node is less than the data
        current = current.right; // move to the right child
      }
    }
    return `${data} is not in the tree `;
  }
  min() {
    var current = this.root;
    while (current.left != null) {
      // if the current node has a left child
      current = current.left; // move to the left child
    }
    return `the min value is ${current.data}  `;
  }
  max() {
    var current = this.root;
    while (current.right != null) {
      // if the current node has a right child
      current = current.right; // move to the right child
    }
    return `the max value is ${current.data}  `;
  }

  size(node = this.root) {
    if (node === null) {
      // if the node is null
      return 0; // return 0
    }
    var left = this.size(node.left); // get the size of the left subtree
    var right = this.size(node.right); // get the size of the right subtree
    return 1 + left + right; // return the sum of the left, right, and root
  }

  isEmpty() {
    if (this.root === null) {
      // if the root is null
      return "the tree is empty"; 
    }
    return  "the tree is not empty"; 
  }
}

var tree = new BST();
tree.add(10).add(20).add(5).add(7).add(15).add(30);
console.log(tree.contains(7));
console.log(tree.min());
console.log(tree.max());
console.log(tree.size());
console.log(tree.isEmpty());