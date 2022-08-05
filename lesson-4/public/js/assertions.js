"use strict";
const someNumber = 17;
const title = 'Grace';
const form = document.createElement('form');
form.setAttribute('id', 'form-add-user');
document.body.append(form);
const formAddUser = document.querySelector('#form-add-user');
formAddUser.onsubmit = (e) => {
    e.preventDefault();
    console.log('Ateityje pridėsiu vartotoją');
};
console.group('Assertions - užduotys');
{
    const container = document.getElementById('container');
    const btn = document.createElement('button');
    btn.setAttribute('id', 'submit-button');
    btn.textContent = 'Submit';
    const btnLabel = document.createElement('label');
    btnLabel.setAttribute('for', 'submit-button');
    btnLabel.textContent = 'assertions.ts -> task 1';
    container.append(btnLabel, btn);
    console.group('1. Sukurkite HTML mygtuką ir uždėkite jam įvykio klausiklį, jog paspaudus, būt spausdinamas tekstas "paspausta!"');
    {
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