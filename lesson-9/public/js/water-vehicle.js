import Vehicle from './vehicle.js';
export default class WaterVehicle extends Vehicle {
    constructor({ maxDepth }, vehicleProps) {
        super(vehicleProps);
        this.toString = () => {
            if (this.maxDepth > 0) {
                return `*** water-vehicles.ts ***\n\n${this.getString()} stabilized floating is possible at a maximum depth of ${this.maxDepth} meters.`;
            }
            return `*** water-vehicles.ts ***\n\n${this.getString()} can run on water, but not underwater.`;
        };
        this._maxDepth = maxDepth;
    }
    get maxDepth() {
        return this._maxDepth;
    }
    set maxDepth(value) {
        this._maxDepth = value;
    }
}
//# sourceMappingURL=water-vehicle.js.map