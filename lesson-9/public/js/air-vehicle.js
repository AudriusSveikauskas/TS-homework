import Vehicle from './vehicle.js';
export default class AirVehicle extends Vehicle {
    constructor({ maxAltitude }, vehicleProps) {
        super(vehicleProps);
        this.toString = () => `*** air-vehicle.ts ***\n\n${this.getString()} can fly at altitudes of up to ${this.maxAltitude} feet.`;
        this._maxAltitude = maxAltitude;
    }
    get maxAltitude() {
        return this._maxAltitude;
    }
    set maxAltitude(value) {
        this._maxAltitude = value;
    }
}
//# sourceMappingURL=air-vehicle.js.map