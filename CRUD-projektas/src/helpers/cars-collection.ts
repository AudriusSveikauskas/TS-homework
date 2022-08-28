/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */

import Car from '../types/car';
import Model from '../types/model';
import Brand from '../types/brand';
import CarJoined from '../types/car-joined';
import { OptionElement } from '../components/select-element';

type CarsCollectionProps = {
  cars: Car[];
  models: Model[];
  brands: Brand[];
};

class CarsCollection {
  private readonly _props: CarsCollectionProps;

  constructor(props: CarsCollectionProps) {
    this._props = props;
  }

  private joinCar = ({ modelId, ...rest }: Car) => {
    const { models, brands } = this._props;

    const carModel = models.find((model) => model.id === modelId);
    const carBrand = brands.find((brand) => brand.id === carModel?.brandId);

    return {
      model: (carModel && carModel.title) ?? 'Not determined',
      brand: (carBrand && carBrand.title) ?? 'Not determined',
      ...rest,
    };
  };

  public allCars = (): CarJoined[] => this._props.cars.map(this.joinCar);

  public brand = () => {
    const arr: OptionElement[] = [{ value: '-1', label: 'All cars' }];
    this._props.brands.forEach((brand) => {
      arr.push({ value: brand.id, label: brand.title });
    });

    return arr;
  };

  public getCarsByBrandId = (brandId: string): CarJoined[] => {
    const modelsIds = this._props.models
      .filter((model) => model.brandId === brandId)
      .map((model) => model.id);

    return this._props.cars
      .filter((car) => modelsIds.includes(car.modelId))
      .map(this.joinCar);
  };

  public getBrandTitleByBrandId = (brandId: string) => {
    for (let i = 0; i < this._props.brands.length; i += 1) {
      if (this._props.brands[i].id === brandId) {
        return `All ${this._props.brands[i].title} cars`;
      }
    }
    return 'All cars';
  };
}

export default CarsCollection;
