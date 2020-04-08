class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(val) {
        this.root = new Node(val);
        this.left = null;
        this.right = null;
    }

    insert(val) {

        // Set to left
        if(val < this.root.value) {
            this.root.left = new Node(val);
        }
        else if(val < this.root.value) {
            this.root.right = new Node(val);
        }

        return
    }

    print() {
        console.log(this.root);

        // console.log(this.root.value);
        // console.log('/  \\');
        // console.log(`${this.root.left} ${this.root.right}`);


    }
}

const tree1 = new BST(10);
//tree1.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);
tree1.print();


const tree2 = new BST(10);
tree2.insert(7);