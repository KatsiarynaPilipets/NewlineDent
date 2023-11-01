//кнопка с номером телефона
const callButton = document.getElementById("callButton");
callButton.addEventListener("click", function () {
  window.location.href = "tel:+78126226242";
});
/*//видео на заставке с мужиком
        const openButton = document.getElementById('open-button');
        const closeButton = document.getElementById('close-button');
        const videoModal = document.getElementById('video-modal');
        const videoIframe = document.getElementById('video-iframe');

        const saveScrollPosition = function() {
            localStorage.setItem('scrollPosition', window.pageYOffset);
          };

          const restoreScrollPosition = function() {
            const scrollPosition = localStorage.getItem('scrollPosition');
            if (scrollPosition) {
              window.scrollTo(0, scrollPosition);
            }
          };

        //openButton.addEventListener('click', function () {
            const videoId = '3be_6eG4E9w'; // Замените на фактический идентификатор видео, указанный в URL видео после "v="
           // videoIframe.src = 'https://www.youtube.com/embed/' + videoId;
           // videoModal.style.display = 'block';
        //});

        openButton.addEventListener('click', function () {
            playVideo(videoId);
        });

        closeButton.addEventListener('click', function () {
            videoIframe.src = '';
            videoModal.style.display = 'none';
            saveScrollPosition();
        });

        videoModal.addEventListener('click', function (event) {
            if (event.target === videoModal) {
                videoIframe.src = '';
                videoModal.style.display = 'none';
            }
        });*/

// карусель с отзывами
const carouselContainer = document.querySelector(".carousel-container");
const carouselItems = document.querySelectorAll(".carousel-item");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");
const videoIds = ["fkse3SatzAM", "egms3mr1VXs", "lUEezBRnMNc", "bCa19uOKvWA"]; // массив идентификаторов видео-отзывов, указанных в URL видео после "v="

let currentIndex = 0;

function updateCarousel() {
  const totalItems = dots.length;
  const itemsPerPage = 1.5; // Всегда показываем полтора слайда

  const availableSpace = carouselContainer.offsetWidth;
  const singleSlideWidth = availableSpace / itemsPerPage;

  const minIndex = 0;
  const maxIndex = totalItems - itemsPerPage;
  currentIndex = Math.max(minIndex, Math.min(maxIndex, currentIndex));

  const translateValue = -currentIndex * singleSlideWidth;
  carouselContainer.style.transform = `translateX(${translateValue}px)`;

  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add("active-dot");
    } else {
      dot.classList.remove("active-dot");
    }
  });
}

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < 4) {
    currentIndex++;
    updateCarousel();
  }
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateCarousel();
  });
});
//ставим слушатели на слайдеры
carouselItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    playVideo(videoIds[index]);
  });
});

//функция, открывающая окно с видео с заданным идентификатором
function playVideo(videoId) {
  videoIframe.src = "https://www.youtube.com/embed/" + videoId;
  videoModal.style.display = "block";
}

// Модальное окно "укажите свой номер теоефона"
// let callBackButton = document.getElementById('callback-btn');
/*let callButtonSign = document.querySelector('.btn_sign_white-blue'); //кнопка из блока sign_up_free
    let callButtonSlider = document.querySelector('.btn_sign_pink'); //кнопка из блока before_after

    let modal1 = document.getElementById('modal-1');
    let closeButtonSign = modal1.getElementsByClassName('modal__close-button')[0];
    let tagBody = document.getElementsByTagName('body');

    callButtonSlider.onclick = function (e) {
    e.preventDefault();
    modal1.classList.add('modal_active');
    tagBody.classList.add('hidden');
    }

    callButtonSign.onclick = function (e) {
    e.preventDefault();
    modal1.classList.add('modal_active');
    tagBody.classList.add('hidden');
    }

    closeButtonSign.onclick = function (e) {
    e.preventDefault();
    modal1.classList.remove('modal_active');
    tagBody.classList.remove('hidden');
    saveScrollPosition();
    }

    modal1.onmousedown = function (e) {
    let target = e.target;
    let modalContent = modal1.getElementsByClassName('modal__content')[0];
    if (e.target.closest('.' + modalContent.className) === null) {
    this.classList.remove('modal_active');
    tagBody.classList.remove('hidden');
    }
    };*/

const contactForm = document.querySelector(".contact-form");
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

