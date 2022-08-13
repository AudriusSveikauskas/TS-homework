/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
// eslint-disable-next-line import/no-unresolved,import/extensions
import Vehicle, { VehicleProps } from './vehicle.js';

interface LandVehicleProps {
  tires: string[];
}

export default class LandVehicle extends Vehicle {
  get tires(): string[] {
    return this._tires;
  }

  set tires(value: string[]) {
    this._tires = value;
  }

  private _tires: string[];

  constructor({ tires }: LandVehicleProps, vehicleProps: VehicleProps) {
    super(vehicleProps);
    this._tires = tires;
  }

  override toString = () => `*** land-vehicle.ts ***\n\n${this.tires.join(
    ', ',
  )} are suitable tires for ${this.getString()}.`;
}
