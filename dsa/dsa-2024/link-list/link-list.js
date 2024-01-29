class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    // this.size = 0;
  }

  //   isEmpty() {
  //     return this.size === 0;
  //   }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  prepend(data) {
    const newNode = new Node(data);

    if (newNode) {
      newNode.next = this.head.next;
      this.head = newNode;
    }
  }

  delete(data) {
    if (!this.head) {
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.data !== data) {
      current = current.next;
    }

    if (current.next == null) {
      return this.head;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current);
      current = current.next;
    }
  }
}

const result = new LinkList();
result.append(1);
result.append(2);
result.append(3);
result.append(4);
// console.log("🚀 ~ result2:", result);
// result.delete(1);
// console.log("🚀 ~ result2:", result);
// result.delete(4);
console.log("🚀 ~ result2:", result);
result.prepend(10);
console.log("🚀 ~ result2:", result);
// result.print();
