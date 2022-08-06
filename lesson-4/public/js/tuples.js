"use strict";
console.group('Tuples - užduotys');
{
    const container = document.getElementById('container');
    const taskTitle = document.createElement('h3');
    taskTitle.textContent = 'tuples.ts';
    container.append(taskTitle);
    const createWrapper = () => {
        const taskWrapper = document.createElement('div');
        taskWrapper.classList.add('task-wrapper');
        return taskWrapper;
    };
    const darius = ['Darius', 35];
    const ona = ['Ona', 26];
    const jonas = ['Jonas', 48];
    const vilma = ['Vilma', 55];
    const owner1 = ['LeBron', 'James'];
    const owner2 = ['Kevin', 'Durant'];
    const owner3 = ['Stephen', 'Curry'];
    const owner4 = ['James', 'Harden'];
    const owner5 = ['Anthony', 'Davis'];
    const dog1 = ['Labrador Retriever', 5];
    const dog2 = ['French Bulldog', 2];
    const dog3 = ['German Shepherd', 8];
    const dog4 = ['Golden Retriever', 3];
    const dog5 = ['Bulldog', 7];
    const ownerAndDog1 = [owner1, dog1];
    const ownerAndDog2 = [owner2, dog2];
    const ownerAndDog3 = [owner3, dog3];
    const ownerAndDog4 = [owner4, dog4];
    const ownerAndDog5 = [owner5, dog5];
    const vertice1 = [3, 7];
    const vertice2 = [10, 1];
    const vertice3 = [5, 5];
    const vertice4 = [6, 8];
    const vertice5 = [3, 6];
    const vertice6 = [9, 1];
    const vertice7 = [8, 8];
    const vertice8 = [2, 3];
    const vertice9 = [9, 4];
    const triangle1 = [vertice1, vertice2, vertice3];
    const triangle2 = [vertice4, vertice5, vertice6];
    const triangle3 = [vertice7, vertice8, vertice9];
    console.group('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
    {
        const tuplesTask1Label = document.createElement('label');
        tuplesTask1Label.setAttribute('for', 'tuples-homo-sapiens-list');
        tuplesTask1Label.textContent = 'task 1';
        const homoSapiensList = document.createElement('ul');
        homoSapiensList.setAttribute('id', 'tuples-homo-sapiens-list');
        const homoSapiensArr = [darius, ona, jonas, vilma];
        const printHumans = (arr) => {
            arr.forEach((human) => {
                const homoSapiensListItem = document.createElement('li');
                homoSapiensListItem.textContent = `${human[0]} (${human[1]})`;
                homoSapiensList.append(homoSapiensListItem);
                console.log(`${human[0]} (${human[1]})`);
            });
        };
        const taskWrapper = createWrapper();
        taskWrapper.append(tuplesTask1Label, homoSapiensList);
        container.append(taskWrapper);
        printHumans(homoSapiensArr);
    }
    console.groupEnd();
    console.group('2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)');
    {
        const tuplesTask2Label = document.createElement('label');
        tuplesTask2Label.setAttribute('for', 'tuples-owner-dog-list');
        tuplesTask2Label.textContent = 'task 2';
        const ownerAndDogList = document.createElement('ul');
        ownerAndDogList.setAttribute('id', 'tuples-owner-dog-list');
        const ownerAndDogListArr = [
            ownerAndDog1,
            ownerAndDog2,
            ownerAndDog3,
            ownerAndDog4,
            ownerAndDog5,
        ];
        const printOwnerAndDog = (arr) => {
            arr.forEach((el) => {
                const ownerAndDogListItem = document.createElement('li');
                ownerAndDogListItem.textContent = `${el[0][0]} ${el[0][1]} (${el[1][0]}, ${el[1][1]})`;
                ownerAndDogList.append(ownerAndDogListItem);
                console.log(`${el[0][0]} ${el[0][1]} (${el[1][0]}, ${el[1][1]})`);
            });
        };
        const taskWrapper = createWrapper();
        taskWrapper.append(tuplesTask2Label, ownerAndDogList);
        container.append(taskWrapper);
        printOwnerAndDog(ownerAndDogListArr);
    }
    console.groupEnd();
    console.group('3. Sukurkite trikampio taškų 2D erdvėje rinkinį(pradžioje teks sukurti 2D Taško tipą)');
    {
        const tuplesTask3Label = document.createElement('label');
        tuplesTask3Label.setAttribute('for', 'tuples-triangle-list');
        tuplesTask3Label.textContent = 'task 3';
        const triangleList = document.createElement('ul');
        triangleList.setAttribute('id', 'tuples-triangle-list');
        const trianglesArr = [triangle1, triangle2, triangle3];
        const printTriangles = (arr) => {
            arr.forEach((triangle) => {
                const triangleListItem = document.createElement('li');
                triangleListItem.textContent = `A (${triangle[0][0]}, ${triangle[0][1]}), B (${triangle[1][0]}, ${triangle[1][1]}), C (${triangle[2][0]}, ${triangle[2][1]})`;
                triangleList.append(triangleListItem);
                console.log(`A (${triangle[0][0]}, ${triangle[0][1]}), B (${triangle[1][0]}, ${triangle[1][1]}), C (${triangle[2][0]}, ${triangle[2][1]})`);
            });
        };
        const taskWrapper = createWrapper();
        taskWrapper.append(tuplesTask3Label, triangleList);
        container.append(taskWrapper);
        printTriangles(trianglesArr);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=tuples.js.map