document.addEventListener('DOMContentLoaded', function () {
    const callButton = document.getElementById('callButton');
    callButton.addEventListener('click', function () {
        window.location.href = 'tel:+78126226242';
    });

    const openButton = document.getElementById('open-button');
    const closeButton = document.getElementById('close-button');
    const videoModal = document.getElementById('video-modal');
    const videoIframe = document.getElementById('video-iframe');

    openButton.addEventListener('click', function () {
        const videoId = '3be_6eG4E9w'; // Замените на фактический идентификатор видео, указанный в URL видео после "v="
        videoIframe.src = 'https://www.youtube.com/embed/' + videoId;
        videoModal.style.display = 'block';
    });

    closeButton.addEventListener('click', function () {
        videoIframe.src = '';
        videoModal.style.display = 'none';
    });

    videoModal.addEventListener('click', function (event) {
        if (event.target === videoModal) {
            videoIframe.src = '';
            videoModal.style.display = 'none';
        }
    });
});

 // Кнопка "Позвонить в клинику" (Лена)
 const callClinic = document.getElementById('callClinic');
 callClinic.addEventListener('click', function () {
     window.location.href = 'tel:+78126226242';
 });

// Button "Up". Кнопка "Стрелочка вверх" (Лена)
window.addEventListener('scroll', function ()
{
    let scroll = document.querySelector('.upward');
    scroll.classList.toggle("active", window.scrollY>350)
})
function scrollTopTop() {
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })
}

//Модальное окно с выводом лицензии (Лена)

 // Получаем элементы модального окна и изображения
 const modalLicense = document.getElementById("license-modal");
 const modalImageLicense = document.getElementById("license-modal__image");
 // Отображаем модальное окно и устанавливаем источник изображения
 function displayModal(img)
 {
    modalLicense.style.display = "block";
    modalImageLicense.src = img.src;
 }
 // Скрываем содержимое модального окна, если пользователь кликнул вне его
 function hideModalLicense(event)
 {
     if (event.target == modalLicense) {
        modalLicense.style.display = "none";
     }
 }

 //Модальное окно с выводом положения о гарантии (Лена)
// Получаем элементы модального окна и изображения
 const modalWarranty = document.getElementById("warranty-modal");
 const modalImageWarranty = document.getElementById("warranty-modal__image");
 // Отображаем модальное окно и устанавливаем источник изображения
 function displayWarranty(img)
 {
    modalWarranty.style.display = "block";
    modalImageWarranty.src = img.src;
 }
 // Скрываем содержимое модального окна, если пользователь кликнул вне его
function hideModalWarranty(event)
 {
     if (event.target == modalWarranty) {
        modalWarranty.style.display = "none";
     }
 }

// Модальное окно "Обратный звонок" (Лена)
document.addEventListener('DOMContentLoaded', function () {

    let modalOrderCall = document.getElementById('ordercall-modal');
    let closemodalOrderCall = modalOrderCall.getElementsByClassName('ordercall-modal__close-button')[0];
    let tagBodyCall = document.getElementsByTagName('body');
    const ButtonOrderCalls = document.querySelectorAll('.ordercall');
//Перебор кнопок на клик
    ButtonOrderCalls.forEach(button => {
        button.addEventListener('click', (e) => {
        e.preventDefault();
        modalOrderCall.classList.add('ordercall-modal_active');
        tagBodyCall.classList.add('hidden');
        })
    })
//Закрытие модального окна
    closemodalOrderCall.onclick = function (e) {
        e.preventDefault();
        modalOrderCall.classList.remove('ordercall-modal_active');
        tagBodyCall.classList.remove('hidden');
    }
//Скрытие формы
    modalOrderCall.onmousedown = function (e) {
        let target = e.target;
        let modalOrderCallContent = modalOrderCall.getElementsByClassName('ordercall-modal__content')[0];
        if (target.closest('.' + modalOrderCallContent.className) === null) {
            this.classList.remove('ordercall-modal_active');
            tagBodyCall.classList.remove('hidden');
        }
    };
//Валидация номера
    const orderCallForm = document.querySelector('.ordercall-form');
    const telOrderCall = document.getElementById("phoneOrderCall");
    const telOrderCallError = document.querySelector("span.ordercall-error");

    telOrderCall.addEventListener("input", function (event) {
        event.preventDefault();
        if (telOrderCall.validity.valid) {
            telOrderCallError.textContent = "";
            telOrderCallError.className = "ordercall-error";
        } else {
            showErrorOrderCall();
        }
    });
//вызов ошибки
    orderCallForm.addEventListener("submit", function (event) {
        if (!telOrderCall.validity.valid) {
            showErrorOrderCall();
            event.preventDefault();
        }
    });
//Ошибки
    function showErrorOrderCall() {
        if (telOrderCall.validity.valueMissing) {
            telOrderCallError.textContent = "Пожалуйста, заполните поле!";
        } else if (telOrderCall.validity.tooShort) {
            telOrderCallError.textContent = "Вы ввели номер не полностью.";
        } else if (telOrderCall.validity.patternMismatch) {
            telOrderCallError.textContent = "Введите номер в правильном формате.";
        }

// Стилизация
    telOrderCallError.className = "ordercall-error.active";
    }
});

// Модальное окно "Запись на консультацию" (Лена)
document.addEventListener('DOMContentLoaded', function () {

    let modalConsultation = document.getElementById('consultation-modal');
    let closemodalConsultation = modalConsultation.getElementsByClassName('consultation-modal__close-button')[0];
    let tagBodyConsultation = document.getElementsByTagName('body');
    const ButtonConsultations = document.querySelectorAll('.orderconsultation');
//Перебор кнопок на клик
    ButtonConsultations.forEach(button => {
        button.addEventListener('click', (e) => {
        e.preventDefault();
        modalConsultation.classList.add('consultation-modal_active');
        tagBodyConsultation.classList.add('hidden');
        })
    })
//Закрытие модального окна
    closemodalConsultation.onclick = function (e) {
        e.preventDefault();
        modalConsultation.classList.remove('consultation-modal_active');
        tagBodyConsultation.classList.remove('hidden');
    }
//Скрытие формы
    modalConsultation.onmousedown = function (e) {
        let target = e.target;
        let modalConsultationContent = modalConsultation.getElementsByClassName('consultation-modal__content')[0];
        if (target.closest('.' + modalConsultationContent.className) === null) {
            this.classList.remove('consultation-modal_active');
            tagBodyConsultation.classList.remove('hidden');
        }
    };
//Валидация номера
    const consultationForm = document.querySelector('.consultation-form');
    const telConsultation = document.getElementById("phoneConsultation");
    const telConsultationError = document.querySelector("span.consultation-error");

    telConsultation.addEventListener("input", function (event) {
        event.preventDefault();
        if (telConsultation.validity.valid) {
            telConsultationError.textContent = "";
            telConsultationError.className = "consultation-error";
        } else {
            showErrorConsultation();
        }
    });
//вызов ошибки
    consultationForm.addEventListener("submit", function (event) {
        if (!telConsultation.validity.valid) {
            showErrorConsultation();
            event.preventDefault();
        }
    });
//Ошибки
    function showErrorConsultation() {
        if (telConsultation.validity.valueMissing) {
            telConsultationError.textContent = "Пожалуйста, заполните поле!";
        } else if (telConsultation.validity.tooShort) {
            telConsultationError.textContent = "Вы ввели номер не полностью.";
        } else if (telConsultation.validity.patternMismatch) {
            telConsultationError.textContent = "Введите номер в правильном формате.";
        }
// Стилизация
    telConsultationError.className = "consultation-error.active";
    }
});