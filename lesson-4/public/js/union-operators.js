"use strict";
console.group('Union operators - užduotys');
{
    const container = document.getElementById('container');
    const taskTitle = document.createElement('h3');
    taskTitle.textContent = 'union-operators.ts';
    container.append(taskTitle);
    const createWrapper = () => {
        const taskWrapper = document.createElement('div');
        taskWrapper.classList.add('task-wrapper');
        return taskWrapper;
    };
    const accommodation1 = {
        type: 'House',
        address: 'Gervėčių g. 11, Vilnius 11350',
        price: 1_211_000,
    };
    const accommodation2 = {
        type: 'Flat',
        address: 'Balio g. 18-3, Kaunas 47267',
        price: 137_200,
    };
    const accommodation3 = {
        type: 'Flat',
        address: 'Molo g. 27-15, Klaipėda 92277',
        price: 52_300,
    };
    const accommodationsArr = [
        accommodation1,
        accommodation2,
        accommodation3,
    ];
    const car1 = { type: 'Automatic', brand: 'BMW', model: '750Li' };
    const car2 = { type: 'Automatic', brand: 'Audi', model: 'A8' };
    const car3 = { type: 'Manual', brand: 'Subaru', model: 'Impreza' };
    const carsArr = [car1, car2, car3];
    const wealth1 = accommodationsArr;
    const wealth2 = carsArr;
    console.group('1. Aprašykite objekto tipą Accommodation, kurio savybė "type" būtų, "House" arba "Flat"');
    {
        const unionTask1Label = document.createElement('label');
        unionTask1Label.setAttribute('for', 'union-accommodation-list');
        unionTask1Label.textContent = 'task 1';
        const accommodationsList = document.createElement('ul');
        accommodationsList.setAttribute('id', 'union-accommodation-list');
        const printHumans = (arr) => {
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
    console.group('2. Aprašykite objekto tipą Car, kurio savybė "transmission" būtų, "Automatic" arba "Manual"');
    {
        const unionTask2Label = document.createElement('label');
        unionTask2Label.setAttribute('for', 'union-car-list');
        unionTask2Label.textContent = 'task 2';
        const carsList = document.createElement('ul');
        carsList.setAttribute('id', 'union-car-list');
        const printCars = (arr) => {
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
    console.group('3. Aprašykite tipą, kuris kintamajam leistų būti: arba Accommodation masyvu, arba Car masyvu');
    {
        const unionTask3Label = document.createElement('label');
        unionTask3Label.setAttribute('for', 'union-wealth-list');
        unionTask3Label.textContent = 'task 3';
        const wealthList = document.createElement('ul');
        wealthList.setAttribute('id', 'union-wealth-list');
        const wealthArr = [wealth1, wealth2];
        const printHumans = (arr) => {
            arr.forEach((wealth) => {
                wealth.forEach((obj) => {
                    const wealthListItem = document.createElement('li');
                    wealthListItem.textContent = JSON.stringify(obj);
                    wealthList.append(wealthListItem);
                    console.log(obj);
                });
            });
        };
        const taskWrapper = createWrapper();
        taskWrapper.append(unionTask3Label, wealthList);
        container.append(taskWrapper);
        printHumans(wealthArr);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=union-operators.js.map