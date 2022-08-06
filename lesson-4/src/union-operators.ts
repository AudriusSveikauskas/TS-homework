/* eslint no-console: ["error", { allow: ["groupCollapsed", "log", "groupEnd", "dir", "group"] }] */

console.group('Union operators - užduotys');
{
  const container = document.getElementById('container') as HTMLDivElement;

  const taskTitle = document.createElement('h3');
  taskTitle.textContent = 'union-operators.ts';

  container.append(taskTitle);

  const createWrapper = (): HTMLDivElement => {
    const taskWrapper = document.createElement('div');
    taskWrapper.classList.add('task-wrapper');
    return taskWrapper;
  };

  // TASK 1
  type Accommodation = {
    type: 'House' | 'Flat';
    address: string;
    price: number;
  };

  const accommodation1: Accommodation = {
    type: 'House',
    address: 'Gervėčių g. 11, Vilnius 11350',
    price: 1_211_000,
  };

  const accommodation2: Accommodation = {
    type: 'Flat',
    address: 'Balio g. 18-3, Kaunas 47267',
    price: 137_200,
  };

  const accommodation3: Accommodation = {
    type: 'Flat',
    address: 'Molo g. 27-15, Klaipėda 92277',
    price: 52_300,
  };

  // TASK 2
  type Car = { type: 'Automatic' | 'Manual'; brand: string; model: string };

  const car1: Car = { type: 'Automatic', brand: 'BMW', model: '750Li' };
  const car2: Car = { type: 'Automatic', brand: 'Audi', model: 'A8' };
  const car3: Car = { type: 'Manual', brand: 'Subaru', model: 'Impreza' };

  console.group(
    '1. Aprašykite objekto tipą Accommodation, kurio savybė "type" būtų, "House" arba "Flat"',
  );
  {
    const unionTask1Label = document.createElement('label');
    unionTask1Label.setAttribute('for', 'union-accommodation-list');
    unionTask1Label.textContent = 'task 1';

    const accommodationsList = document.createElement('ul');
    accommodationsList.setAttribute('id', 'union-accommodation-list');

    const accommodationsArr: Accommodation[] = [
      accommodation1,
      accommodation2,
      accommodation3,
    ];

    const printHumans = (arr: Accommodation[]): void => {
      arr.forEach((accommodation) => {
        const { type, address, price } = accommodation;
        const accommodationsListItem = document.createElement('li');
        accommodationsListItem.textContent = `${type}: ${address} - ${price}€`;
        accommodationsList.append(accommodationsListItem);
        console.log(accommodation);
      });
    };

    const taskWrapper = createWrapper();
    taskWrapper.append(unionTask1Label, accommodationsList);
    container.append(taskWrapper);

    printHumans(accommodationsArr);
  }
  console.groupEnd();

  console.group(
    '2. Aprašykite objekto tipą Car, kurio savybė "transmission" būtų, "Automatic" arba "Manual"',
  );
  {
    const unionTask2Label = document.createElement('label');
    unionTask2Label.setAttribute('for', 'union-car-list');
    unionTask2Label.textContent = 'task 2';

    const carsList = document.createElement('ul');
    carsList.setAttribute('id', 'union-car-list');

    const carsArr: Car[] = [car1, car2, car3];

    const printCars = (arr: Car[]): void => {
      arr.forEach((car) => {
        const { type, brand, model } = car;
        const accommodationsListItem = document.createElement('li');
        accommodationsListItem.textContent = `${brand} ${model} (transmission: ${type})`;
        carsList.append(accommodationsListItem);
        console.log(car);
      });
    };

    const taskWrapper = createWrapper();
    taskWrapper.append(unionTask2Label, carsList);
    container.append(taskWrapper);

    printCars(carsArr);
  }
  console.groupEnd();

  console.group(
    '3. Aprašykite tipą, kuris kintamajam leistų būti: arba Accommodation masyvu, arba Car masyvu',
  );
  {
    // sprendimo pavyzdžius spausdinkite čia
  }
  console.groupEnd();
}
console.groupEnd();
