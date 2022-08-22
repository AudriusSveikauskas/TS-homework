/* eslint no-console: ["error", { allow: ["log", "groupEnd", "table", "group"] }] */
/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */

// Helpers
const printTitle = (str: string) => console.log(`%c\n\t${str}\n`, 'color: #c0eb75; font-size: 14px');
const printResult = <T>(value: T) => console.table(value);

class Stack<T> {
  private _index: number;

  [i: number]: T | undefined;

  constructor() {
    this._index = -1;
  }

  push = (data: T) => {
    this._index += 1;
    this[this._index] = data;
  };

  pop = (): T | undefined => {
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

console.group(
  '1. Sukurkitę sąrašo mazgo struktūrą ListNode, bet kokiam duomenų tipui',
);

class ListNode<T> {
  data: T;

  next: ListNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

const listNode1: ListNode<number> = { data: 4, next: null };

printTitle("'ListNode<number> = { data: 4, next: null }'");
printResult(listNode1);

const listNode2: ListNode<string> = { data: 'Hello World!', next: null };

printTitle("'ListNode<string> = { data: 'Hello World!', next: null }'");
printResult(listNode2);

const listNode3: ListNode<object> = {
  data: { name: 'Joe', surname: 'Doe' },
  next: null,
};

printTitle(
  "'ListNode<object> = {\n\t\tdata: { name: 'Joe', surname: 'Doe' },\n\t\tnext: null\n\t }'",
);
printResult(listNode3);

const listNode4: ListNode<object> = {
  data: [1, 2, 3, 4, 5],
  next: null,
};

printTitle(
  "'ListNode<object> = {\n\t\tdata: [1, 2, 3, 4, 5],\n\t\tnext: null\n\t }''",
);
printResult(listNode4);

const listNode5: ListNode<boolean> = { data: true, next: null };

printTitle("'ListNode<boolean> = { data: true, next: null }'");
printResult(listNode5);

console.groupEnd();

console.group('2. Sukurkite sąrašo klasę List');

class List<T> {
  private _head!: ListNode<T> | null;

  private _tail!: ListNode<T> | null;

  private _length = 0;

  constructor(data?: T) {
    if (data !== undefined) {
      this._head = new ListNode(data);
      this._tail = this._head;
      this._length = this.length + 1;
    } else {
      this._head = null;
      this._tail = null;
    }
  }

  get length(): number {
    return this._length;
  }

  unshift = (data: T) => {
    const newNode = new ListNode(data);
    // Jei sąrašas tuščias ...
    if (this._head === null) {
      // ... tai naujas mazgas nustatomas kaip pirmas mazgas (head) ...
      this._head = newNode;
      // ...  ir kaip paskutinis mazgas (tail) ...
      this._tail = newNode;
      // ... bet jei sąraše jau yra mazgas -ai ...
    } else {
      // ... tai naujo mazgo adresas (next) nurodomas dabartinis (buvęs pirmas) mazgas ...
      newNode.next = this._head;
      // ... ir pirmu mazgu priskiriamas naujas mazgas.
      this._head = newNode;
    }
    this._length = this.length + 1;
  };

  push = (data: T) => {
    const newNode = new ListNode(data);
    if (this._head === null) {
      this._head = newNode;
      this._tail = newNode;
    } else {
      // @ts-ignore
      this._tail.next = newNode;
      this._tail = newNode;
    }
    this._length = this.length + 1;
  };

  forEach = (callback: ForEachCallbackFnc<T>) => {
    if (this._head === null) {
      return;
    }

    let currentNode: ListNode<T> = this._head!;

    do {
      callback(currentNode.data);
      currentNode = currentNode.next!;
    } while (currentNode !== null);
  };

  shift = (): ListNode<T> | null => {
    const shiftItem = this._head;

    if (this._head !== null) {
      this._head = this._head!.next;
    }

    if (this._head === null) {
      this._tail = null;
    }

    this._length = this.length - 1;
    return shiftItem;
  };

  pop = (): ListNode<T> | null => {
    let current = this._head;
    let newTail = current;

    while (current!.next !== null) {
      newTail = current;
      current = current!.next;
    }

    this._tail = newTail;
    this._tail!.next = null;

    if (this._length > 0) {
      this._length = this.length - 1;
    }

    return current;
  };

  reverse = () => {
    const tempStack = new Stack<ListNode<T> | null>();

    while (this._head !== null) {
      tempStack.push(this.shift());
    }

    while (tempStack.getLength() > 0) {
      this.push(tempStack.pop()!.data);
    }
  };

  empty = () => {
    while (this._head !== null) {
      this.shift();
    }
  };

  copy = (list: List<T>) => {
    list.forEach((n) => {
      this.push(n);
    });
  };

  splice(start: number, deleteCount?: number, item?: T | T[]) {
    if (!deleteCount && !item && start >= 0) {
      while (this._length > start) {
        this.pop();
      }
    } else if (!deleteCount && !item && start < 0) {
      for (let i = 1; i <= Math.abs(start); i += 1) {
        this.pop();
      }
    } else if (!item && start >= 0) {
      const tempList: List<T> | null = new List();
      let current = this._head;
      for (let i = 1; i <= this.length; i += 1) {
        if (i <= start || i > start + deleteCount!) {
          tempList.push(current!.data);
        }
        current = current!.next;
      }

      while (this._head !== null) {
        this.shift();
      }

      this.empty();
      this.copy(tempList);
    } else if (!item && start < 0) {
      const tempList: List<T> | null = new List();
      let current = this._head;
      for (let i = 1; i <= this.length; i += 1) {
        if (
          i <= this._length - Math.abs(start)
          || i > this._length - Math.abs(start) + deleteCount!
        ) {
          tempList.push(current!.data);
        }
        current = current!.next;
      }
      this.empty();
      this.copy(tempList);
    }
  }
}

const list1: List<number> = new List(777);

printTitle('List<number> = new List(777)');
printResult(list1);

const list2: List<string> = new List('Hello World!');

printTitle("List<string> = new List('Hello World!')");
printResult(list2);

const list3: List<boolean> = new List();

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

console.group(
  '5. Sukurkite metodą List.forEach klasėje List, kuris vykdytų parametru perduotą funkciją',
);

type ForEachCallbackFnc<T> = (data: T) => void;

printTitle('list1.forEach(printResult)');
list1.forEach(printResult);

printTitle('list2.forEach(printResult)');
list2.forEach(printResult);

printTitle('list3.forEach(printResult)');
list3.forEach(printResult);

console.groupEnd();

// Bonus
// Reverse

const list4: List<number> = new List();
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

// Slice

const list5: List<number> = new List();
list5.push(1);
list5.push(2);
list5.push(3);
list5.push(4);
list5.push(5);

printTitle('Original list:');
list5.forEach(printResult);
printResult(list5);

printTitle('Action:\n\t-> list5.splice(-2, 1);');
list5.splice(-2, 1);
printResult(list5);
