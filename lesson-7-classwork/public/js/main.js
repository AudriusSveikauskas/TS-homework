"use strict";
const printTask = (str) => console.log(`%c\n${str}\n`, 'color: #74c0fc; font-size: 12px');
const printTitle = (str) => console.log(`%c\n\t${str}\n`, 'color: #ffe066; font-size: 13px');
const printResult = (data) => console.table(data);
printTask(`1. Dėklo (Stack) duomenų struktūros kūrimas.
  \t1.1. sukurkite konstruktorių, kuris nustatytų privačią savybę "index" į -1.
  \t1.2. Sukurkite metodą "push", kuris pridėtų elementą į struktūros galą, t.y.:
  \t\t vienetu didesniu indeksu nei dabartinis index.
  \t\t Po pridėjimo index savybę padidinkite vienetu.
  \t1.3. Sukurkite metodą "pop", kuris išimtų elementą iš struktūros galo.
  \t\t Po išėmimo index savybę sumažinkite vienetu.
  \t1.4. Sukurkite get\'erį "length", kuris grąžintų elementų kiekį struktūroje.`);
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
printTitle(`Action:
\t-> const numStack = new Stack();`);
const numStack = new Stack();
printResult(numStack);
printTitle(`Actions:
\t-> numStack.push(111);
\t-> numStack.push(222);
\t-> numStack.push(333);`);
numStack.push(111);
numStack.push(222);
numStack.push(333);
printResult(numStack);
printTitle(`Action:
\t-> numStack.pop();`);
printResult(`Deleted item: ${numStack.pop()}`);
printResult(numStack);
printTitle(`Action:
\t-> numStack.getLength();`);
numStack.getLength();
printResult(`numStack has ${numStack.getLength()} item(-s).`);
printTitle(`Actions:
\t-> const strStack = new Stack();`);
const strStack = new Stack();
printResult(strStack);
printTitle(`Actions:
\t-> strStack.push('Monday');
\t-> strStack.push('Tuesday');`);
strStack.push('Monday');
strStack.push('Tuesday');
printResult(strStack);
printTitle(`Action:
\t-> strStack.pop();`);
printResult(`Deleted item: ${strStack.pop()}`);
printResult(strStack);
printTitle(`Action:
\t-> strStack.getLength();`);
strStack.getLength();
printResult(`strStack has ${strStack.getLength()} item(-s).`);
printTask(`2. Eilės (Queue) duomenų struktūros kūrimas.
  \t2.1. sukurkite konstruktorių, kuris nustatytų privačią savybę "index" į -1.
  \t2.2. Sukurkite metodą "enqueue", kuris pridėtų elementą į struktūros priekį.
  \t\t Užtikrinkite kad kiti duomenys tavrkingai persislinktų ir indeksuotusi.
  \t2.3. Sukurkite metodą "dequeue", kuris išimtų elementą iš struktūros priekio.
  \t\t Užtikrinkite kad kiti duomenys tavrkingai persislinktų ir indeksuotusi.
  \t2.4. Sukurkite get\'erį "length", kuris grąžintų elementų kiekį struktūroje.`);
class Queue {
    _index;
    constructor() {
        this._index = -1;
    }
    enqueue = (data) => {
        if (this._index !== -1) {
            for (let i = this._index; i >= 0; i -= 1) {
                this[i + 1] = this[i];
            }
        }
        this[0] = data;
        this._index += 1;
    };
    dequeue = () => {
        const delItem = this[0];
        for (let i = 1; i <= this._index; i += 1) {
            this[i - 1] = this[i];
        }
        if (this._index > -1) {
            delete this[this._index];
            this._index -= 1;
        }
        return delItem;
    };
    getLength = () => this._index + 1;
}
printTitle(`Action:
\t-> const numQueue = new Queue();`);
const numQueue = new Queue();
printResult(numQueue);
printTitle(`Actions:
\t-> numQueue.enqueue(111);
\t-> numQueue.enqueue(222);
\t-> numQueue.enqueue(333);`);
numQueue.enqueue(111);
numQueue.enqueue(222);
numQueue.enqueue(333);
printResult(numQueue);
printTitle(`Action:
\t-> numQueue.pop();`);
printResult(`Deleted item: ${numQueue.dequeue()}`);
printResult(numQueue);
printTitle(`Action:
\t-> numQueue.getLength();`);
printResult(`numQueue has ${numQueue.getLength()} item(-s).`);
printTitle(`Action:
\t-> const strQueue = new Queue();`);
const strQueue = new Queue();
printResult(strQueue);
printTitle(`Actions:
\t-> strQueue.enqueue(Monday);
\t-> strQueue.enqueue(Tuesday)`);
strQueue.enqueue('Monday');
strQueue.enqueue('Tuesday');
printResult(strQueue);
printTitle(`Action:
\t-> strQueue.pop();`);
printResult(`Deleted item: ${strQueue.dequeue()}`);
printResult(strQueue);
printTitle(`Action:
\t-> strQueue.getLength();`);
printResult(`strQueue has ${strQueue.getLength()} item(-s).`);
//# sourceMappingURL=main.js.map