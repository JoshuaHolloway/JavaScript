// https://visualgo.net/en/list
// https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints

// piece of data - val
// reference to next-node -> next
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// const node = new Node("one");
// console.log(node);

// node.next = new Node("two");
// console.log(node);

// node.next.next = new Node("three");
// console.log(node);
// =======================================================================
// =======================================================================
// =======================================================================
// =======================================================================
class SinglyLinkedList {
    constructor() {
        console.log('Constructor');
        this.head = null; // Pointer to head
        this.tail = null; // Pointer to tail
        this.length = 0; // Length
    } // constructor()

    push(val) {



        // Step 1: Accept new value
        // Step 2: Create new node with value
        let newNode = new Node(val)

        // Step 3:
        //  -If there is no head property on the list,
        //   set the head and tail to be the newly created node [edge case: empty]
        if (!this.head) { 
            // run if empty
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            //  -Else, set to next property on the tail to be the new node
            //   and set the tail property on the list to be the newly created node
            this.tail.next = newNode;
            this.tail = newNode;
        }

        // Step 4: Increment the length by 1
        this.length++;

        // Step 5: Print out for validation
        this.print();

        // Step 6: Return the list
        return this;

    } // push()

    print() {
        console.log(`Head: ${this.head.val},  Tail: ${this.tail.val}`);
    }



} // SinglyLinkedList class
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const list = new SinglyLinkedList();
list.push('A');
list.push('B');
list.push('C');
console.log(list);