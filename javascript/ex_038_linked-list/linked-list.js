export class LinkedList {
  constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
  
  push(value) {
    const newNode = new Node(value);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    if(!this.tail) return null;
    const output = this.tail.value;
    if(this.tail === this.head) {
      this.tail = null;
      this.head = null;
    }
    else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;
    return output;
  }

  shift() {
    if(!this.head) return null;
    const output = this.head.value;
    if(this.tail === this.head) {
      this.tail = null;
      this.head = null;
    }
    else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length--;
    return output;
  }

  unshift(value) {
    const newNode = new Node(value);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  delete(value) {
    if(this.head) {
      let current = this.head;
      while(current) {
        if(current.value === value) {
          if(current === this.head)
            this.shift();
          else if(current === this.tail)
            this.pop()
          else {
            current.prev.next = current.next;
            current.next.prev = current.prev;
            this.length--;
          }
          return;
        }
        current = current.next;
      }
    }
  }

  count() {
    return this.length;
  }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}