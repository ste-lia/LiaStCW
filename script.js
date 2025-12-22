

document.cookie = "yummy_cookie=chocolate";


// form
let contact_email = document.querySelector('.message__box');
let text_email = document.querySelector('#text_email');

contact_email.addEventListener('input', () => text_email.textContent = contact_email.value.length + " caractere")

let form__contact = document.querySelector('.form__contact');

form__contact.addEventListener('submit', (event) => {
      event.preventDefault();
    // transmitem datele

	setTimeout(() => {
		alert('Запрос отправлен!')
	}, 5000)
});

// -------------------------------------------------------------
// Array

let nume = ['Den', 'Max', 'Emmy']

nume.push('Alex')
nume.unshift('Vic')
// incep list
// nume.pop()scoatem din capat
console.log(nume);
// for (const element of nume) {
//     console.log(element)
// }