class Stack {
    constructor() {
        this.items = {};
        this.top = 0;
    };

    push(data) {
        this.top++;
        this.items[this.top] = data;            
    };

    pop() {        
        let deletedData;

        if(this.top) {
            deletedData = this.items[this.top];
            delete this.items[this.top];
            this.top--;
            return deletedData;
        }
        return null;
    };

    peek(){
        if (!this.top) {
            return null;
        };
        return this.items[this.top];
    };

    getSize() {
        return this.top;
    };

    isEmpty(){
        if (!this.top) {
            return true;
        };
        return false;
    };

    print(){
        let result = "";
        for (let i = this.top; i > 0; i--) {
            result += this.items[i] + " "            
        }
        return result;
    };
};

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.print());
console.log(stack.getSize());

// console.log(stack.isEmpty());
// console.log(stack.pop());
// console.log(stack.isEmpty());
// console.log('Peeking:', stack.peek());
// console.log(stack.pop());