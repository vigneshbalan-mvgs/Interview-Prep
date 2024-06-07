// Node class to represent each element in the linked list
class Node {
    int value; // The value stored in the node
    Node next; // Reference to the next node in the list

    // Constructor to initialize a new node with a value
    Node(int value) {
        this.value = value;
        this.next = null; // Next is initially set to null
    }
}

// LinkedList class to manage the linked list operations
class LinkedList {
    private Node head; // Reference to the first node in the list
    private Node tail; // Reference to the last node in the list
    private int length; // The number of nodes in the list

    // Constructor to initialize the linked list with the first node
    public LinkedList(int value) {
        Node newNode = new Node(value);
        this.head = newNode; // Head points to the new node
        this.tail = newNode; // Tail also points to the new node initially
        this.length = 1; // Length is initially 1
    }

    // Method to append a node to the end of the list
    public LinkedList append(int value) {
        Node newNode = new Node(value); // Create a new node
        this.tail.next = newNode; // Link the current tail node to the new node
        this.tail = newNode; // Update the tail to be the new node
        this.length++; // Increment the length of the list
        return this; // Return the list to allow method chaining
    }

    // Method to prepend a node to the beginning of the list
    public LinkedList prepend(int value) {
        Node newNode = new Node(value); // Create a new node
        newNode.next = this.head; // Link the new node to the current head
        this.head = newNode; // Update the head to be the new node
        this.length++; // Increment the length of the list
        return this; // Return the list to allow method chaining
    }

    // Method to convert the linked list to an array
    public int[] toArray() {
        int[] array = new int[this.length]; // Create an array of the list's length
        Node currentNode = this.head; // Start from the head node
        int index = 0; // Initialize the index for the array
        while (currentNode != null) {
            array[index] = currentNode.value; // Add the current node's value to the array
            currentNode = currentNode.next; // Move to the next node
            index++; // Increment the array index
        }
        return array; // Return the array representation of the list
    }

    // Main method to test the LinkedList implementation
    public static void main(String[] args) {
        // Create a new linked list with the initial value 10
        LinkedList myLinkedList = new LinkedList(10);
        
        // Append the value 5 to the linked list
        myLinkedList.append(5);
        // Print the current state of the linked list as an array
        printArray(myLinkedList.toArray());
        
        // Append the value 12 to the linked list
        myLinkedList.append(12);
        // Print the current state of the linked list as an array
        printArray(myLinkedList.toArray());
        
        // Prepend the value 15 to the linked list
        myLinkedList.prepend(15);
        // Print the current state of the linked list as an array
        printArray(myLinkedList.toArray());
        
        // Prepend the value 114 to the linked list
        myLinkedList.prepend(114);
        // Print the current state of the linked list as an array
        printArray(myLinkedList.toArray());
    }

    // Helper method to print the elements of an array
    private static void printArray(int[] array) {
        for (int value : array) {
            System.out.print(value + " "); // Print each value followed by a space
        }
        System.out.println(); // Print a newline at the end
    }
}