//BEFORE-AFTER
// обьявление переменных для блока ДО/ПОСЛЕ
const sliderBody = document.querySelector(".before_after__slider");

//1е фото до/после
const slider1 = document.querySelector(".slider_1");
const before1 = slider1.querySelector(".before_1");
const beforeImg1 = before1.querySelector("img");
const change1 = slider1.querySelector(".change1");
//2е фото до/после
const slider2 = document.querySelector(".slider_2");
const before2 = slider2.querySelector(".before_2");
const beforeImg2 = before2.querySelector("img");
const change2 = slider2.querySelector(".change2");
//3е фото до/после
const slider3 = document.querySelector(".slider_3");
const before3 = slider3.querySelector(".before_3");
const beforeImg3 = before3.querySelector("img");
const change3 = slider3.querySelector(".change3");

// переменная слайдера не активна
let isActive = false;
let width;
// расположение фото на всю ширину слайдера при загрузке страницы
let width1 = slider1.offsetWidth;
beforeImg1.style.width = `${width1}px`;

let width2 = slider2.offsetWidth;
beforeImg2.style.width = `${width2}px`;

let width3 = slider3.offsetWidth;
beforeImg3.style.width = `${width3}px`;

// перемещение вертикальной линии 1 слайдер
function beforeAfterSlider1(x) {
  let shift1 = Math.max(0, Math.min(x, slider1.offsetWidth));
  before1.style.width = `${shift1}px`;
  change1.style.left = `${shift1}px`;
}
// перемещение вертикальной линии 2 слайдер
function beforeAfterSlider2(x) {
  let shift2 = Math.max(0, Math.min(x, slider2.offsetWidth));
  before2.style.width = `${shift2}px`;
  change2.style.left = `${shift2}px`;
}
// перемещение вертикальной линии 3 слайдер
function beforeAfterSlider3(x) {
  let shift3 = Math.max(0, Math.min(x, slider3.offsetWidth));
  before3.style.width = `${shift3}px`;
  change3.style.left = `${shift3}px`;
}
// функция остановки вертикальной линии
function pause(e) {
  e.stopPropagation();
  e.preventDefault();
  return false;
}
// слушатель на 1й слайдер при движении мыши
slider1.addEventListener("mousemove", (e) => {
  if (!isActive) {
    return;
  }
  let x = e.pageX;
  x -= slider1.getBoundingClientRect().left;

  beforeAfterSlider1(x);
  pause(e);
});
// слушатель на 2й слайдер при движении мыши
slider2.addEventListener("mousemove", (e) => {
  if (!isActive) {
    return;
  }
  let x = e.pageX;
  x -= slider2.getBoundingClientRect().left;

  beforeAfterSlider2(x);
  pause(e);
});
// слушатель на 3й слайдер при движении мыши
slider3.addEventListener("mousemove", (e) => {
  if (!isActive) {
    return;
  }
  let x = e.pageX;
  x -= slider3.getBoundingClientRect().left;

  beforeAfterSlider3(x);
  pause(e);
});
// слушатель на нажатие/отжатиеи на 'уход' мыши из блока
sliderBody.addEventListener("mousedown", () => {
  isActive = true;
});
sliderBody.addEventListener("mouseup", () => {
  isActive = false;
});
sliderBody.addEventListener("mouseleave", () => {
  isActive = false;
});
// слушатель на тачсобытие - нажатие пальцем
sliderBody.addEventListener("touchstart", () => {
  isActive = true;
});
// слушатель на тачсобытие - отжатие кнопки
sliderBody.addEventListener("touchend", () => {
  isActive = false;
});
// слушатель на тачсобытие - отмена
sliderBody.addEventListener("touchcancel", () => {
  isActive = false;
});
// слушатель на тачсобытие 1й слайдер при движении пальца
slider1.addEventListener("touchmove", (e) => {
  if (!isActive) {
    return;
  }
  let x;
  let i;

  for (i = 0; e < e.changedTouches.length; i++) {
    x = e.changedTouches[i].pageX;
  }
  x -= slider1.getBoundingClientRect().left;
  beforeAfterSlider2(x);
  pause(e);
});

// Кнопка "Позвонить в клинику" (Лена)
const callClinic = document.getElementById("callClinic");
callClinic.addEventListener("click", function () {
  window.location.href = "tel:+78126226242";
});

// Button "Up". Кнопка "Стрелочка вверх" (Лена)
window.addEventListener("scroll", function () {
  let scroll = document.querySelector(".upward");
  scroll.classList.toggle("active", window.scrollY > 350);
});
function scrollTopTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

