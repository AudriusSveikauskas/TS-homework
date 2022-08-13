/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
// eslint-disable-next-line import/no-unresolved,import/extensions
import Vehicle, { VehicleProps } from './vehicle.js';

export interface AirVehicleProps {
  maxAltitude: number;
}

export default class AirVehicle extends Vehicle implements AirVehicleProps {
  get maxAltitude(): number {
    return this._maxAltitude;
  }

  set maxAltitude(value: number) {
    this._maxAltitude = value;
  }

  private _maxAltitude: number;

  constructor({ maxAltitude }: AirVehicleProps, vehicleProps: VehicleProps) {
    super(vehicleProps);
    this._maxAltitude = maxAltitude;
  }

  override toString = () => `*** air-vehicle.ts ***\n\n${this.getString()} can fly at altitudes of up to ${
    this.maxAltitude
  } feet.`;
}
