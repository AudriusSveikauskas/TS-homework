export default class Person {
    _id;
    _name;
    _surname;
    constructor({ id, name, surname }) {
        this._id = id;
        this._name = name;
        this._surname = surname;
    }
    getPersonInfo() {
        return `\n\t\t${this._name} ${this._surname}\n\n\t\t\tEmployee ID:\n\t\t\t\t-> ${this._id}\n`;
    }
}
//# sourceMappingURL=person.js.map