//Модальное окно с выводом лицензии (Лена)

// Получаем элементы модального окна и изображения
const modalLicense = document.getElementById("license-modal");
const modalImageLicense = document.getElementById("license-modal__image");
// Отображаем модальное окно и устанавливаем источник изображения
function displayModal(img) {
  modalLicense.style.display = "block";
  modalImageLicense.src = img.src;
}
// Скрываем содержимое модального окна, если пользователь кликнул вне его
function hideModalLicense(event) {
  if (event.target == modalLicense) {
    modalLicense.style.display = "none";
  }
}

//Модальное окно с выводом положения о гарантии (Лена)
// Получаем элементы модального окна и изображения
const modalWarranty = document.getElementById("warranty-modal");
const modalImageWarranty = document.getElementById("warranty-modal__image");
// Отображаем модальное окно и устанавливаем источник изображения
function displayWarranty(img) {
  modalWarranty.style.display = "block";
  modalImageWarranty.src = img.src;
}
// Скрываем содержимое модального окна, если пользователь кликнул вне его
function hideModalWarranty(event) {
  if (event.target == modalWarranty) {
    modalWarranty.style.display = "none";
  }
}

// Модальное окно "Обратный звонок" (Лена)
let modalOrderCall = document.getElementById("ordercall-modal");
let closemodalOrderCall = modalOrderCall.getElementsByClassName(
  "ordercall-modal__close-button"
)[0];
let tagBodyCall = document.getElementsByTagName("body");
const ButtonOrderCalls = document.querySelectorAll(".ordercall");
//Перебор кнопок на клик
ButtonOrderCalls.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    modalOrderCall.classList.add("ordercall-modal_active");
    tagBodyCall.classList.add("hidden");
  });
});
//Закрытие модального окна
closemodalOrderCall.onclick = function (e) {
  e.preventDefault();
  modalOrderCall.classList.remove("ordercall-modal_active");
  tagBodyCall.classList.remove("hidden");
  saveScrollPosition();
};
//Скрытие формы
modalOrderCall.onmousedown = function (e) {
  let target = e.target;
  let modalOrderCallContent = modalOrderCall.getElementsByClassName(
    "ordercall-modal__content"
  )[0];
  if (target.closest("." + modalOrderCallContent.className) === null) {
    this.classList.remove("ordercall-modal_active");
    tagBodyCall.classList.remove("hidden");
  }
};
//Валидация номера
const orderCallForm = document.getElementById("order-call-form");
console.log(orderCallForm);
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

// Модальное окно "Запись на консультацию" (Лена)
let modalConsultation = document.getElementById("consultation-modal");
let closemodalConsultation = modalConsultation.getElementsByClassName(
  "consultation-modal__close-button"
)[0];
let tagBodyConsultation = document.getElementsByTagName("body");
const ButtonConsultations = document.querySelectorAll(".orderconsultation");
//Перебор кнопок на клик
ButtonConsultations.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    modalConsultation.classList.add("consultation-modal_active");
    tagBodyConsultation.classList.add("hidden");
  });
});
//Закрытие модального окна
closemodalConsultation.onclick = function (e) {
  e.preventDefault();
  modalConsultation.classList.remove("consultation-modal_active");
  tagBodyConsultation.classList.remove("hidden");
  saveScrollPosition();
};
//Скрытие формы
modalConsultation.onmousedown = function (e) {
  let target = e.target;
  let modalConsultationContent = modalConsultation.getElementsByClassName(
    "consultation-modal__content"
  )[0];
  if (target.closest("." + modalConsultationContent.className) === null) {
    this.classList.remove("consultation-modal_active");
    tagBodyConsultation.classList.remove("hidden");
  }
};
//Валидация номера
const consultationForm = document.querySelector(".consultation-form");
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

//Модалка Настя
/*

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
        saveScrollPosition();
    }

    modal1.onmousedown = function (e) {
        let target = e.target;
        let modalContent = modal1.getElementsByClassName('modal__content')[0];
        if (e.target.closest('.' + modalContent.className) === null) {
            this.classList.remove('modal_active');
            tagBody.classList.remove('hidden');
        }
    };

*/

const banner = document.querySelector(".banner");
const overlay = document.querySelector(".overlay");
const closeButton = document.getElementById("close-button");

