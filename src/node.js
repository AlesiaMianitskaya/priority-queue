class Node {
  constructor(data, priority) {
    (this.data = data),
      (this.priority = priority),
      (this.parent = null),
      (this.left = null),
      (this.right = null);
  }

  appendChild(node) {
    if (this.left && this.right) {
      return;
    }
    if (this.left) {
      this.right = node;
      node.parent = this;
    } else {
      this.left = node;
      node.parent = this;
    }
  }

  removeChild(node) {
    if (node === this.left) {
      this.left.parent = null;
      this.left = null;
    } else if (node === this.right) {
      this.right.parent = null;
      this.right = null;
    } else {
      throw new Error("node is not a child");
    }
  }

  remove() {
    if (this.parent) {
      this.parent.removeChild(this);
    }
  }

  swapWithParent() {
    if (this.parent) {
      if (this === this.parent.left) {
        this.right = this.parent.right;

        if (this.left) {
          this.left.parent = this.parent;
          this.parent.left = this.left;
        }

        if (this.right) {
          this.right.parent = this.parent;
          this.parent.right = this.right;
        }

        if (this.parent.right) {
          this.parent.right.parent = this;
        }

        this.left = this.parent;

        [this.parent.parent, this.parent] = [this, this.parent.parent];

        if (this.parent) {
          if (this.parent.left === this.left) {
            this.parent.left = this;
          }

          if (this.parent.right === this.left) {
            this.parent.right = this;
          }
        }
      } else if (this === this.parent.right) {
        this.left = this.parent.left;

        if (this.left) {
          this.left.parent = this.parent;
          this.parent.left = this.left;
        }

        if (this.right) {
          this.right.parent = this.parent;
          this.parent.right = this.right;
        }

        this.right = this.parent;

        [this.parent.parent, this.parent] = [this, this.parent.parent];

        this.right.left.parent = this;

        if (this.parent) {
          if (this.parent.left === this.left) {
            this.parent.left = this;
          }

          if (this.parent.right === this.left) {
            this.parent.right = this;
          }
        }
      }
    }
  }
}

module.exports = Node;
