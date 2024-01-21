
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
  height(node = this.root) {
    if (node === null) {
      // if the node is null
      return 0; // return 0
    }
    var left = this.height(node.left); // get the height of the left subtree
    var right = this.height(node.right); // get the height of the right subtree
    if (left > right) {
      // if the left subtree is greater than the right subtree
      return 1 + left; // return the left subtree + 1
    } else {
      // if the right subtree is greater than or equal to the left subtree
      return 1 + right; // return the right subtree + 1
    }
  }

  isBalanced(node = this.root) {
    if (node === null) {
      // if the node is null
      return true; // return true
    }
    var left = this.height(node.left); // get the height of the left subtree
    var right = this.height(node.right); // get the height of the right subtree
    if (Math.abs(left - right) > 1) {
      // if the difference between the heights of the left and right subtrees is greater than 1
      return false; 
    }
    return this.isBalanced(node.left) && this.isBalanced(node.right); // return the result of isBalanced on the left and right subtrees
  }
}

var tree = new BST();
tree.add(10).add(20).add(5).add(7).add(15).add(30).add(25).add(35);
console.log(tree.height());
console.log(tree.isBalanced());