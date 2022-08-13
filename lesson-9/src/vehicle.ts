export interface VehicleProps {
  brand: string;
  model: string;
  year: number;
}

export default class Vehicle {
  protected brand: string;

  protected model: string;

  protected year: number;

  constructor({ brand, model, year }: VehicleProps) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  protected getString = (): string => `${this.brand} ${this.model} (${this.year})`;
}
