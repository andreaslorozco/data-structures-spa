class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;        
    };
};

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    };

    add(data) {
        const newNode = new Node(data, null);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            };
            current.next = newNode;
        };
        this.size++;
    };

    insertAt(data, index) {
        if (index > 0 && index > this.size) {            
            return null;            
        };
        const newNode = new Node(data);
        let current = this.head;
        let previous;

        if (index === 0) {
            newNode.next = current;
            this.head = newNode;
        } else {
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            };
            newNode.next = current;
            previous.next = newNode;
        };
        this.size++;
    };

    removeFrom(index) {
        console.log(this.size, index);
        
        if (index > 0 && index >= this.size) {
            return null;
        };
        let current, previous = 0;
        current = this.head;
        previous = current;

        if (index === 0) {
            this.head = current.next;
        } else {
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            };
            previous.next = current.next;
        };
        this.size--;
        return current.data;
    };
};

const firstNode = new Node('data', null);
const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
console.log(linkedList.insertAt('hello', 2));
console.log(linkedList.removeFrom(4));