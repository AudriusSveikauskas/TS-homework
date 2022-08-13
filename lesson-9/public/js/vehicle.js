export default class Vehicle {
    constructor({ brand, model, year }) {
        this.getString = () => `${this.brand} ${this.model} (${this.year})`;
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}
//# sourceMappingURL=vehicle.js.map