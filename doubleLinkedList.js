class Node {
    constructor(data, next, prev) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    };
};

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    };

    addToHead(data) {
        const newNode = new Node(data, this.head, null);

        if (this.head) {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        };
        this.size++;
    };

    addToTail(data) {
        const newNode = new Node(data, null, this.tail);

        if (this.tail) {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.tail = newNode;
            this.head = newNode;
        };
        this.size++;
    };

    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            return null
        };

        const newNode = new Node(data, null, null);
        let current = this.head;
        let previous;

        if (index === 0) {
            newNode.next = current;
            current.prev = newNode;
            this.head = newNode;
        } else {
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            };

            newNode.next =current;
            newNode.prev = previous;
            current.prev = newNode;
            previous.next = newNode;
        };
        this.size++;
    };

    removeFromHead() {
        if (!this.head) {
            return null
        };

        const valueToReturn = this.head.data;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        };
        this.size--;
        return valueToReturn;
    }

    removeFromTail() {
        if (!this.tail) {
            return null
        };

        const valueToReturn = this.tail.data;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        };
        this.size--;
        return valueToReturn;
    };

    removeData(data) {
        let current = this.head;
        let previous = null;

        while(current !== null) {
            if (current.data === data) {
                if (!previous) {
                    this.removeFromHead();
                } else if (!current.next) {
                    this.removeFromTail();
                } else {
                    previous.next = current.next;
                    current.next.prev = previous;
                };
                this.size--;
                return current.data;
            };
            previous = current;
            current = current.next;
        };
        return null;
    }

    print() {
        let current = this.head;
        let result = '';
        while(current) {
            result += current.data + ' <-> ';
            current = current.next;
        };

        return result += ' X ';
    };

    reversePrint() {
        let current = this.tail;
        let result = '';
        while(current) {
            result += current.data + ' <-> ';
            current = current.next;
        };

        return result += ' X ';
    };

    getSize() {
        return this.size;
    };

    isEmpty() {
        return this.size === 0;
    };
}

const doubleLinkedList = new DoubleLinkedList();
doubleLinkedList.addToHead(3);
doubleLinkedList.addToHead(2);
doubleLinkedList.addToTail(7);
doubleLinkedList.addToTail(8);
doubleLinkedList.insertAt(4, 2);
doubleLinkedList.removeFromHead();
doubleLinkedList.removeFromTail();
doubleLinkedList.removeData(4);
console.log(doubleLinkedList.getSize());

console.log(doubleLinkedList.print())