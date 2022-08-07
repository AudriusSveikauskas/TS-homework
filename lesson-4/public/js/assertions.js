"use strict";
console.group('Assertions - užduotys');
{
    const container = document.getElementById('container');
    const taskTitle = document.createElement('h3');
    taskTitle.textContent = 'assertions.ts';
    container.append(taskTitle);
    const createWrapper = () => {
        const taskWrapper = document.createElement('div');
        taskWrapper.classList.add('task-wrapper');
        return taskWrapper;
    };
    const assertionsSubmitBtn = document.createElement('button');
    assertionsSubmitBtn.setAttribute('id', 'assertion-submit-button');
    assertionsSubmitBtn.textContent = 'Submit';
    console.group('1. Sukurkite HTML mygtuką ir uždėkite jam įvykio klausiklį, jog paspaudus, būt spausdinamas tekstas "paspausta!"');
    {
        const assertionTask1Label = document.createElement('label');
        assertionTask1Label.setAttribute('for', 'assertion-submit-button');
        assertionTask1Label.textContent = 'task 1';
        const taskWrapperEl = createWrapper();
        taskWrapperEl.append(assertionTask1Label, assertionsSubmitBtn);
        container.append(taskWrapperEl);
        const submitBtn = document.getElementById('assertion-submit-button');
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('assertions.ts => task 1: paspausta');
        });
    }
    console.groupEnd();
    console.group('2. Sukurkite <div> elementą ir papildikyte jo turinį mažu kvadaratėliu kiekvieną kart, kuomet paspaudžiamas [1.] mygtukas');
    {
        const assertionTask2Label = document.createElement('label');
        assertionTask2Label.setAttribute('for', 'task2-div');
        assertionTask2Label.textContent = 'task 2';
        const assertionTask2Div = document.createElement('div');
        assertionTask2Div.classList.add('task-div');
        assertionTask2Div.setAttribute('id', 'task2-div');
        const taskWrapperEl = createWrapper();
        taskWrapperEl.append(assertionTask2Label, assertionTask2Div);
        container.append(taskWrapperEl);
        const submitBtn = document.getElementById('assertion-submit-button');
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            assertionTask2Div.textContent += '👽';
        });
    }
    console.groupEnd();
    console.group('3. Sukurkite <p> elementą kuriame spausdinsite skaičių - kiek kvadratėlių yra [2.] konteineryje');
    {
        const assertionTask3Label = document.createElement('label');
        assertionTask3Label.setAttribute('for', 'task3-p');
        assertionTask3Label.textContent = 'task 3';
        const assertionTask3P = document.createElement('div');
        assertionTask3P.classList.add('task-p');
        assertionTask3P.setAttribute('id', 'task3-p');
        const taskWrapperEl = createWrapper();
        taskWrapperEl.append(assertionTask3Label, assertionTask3P);
        container.append(taskWrapperEl);
        let counter = 0;
        const submitBtn = document.getElementById('assertion-submit-button');
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            counter += 1;
            assertionTask3P.textContent = `${counter}`;
        });
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=assertions.js.map