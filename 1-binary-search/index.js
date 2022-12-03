
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearch {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.value < value) {
          // go left
          // Check if current node left == null then assign
          if (currentNode.left === null) {
            currentNode.left = newNode;
            return this;
          }
          // since currentNode Left contains value, update the currentNode Value
          currentNode = currentNode.left;
        } else {
          // go right
          if (currentNode.right === null) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  searchNode(value) {
    if (this.root === null) return null

    let currentNode = this.root
    while (true) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }

      return null;
    }
  }

  findSuccessor(val) {
    if (val.right !== null) {
      return this.minValue(val.right)
    }

    let successor = val.parent;
    while(successor !== null && val === successor.right) {
      val = successor
      successor = successor.parent
    }

    return successor
  }

  minValue = (value) => {
    let current = value
    while(current.left !== null) {
      current = current.left
    }

    return current
  }

  printInOrder(node) {
    if(node === null) {
      return []
    }

    this.printInOrder(node.left)
    console.log(node.value)
    this.printInOrder(node.right)
  }

  deleteAllNodesWithKey(leader, key) {
    let temp = leader;
    while(leader.value === x) {
      leader = leader.right
    }
  }
}

const tree = new BinarySearch();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

tree.printInOrder(tree.root)