const saveScrollPosition = function () {
  localStorage.setItem("scrollPosition", window.pageYOffset);
};

const restoreScrollPosition = function () {
  const scrollPosition = localStorage.getItem("scrollPosition");
  if (scrollPosition) {
    window.scrollTo(0, scrollPosition);
  }
};

const showBanner = function () {
  banner.style.display = "block";
  overlay.style.display = "block";
};

setInterval(showBanner, 180000);

const closeBanner = function () {
  banner.style.display = "none";
  overlay.style.display = "none";
};

// Закрываем баннер и оверлей пр и щелчке вне баннера
overlay.addEventListener("click", function (e) {
  if (e.target === overlay) {
    closeBanner();
  }
});

closeButton.addEventListener("click", function (event) {
  event.preventDefault();
  closeBanner();
  saveScrollPosition();
});

const phoneInputButton = document.querySelector(".phone-input-button");
phoneInputButton.addEventListener("click", function () {
  const phoneInput = document.querySelector(".phone-input-input");
  const phoneNumber = phoneInput.value;
});

const fortune = document.querySelector(".fortune");
const fortuneOverlay = document.querySelector(".fortune-overlay");
const fortuneCloseButton = document.getElementById("fortune-close-button");

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      showFortune(); // Вызов функции showFortune, когда пользователь долистывает до середины страницы
      updateDate(); // получаем дату
    }
  });
};

const target = document.querySelector(".wrapper-map");

const observer = new IntersectionObserver(callback, {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
});

observer.observe(target);

const showFortune = function () {
  fortune.style.display = "flex";
  fortuneOverlay.style.display = "flex";
};

const closeFortune = function () {
  fortune.style.display = "none";
  fortuneOverlay.style.display = "none";
};

// Закрываем баннер удачи и оверлей при щелчке вне баннера
fortuneOverlay.addEventListener("click", function (e) {
  if (e.target === fortuneOverlay) {
    closeFortune();
  }
});

fortuneCloseButton.addEventListener("click", function () {
  closeFortune();
  saveScrollPosition();
});

const wheel = document.querySelector(".wheel");
const fortuneArrow = document.getElementById("fortune-arrow");
const fortuneResultInput = document.getElementById("fortune-result");

function getResultMessage(randomDegrees) {
  switch (randomDegrees) {
    case 1:
      return "Бесплатная 3D диагностика зубов";
    case 2:
      return "Портативный ирригатор в подарок";
    case 3:
      return "Скидка 25 000 рублей на имплантацию";
    case 4:
      return "Комплекс по уходу за полостью рта";
    case 5:
      return "Консультация стоматолога бесплатно";
    case 6:
      return "Имплантация All-on-4 в подарок";
    default:
      return "Нет таких значений";
  }
}

function spinWheel() {
  const randomDegrees = Math.floor(Math.random() * 6) + 1;

  wheel.style.animationName = `wheel-rotate-${randomDegrees}`;
  wheel.style.display = "block";

  switch (randomDegrees) {
    case 1:
      fortuneResultInput.value = "Бесплатная 3D диагностика зубов";
      break;
    case 2:
      fortuneResultInput.value = "Портативный ирригатор в подарок";
      break;
    case 3:
      fortuneResultInput.value = "Скидка 25 000 рублей на имплантацию";
      break;
    case 4:
      fortuneResultInput.value = "Комплекс по уходу за полостью рта";
      break;
    case 5:
      fortuneResultInput.value = "Консультация стоматолога бесплатно";
      break;
    case 6:
      fortuneResultInput.value = "Имплантация All-on-4 в подарок";
      break;
    default:
      fortuneResultInput.value = "Нет таких значений";
  }

  setTimeout(function () {
    fortuneResultInput.value = getResultMessage(randomDegrees);
  }, 1000);
}

fortuneArrow.addEventListener("click", spinWheel, { once: true });

function updateDate() {
  const dateElement = document.getElementById("date");
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 3);
  const options = { day: "numeric", month: "long" };
  const formattedDate = currentDate.toLocaleDateString("ru-RU", options);
  console.log(formattedDate);
  dateElement.textContent = formattedDate;
}
// setInterval(updateDate, 1000);

window.addEventListener("load", restoreScrollPosition);

//Сбор телефонных номеров из формы
/*const telInput = document.getElementById('phone');
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
*/

//Отправка данных на сервер
/*let sendTelButton = document.querySelector('.submit-btn');
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
*/
