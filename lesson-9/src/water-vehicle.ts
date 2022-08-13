/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
// eslint-disable-next-line import/no-unresolved,import/extensions
import Vehicle, { VehicleProps } from './vehicle.js';

interface WaterVehicleProps {
  maxDepth: number;
  toString(): string;
}

export default class WaterVehicle extends Vehicle implements WaterVehicleProps {
  get maxDepth(): number {
    return this._maxDepth;
  }

  set maxDepth(value: number) {
    this._maxDepth = value;
  }

  private _maxDepth: number;

  constructor({ maxDepth }: WaterVehicleProps, vehicleProps: VehicleProps) {
    super(vehicleProps);
    this._maxDepth = maxDepth;
  }

  override toString = () => {
    if (this.maxDepth > 0) {
      return `*** water-vehicles.ts ***\n\n${this.getString()} stabilized floating is possible at a maximum depth of ${
        this.maxDepth
      } meters.`;
    }
    return `*** water-vehicles.ts ***\n\n${this.getString()} can run on water, but not underwater.`;
  };
}
