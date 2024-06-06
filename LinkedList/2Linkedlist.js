//10-- > 5-- > 16
//
//linkedlist in js
//let myLinkedList = {
// head: {
//   value: 10,
//   next: {
//     value: 5,
//     next: {
//       value: 16,
//       next: null
//     }
//   }
//  }
//}


class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
  }
}

const myLinkedList = new LinkedList(10);
