class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(node) {
        this.root = node;
        this.left = null;
        this.right = null;
    }

    new_node(node) {

        // Set to left
        if(node.left < this.root) {
        }
        else if(this.root < node.right) {
        }
    }

    print() {
        console.log(this.root);

        console.log(this.root.value);
        console.log('/  \\');
        console.log(`${this.root.left} ${this.root.right}`);


    }
}

const tree1 = new BST(new Node(10));
//tree1.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);

tree1.print();