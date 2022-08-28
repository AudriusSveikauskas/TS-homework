import Car from './car';
import Model from './model';
import Brand from './brand';

type CarJoined = Omit<Car, 'modelId'> & {
  model: Model['title'];
  brand: Brand['title'];
};

export default CarJoined;
