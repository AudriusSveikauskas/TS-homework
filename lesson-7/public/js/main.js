"use strict";
const printTitle = (str) => console.log(`%c\n\t${str}\n`, 'color: #c0eb75; font-size: 14px');
const printResult = (value) => console.table(value);
class Stack {
    _index;
    constructor() {
        this._index = -1;
    }
    push = (data) => {
        this._index += 1;
        this[this._index] = data;
    };
    pop = () => {
        const lastItem = this[this._index];
        if (lastItem !== undefined) {
            delete this[this._index];
            if (this._index > -1) {
                this._index -= 1;
            }
        }
        return lastItem;
    };
    getLength = () => this._index + 1;
}
console.group('1. Sukurkitę sąrašo mazgo struktūrą ListNode, bet kokiam duomenų tipui');
class ListNode {
    data;
    next;
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
const listNode1 = { data: 4, next: null };
printTitle("'ListNode<number> = { data: 4, next: null }'");
printResult(listNode1);
const listNode2 = { data: 'Hello World!', next: null };
printTitle("'ListNode<string> = { data: 'Hello World!', next: null }'");
printResult(listNode2);
const listNode3 = {
    data: { name: 'Joe', surname: 'Doe' },
    next: null,
};
printTitle("'ListNode<object> = {\n\t\tdata: { name: 'Joe', surname: 'Doe' },\n\t\tnext: null\n\t }'");
printResult(listNode3);
const listNode4 = {
    data: [1, 2, 3, 4, 5],
    next: null,
};
printTitle("'ListNode<object> = {\n\t\tdata: [1, 2, 3, 4, 5],\n\t\tnext: null\n\t }''");
printResult(listNode4);
const listNode5 = { data: true, next: null };
printTitle("'ListNode<boolean> = { data: true, next: null }'");
printResult(listNode5);
console.groupEnd();
console.group('2. Sukurkite sąrašo klasę List');
class List {
    _head;
    _tail;
    _length = 0;
    constructor(data) {
        if (data !== undefined) {
            this._head = new ListNode(data);
            this._tail = this._head;
            this._length = this.length + 1;
        }
        else {
            this._head = null;
            this._tail = null;
        }
    }
    get length() {
        return this._length;
    }
    unshift = (data) => {
        const newNode = new ListNode(data);
        if (this._head === null) {
            this._head = newNode;
            this._tail = newNode;
        }
        else {
            newNode.next = this._head;
            this._head = newNode;
        }
        this._length = this.length + 1;
    };
    push = (data) => {
        const newNode = new ListNode(data);
        if (this._head === null) {
            this._head = newNode;
            this._tail = newNode;
        }
        else {
            this._tail.next = newNode;
            this._tail = newNode;
        }
        this._length = this.length + 1;
    };
    forEach = (callback) => {
        if (this._head === null) {
            return;
        }
        let currentNode = this._head;
        do {
            callback(currentNode.data);
            currentNode = currentNode.next;
        } while (currentNode !== null);
    };
    shift = () => {
        const shiftItem = this._head;
        if (this._head !== null) {
            this._head = this._head.next;
        }
        if (this._head === null) {
            this._tail = null;
        }
        this._length = this.length - 1;
        return shiftItem;
    };
    pop = () => {
        let current = this._head;
        let newTail = current;
        while (current.next !== null) {
            newTail = current;
            current = current.next;
        }
        this._tail = newTail;
        this._tail.next = null;
        if (this._length > 0) {
            this._length = this.length - 1;
        }
        return current;
    };
    reverse = () => {
        const tempStack = new Stack();
        while (this._head !== null) {
            tempStack.push(this.shift());
        }
        while (tempStack.getLength() > 0) {
            this.push(tempStack.pop().data);
        }
    };
    empty = () => {
        while (this._head !== null) {
            this.shift();
        }
    };
    copy = (list) => {
        list.forEach((n) => {
            this.push(n);
        });
    };
    splice(start, deleteCount, item) {
        if (!deleteCount && !item && start >= 0) {
            while (this._length > start) {
                this.pop();
            }
        }
        else if (!deleteCount && !item && start < 0) {
            for (let i = 1; i <= Math.abs(start); i += 1) {
                this.pop();
            }
        }
        else if (!item && start >= 0) {
            const tempList = new List();
            let current = this._head;
            for (let i = 1; i <= this.length; i += 1) {
                if (i <= start || i > start + deleteCount) {
                    tempList.push(current.data);
                }
                current = current.next;
            }
            while (this._head !== null) {
                this.shift();
            }
            this.empty();
            this.copy(tempList);
        }
        else if (!item && start < 0) {
            const tempList = new List();
            let current = this._head;
            for (let i = 1; i <= this.length; i += 1) {
                if (i <= this._length - Math.abs(start) ||
                    i > this._length - Math.abs(start) + deleteCount) {
                    tempList.push(current.data);
                }
                current = current.next;
            }
            this.empty();
            this.copy(tempList);
        }
    }
}
console.log('-------------------------------');
const list5 = new List();
list5.push(1);
list5.push(2);
list5.push(3);
list5.push(4);
list5.push(5);
list5.splice(1, 2);
console.log(list5);
console.log(list5.length);
console.log('-------------------------------');
const list1 = new List(777);
printTitle('List<number> = new List(777)');
printResult(list1);
const list2 = new List('Hello World!');
printTitle("List<string> = new List('Hello World!')");
printResult(list2);
const list3 = new List();
printTitle('List<boolean> = new List()');
printResult(list3);
console.groupEnd();
console.group('3. Sukurkite metodą pridėti elementui į sąrašo priekį.');
list1.unshift(111);
printTitle('list1.unshift(111)');
printResult(list1);
list2.unshift('Fox');
printTitle("list2.unshift('Fox')");
printResult(list2);
list3.unshift(true);
printTitle('list3.unshift(true)');
printResult(list3);
console.groupEnd();
console.group('4. Sukurkite metodą pridėti elementui į sąrašo galą.');
list1.push(987);
printTitle('list1.push(987)');
printResult(list1);
list2.push('JavaScript');
printTitle("list2.push('JavaScript')");
printResult(list2);
list3.push(false);
printTitle('list3.push(false)');
printResult(list3);
console.groupEnd();
console.group('5. Sukurkite metodą List.forEach klasėje List, kuris vykdytų parametru perduotą funkciją');
printTitle('list1.forEach(printResult)');
list1.forEach(printResult);
printTitle('list2.forEach(printResult)');
list2.forEach(printResult);
printTitle('list3.forEach(printResult)');
list3.forEach(printResult);
console.groupEnd();
const list4 = new List();
list4.push(1);
list4.push(2);
list4.push(3);
printTitle('Original list:');
list4.forEach(printResult);
printResult(list4);
printTitle('Reversed list:');
list4.reverse();
list4.forEach(printResult);
printResult(list4);
//# sourceMappingURL=main.js.map