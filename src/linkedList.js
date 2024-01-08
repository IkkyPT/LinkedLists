import createNode from "./node";

// Create Linked List function
const linkedList = (() => {
    function createLinkedList() {
        return {
            head: null,
            tail: null,
            append,
            prepend,
            size,
            getHead,
            getTail,
            at,
        };
    }

    // adds a new node containing value to the start of the list
    function prepend(value) {
        const newNode = createNode(value, this.head);
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
    }

    // adds a new node containing value to the end of the list
    function append(value) {
        const newNode = createNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
    }

    // returns the total number of nodes in the list
    function size() {
        let count = 0;
        let current = this.head;
        while (current) {
            current = current.nextNode;
            count++;
        }
        return count;
    }

    // returns the first node in the list
    function getHead() {
        const headNode = this.head;
        return headNode;
    }

    // returns the last node in the list
    function getTail() {
        const tailNode = this.tail;
        return tailNode;
    }

    function at(index) {
        let nodeIndex = 0;
        let current = this.head;
        while(current) {
            if(index === nodeIndex) {
                return current;
            }
            current = current.nextNode;
            nodeIndex++;
        }
        return null;
    }



    return {
        createLinkedList,
        append,
        prepend,
        size,
        getHead,
        getTail,
        at,    
    };
})();

console.log(linkedList.prepend(69));
console.log(linkedList.append(68));
console.log(linkedList.size());
console.log(linkedList.getHead());
console.log(linkedList.getTail());
console.log(linkedList.at(0));
