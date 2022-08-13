import Vehicle from './vehicle.js';
export default class LandVehicle extends Vehicle {
    constructor({ tires }, vehicleProps) {
        super(vehicleProps);
        this.toString = () => `*** land-vehicle.ts ***\n\n${this.tires.join(', ')} are suitable tires for ${this.getString()}.`;
        this._tires = tires;
    }
    get tires() {
        return this._tires;
    }
    set tires(value) {
        this._tires = value;
    }
}
//# sourceMappingURL=land-vehicle.js.map