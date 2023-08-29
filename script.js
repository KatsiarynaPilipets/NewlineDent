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


    // Модальное окно "укажите свой номер теоефона"
    // let callBackButton = document.getElementById('callback-btn');
    let callButtonSign = document.querySelector('.btn_sign_white-blue');

    let modal1 = document.getElementById('modal-1');
    let closeButtonSign = modal1.getElementsByClassName('modal__close-button')[0];
    let tagBody = document.getElementsByTagName('body');

    callButtonSign.onclick = function (e) {
        e.preventDefault();
        modal1.classList.add('modal_active');
        tagBody.classList.add('hidden');
    }

    closeButtonSign.onclick = function (e) {
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


// document.addEventListener('DOMContentLoaded', () => {

// });

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
    } else if (tel.validity.tooShort) {
        telError.textContent = "Вы ввели номер не полностью.";
    } else if (tel.validity.patternMismatch) {
        telError.textContent = "Введите номер в правильном формате.";
    }

    // Стилизация
    telError.className = "error active";
}
