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
    }
    console.groupEnd();
    console.group('3. Sukurkite trikampio taškų 2D erdvėje rinkinį(pradžioje teks sukurti 2D Taško tipą)');
    {
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=tuples.js.map