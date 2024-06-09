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
    // Initialize the linked list with a single node
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head; // At start, head and tail are the same
    this.length = 1; // Length of the list starts at 1
  }

  // Method to append a node to the end of the list
  append(value) {
    // Create a new node
    const newNode = {
      value: value,
      next: null
    };
    // Link the current tail to the new node
    this.tail.next = newNode;
    // Update the tail to be the new node
    this.tail = newNode;
    // Increment the length of the list
    this.length++;
    // Return the linked list to allow chaining
    return this;
  }

  // Method to prepend a node to the beginning of the list
  prepend(value) {
    // Create a new node
    const newNode = {
      value: value,
      next: this.head // Link the new node to the current head
    };
    // Update the head to be the new node
    this.head = newNode;
    // Increment the length of the list
    this.length++;
    // Return the linked list to allow chaining
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode != null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
  }
  insert(index, value) {
    //check params
    if (index >= this.length) {
      return this.append;
    }
    const newNode = {
      value: value,
      next: null
    };
  }

  // Method to convert the linked list to an array
  toArray() {
    const array = [];
    let currentNode = this.head;
    // Traverse the linked list and collect the values in an array
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    // Return the array representation of the linked list
    return array;
  }
}

// Create a new linked list with the initial value 10
const myLinkedList = new LinkedList(10);
// Append the value 5 to the linked list
myLinkedList.append(5);
// Log the current state of the linked list
console.log(myLinkedList);
// Append the value 12 to the linked list
myLinkedList.append(12);
// Log the current state of the linked list
console.log(myLinkedList);
// Prepend the value 15 to the linked list
myLinkedList.prepend(15);
// Log the current state of the linked list
console.log(myLinkedList);
// Prepend the value 114 to the linked list
myLinkedList.prepend(114);
myLinkedList.insert(111, 200);
myLinkedList.printList();
// Log the current state of the linked list
console.log(myLinkedList);

// Convert the linked list to an array
const array = myLinkedList.toArray();
// Log the array representation of the linked list
console.log(array);

