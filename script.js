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

 // Кнопка "Позвонить в клинику"
 const callClinic = document.getElementById('callClinic');
 callClinic.addEventListener('click', function () {
     window.location.href = 'tel:+78126226242';
 });

// Button "Up". Кнопка "Стрелочка вверх"
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

//Модальное окно с выводом лицензии
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
 //Модальное окно с выводом положения о гарантии
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

 // Модальное окно "Обратный звонок"

 document.addEventListener('DOMContentLoaded', function () {

    let modalOrderCall = document.getElementById('ordercall-modal');
    let closeButtonSign = modalOrderCall.getElementsByClassName('modal__close-button')[0];
    let tagBody = document.getElementsByTagName('body');
    const buttonsOrdercalls = document.querySelectorAll('.ordercall');
//Перебор кнопок на клик
    buttonsOrdercalls.forEach(button => {
        button.addEventListener('click', (e) => {
        e.preventDefault();
        modalOrderCall.classList.add('modal_active');
        tagBody.classList.add('hidden');
        })
    })
//Закрытие модального окна
    closeButtonSign.onclick = function (e) {
        e.preventDefault();
        modalOrderCall.classList.remove('modal_active');
        tagBody.classList.remove('hidden');
    }
//Скрытие формы
    modalOrderCall.onmousedown = function (e) {
        let target = e.target;
        let modalContent = modalOrderCall.getElementsByClassName('modal__content')[0];
        if (target.closest('.' + modalContent.className) === null) {
            this.classList.remove('modal_active');
            tagBody.classList.remove('hidden');
        }
    };
//Валидация номера --- убрать после слияния Настиного блока?
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
//вызов ошибки  --- убрать после слияния Настиного блока?
contactForm.addEventListener("submit", function (event) {
    if (!tel.validity.valid) {
        showError();
        event.preventDefault();
    }
});
//Ошибки --- убрать после слияния Настиного блока?
function showError() {
    if (tel.validity.valueMissing) {
        telError.textContent = "Пожалуйста, заполните поле!";
    } else if (tel.validity.tooShort) {
        telError.textContent = "Вы ввели номер не полностью.";
    } else if (tel.validity.patternMismatch) {
        telError.textContent = "Введите номер в правильном формате.";
    }

    // Стилизация  --- убрать после слияния Настиного блока?
    telError.className = "error active";
}
});