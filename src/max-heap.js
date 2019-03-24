const Node = require("./node");

class MaxHeap {
  constructor() {
    this.root = null;
    this.parentNodes = [];
    this.nodes = [];
  }

  push(data, priority) {
    let node = new Node(data, priority);
    this.insertNode(node);
    this.shiftNodeUp(node);
  }

  pop() {
    // if (!this.isEmpty) {
    //   var rootData = this.root.data;
    //   var detachedRoot = this.detachRoot();
    //   this.restoreRootFomLastInsertedNode(detachedRoot);
    //   this.shiftNodeDown(this.root);
    //   return rootData;
    // }
    if (this.root != null) {
      var rootData = this.root.data;
      var detached = (detached = this.detachRoot());
      if (!this.isEmpty) {
        this.restoreRootFromLastInsertedNode(detached);
        this.shiftNodeDown(this.root);
      }
      return rootData;
    }
  }

  detachRoot() {
    const detachedRoot = this.root;
    this.root = null;
    if (this.parentNodes.indexOf(this.root) >= 0) {
      this.parentNodes.splice(this.parentNodes.indexOf(this.root), 1);
      //this.nodes.splice(this.nodes.indexOf(x), 1);
    }
    return detachedRoot;
  }

  restoreRootFomLastInsertedNode(detached) {
    //this.root = this.parentNodes.pop();
  }

  size() {
    return this.nodes.length;
  }

  isEmpty() {
    return this.parentNodes.length === 0;
  }

  clear() {
    this.root = null;
    this.parentNodes = [];
    this.nodes = [];
  }

  insertNode(node) {
    if (this.isEmpty()) {
      this.root = node;
      this.nodes.push(node);
      this.parentNodes.push(node);
    } else {
      this.nodes.push(node);
      this.parentNodes.push(node);
      this.parentNodes[0].appendChild(node);
      if (this.parentNodes[0].right != null) this.parentNodes.shift();
    }
  }

  shiftNodeUp(node) {
    //node.swapWithParent();
  }

  shiftNodeDown(node) {
    //node.swapWithParent();
  }
}

module.exports = MaxHeap;
