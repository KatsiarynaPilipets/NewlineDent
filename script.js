document.addEventListener('DOMContentLoaded', () => {  
 
    let callBackButton = document.getElementById('callback-btn');
    let modal1 = document.getElementById('modal-1');
    let closeButton = modal1.getElementsByClassName('modal__close-button')[0];
    let tagBody = document.getElementsByTagName('body');
   
    callBackButton.onclick = function (e) {
      e.preventDefault();
      modal1.classList.add('modal_active');
      tagBody.classList.add('hidden');
    }
   
    closeButton.onclick = function (e) {
      e.preventDefault();
      modal1.classList.remove('modal_active');
      tagBody.classList.remove('hidden');
    }
   
    modal1.onmousedown = function (e) {
      let target = e.target;
      let modalContent = modal1.getElementsByClassName('modal__content')[0];
      if (e.target.closest('.' + modalContent.className) === null) {
        this.classList.remove('modal_active');
        tagBody.classList.remove('hidden');
      }
    };
   
  });

//Валидация формы
const contactForm = document.querySelector('.contact-form');
const tel = document.getElementById("phone");
const telError = document.querySelector("span.error");

tel.addEventListener("input", function (event) {
  if (tel.validity.valid) {
    telError.textContent = "";
    telError.className = "error";
  } else {
    showError();
  }
});

//Вызов ошибки
contactForm.addEventListener("submit", function (event) {
  if (!tel.validity.valid) {
    showError();
    event.preventDefault();
  }
});

//Проверка на возможные ошибки поля "номер телефона"
function showError() {
  if (tel.validity.valueMissing) {
    telError.textContent = "Пожалуйста, заполните поле!";
  } else if (tel.validity.tooShort) {
    telError.textContent = "Вы ввели номер не полностью.";
  } else if (tel.validity.patternMismatch) {
    telError.textContent = "Введите номер в правильном формате.";
  }
//Стилизация
  telError.className = "error active";
}

//Сбор телефонных номеров из формы
const telInput = document.getElementById('phone');
//function sendTelNumber(tel) {
let telForm = document.getElementById('usertel-form');
let dataPhones = new FormData(telForm);
  // Добавляем файл
  dataPhones.append('Номер', telInput.value);
  //console.log('Номер', telInput.value);
telInput.addEventListener('change', (event) => {
  // Получаем файл
  console.log('Номер:', telInput.value);
  // Очищаем текущее значение инпута
  event.target.value = null
})
//Отправка данных на сервер
let sendTelButton = document.querySelector('.submit-btn');
sendTelButton.addEventListener('click', async function sendFormData() {
  let response = await fetch('mail.php', {
      method: 'POST',
      contentType: false,
      processData: false,
      body: dataPhones,
  });

  let result = await response.json();
  alert(result.message);
});