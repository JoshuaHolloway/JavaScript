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
const node = new Node("one");
console.log(node);

node.next = new Node("two");
console.log(node);

node.next.next = new Node("three");
console.log(node);
// =======================================================================
// =======================================================================