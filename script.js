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

contactForm.addEventListener("submit", function (event) {
  if (!tel.validity.valid) {
    showError();
    event.preventDefault();
  }
});

function showError() {
  if (tel.validity.valueMissing) {
    telError.textContent = "Пожалуйста, заполните поле!";
  } else if (tel.validity.patternMismatch) {
    telError.textContent = "Введите номер в правильном формате.";

  }

  // Стилизация
  telError.className = "error active";
}