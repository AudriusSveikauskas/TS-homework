"use strict";
const someNumber = 17;
const title = 'Grace';
const form = document.createElement('form');
form.setAttribute('id', 'form-add-user');
document.body.append(form);
const formAddUser = document.querySelector('#form-add-user');
formAddUser.onsubmit = (e) => {
    e.preventDefault();
    console.log(`Ateityje pridėsiu vartotoją: ${title} (${someNumber})`);
};
console.group('Assertions - užduotys');
{
    const container = document.getElementById('container');
    const createWrapper = () => {
        const taskWrapper = document.createElement('div');
        taskWrapper.classList.add('task-wrapper');
        return taskWrapper;
    };
    const btn = document.createElement('button');
    btn.setAttribute('id', 'submit-button');
    btn.textContent = 'Submit';
    console.group('1. Sukurkite HTML mygtuką ir uždėkite jam įvykio klausiklį, jog paspaudus, būt spausdinamas tekstas "paspausta!"');
    {
        const btnLabel = document.createElement('label');
        btnLabel.setAttribute('for', 'submit-button');
        btnLabel.textContent = 'assertions.ts -> task 1';
        const task1Wrapper = createWrapper();
        task1Wrapper.append(btnLabel, btn);
        container.append(task1Wrapper);
        const submitBtn = document.getElementById('submit-button');
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('assertions.ts -> task 1 -> paspausta');
        });
    }
    console.groupEnd();
    console.group('2. Sukurkite <div> elementą ir papildikyte jo turinį mažu kvadaratėliu kiekvieną kart, kuomet paspaudžiamas [1.] mygtukas');
    {
    }
    console.groupEnd();
    console.group('3. Sukurkite <p> elementą kuriame spausdinsite skaičių - kiek kvadratėlių yra [2.] konteineryje');
    {
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=assertions.js.map