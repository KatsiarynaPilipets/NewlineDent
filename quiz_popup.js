// Фон попап окна
let popupBg = document.querySelector(".container__quiz");
// Само окно
let popup = document.querySelector(".quiz1");
let popupPages = document.querySelectorAll(".quiz");
let arrPages = Array.from(popupPages);

// Кнопка открытия модального окна(из блока turquoise)
let openPopupButton = document.querySelector(".btn_sign_white-blue2");

// Все кнопки 'далее'
const allButtonNext = document.querySelectorAll(".btn_gray_next");
const arrButtonNext = Array.from(allButtonNext);
// console.log(arrButtonNext);

// Все кнопки 'вернуться назад'
const allBackButtons = document.querySelectorAll(".btn_gray_back");
const arrButtonBack = Array.from(allBackButtons);
// console.log(arrButtonBack);

// слушаем кнопку 'заявка на онлайн-консультацию'
openPopupButton.addEventListener("click", (e) => {
    e.preventDefault(); // Предотвращаем дефолтное поведение браузера
    popupBg.classList.add("active"); // Добавляем класс 'active' для фона
    popup.classList.add("active"); // И для самого окна
    nextButton(); //кнопки вперед
    backButton(); //кнопки назад
    checkForm(); //собираем данные в формдату
});

// функция листания кнопок вперед
function nextButton() {
    arrButtonNext.forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault(); // Предотвращаем дефолтное поведение браузера
            let indexButton = arrButtonNext.indexOf(button);  //ищем индекс кнопки в массиве
            // console.log(indexButton);
            arrPages.forEach((page) => {
                if (indexButton >= 0 && indexButton < 6) {
                    indexNextPage = indexButton + 1;  // индекс следующей страницы будет на 1 больше
                    // console.log(indexNextPage);
                    page.classList.remove("active");
                    arrPages[indexNextPage].classList.add("active");
                } else if (indexButton <= arrButtonNext.length) {
                    page.classList.remove("active");      // убираем класс active со страницы
                    popupBg.classList.remove("active");   // и  c модального окна
                }
            });
        });
    })
}

// функция листания кнопок назад
function backButton() {
    arrButtonBack.forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault(); // Предотвращаем дефолтное поведение браузера
            let indexButton = arrButtonBack.indexOf(button);  //ищем индекс кнопки в массиве
            arrPages.forEach((page) => {
                let indexPrevPage = arrPages.indexOf(page);
                if (indexButton <= arrButtonBack.length) {
                    indexPrevPage = indexButton;
                    page.classList.remove("active"); // убираем класс active со страницы
                    arrPages[indexPrevPage].classList.add("active"); // добавляем класс active следующей странице
                } else {
                    popupBg.classList.remove("active"); // убираем класс active со страницы
                }
            });
        });
    });
}

document.addEventListener("click", (e) => {
    // Вешаем обработчик на весь документ
    if (e.target === popupBg && e.target !== popupPages) {
        // Если цель клика - фон, то:
        popupBg.classList.remove("active"); // Убираем активный класс с фона
    }
});

// РАБОЧИЕ РАДИОКНОПКИ: МЕНЯЮТ ФОН, ВЫВОДЯТ ЗНАЧЕНИЯ В КОНСОЛЬ
let arrRadio = Array.from(document.querySelectorAll(".radio"));
arrRadio.forEach((radio) =>
    radio.addEventListener("change", () => {
        for (let radio of arrRadio) {
            if (radio.checked) {
                radio.parentElement.classList.add("active");
                checkForm();
            } else if (!radio.checked) {
                radio.parentElement.classList.remove("active");
            }
        }
    })
);

// ищем форму квиза на странице
const quizForm = document.getElementById("quiz");

let formData = new FormData(quizForm); //создаем фордату

function checkForm() {
    quizForm.addEventListener("change", (e) => {    // слушаем форму на странице
        e.preventDefault();
        arrPages.forEach(page => {
            let radioQ = page.querySelector('.quiz__title').textContent; //ищем вопрос на странице

            let radioElementsOnPage = Array.from(page.querySelectorAll('.radio')); //собираем радиокнопки на странице в массив
            // console.log(radioElementsOnPage);

            for (let elem of radioElementsOnPage) {
                let radioValue = elem.value; //значение выбранной кнопки

                // если радиокнопка выбрана, то внести данные в формдату
                if (elem.checked) {

                    formData.append(radioQ, radioValue);
                    // console.log(radioQ);
                    // console.log(radioValue);

                    // Список пар ключ/значение
                    for (let [radioQ, radioValue] of formData) {
                        console.log(`${radioQ}:${radioValue}`);
                    }
                }
            }
        });



    });
}

// кнопка для отправки формы
let sendFormButton = document.querySelector('.btn_next_submit');
// слушаем кнопку
sendFormButton.addEventListener('click', async function sendFormData() {
    let response = await fetch('mail.php', {
        method: 'POST',
        contentType: false,
        processData: false,
        body: formData,
    });

    let result = await response.json();
    alert(result.message);
});



// Сбор данных клиента валидация
const quizName = document.getElementById("quiz_name");
const quizTel = document.getElementById("quiz_tel");
const quizEmail = document.getElementById("quiz_email");

const quizNameError = document.querySelector(".error_user_name");
const quizTelError = document.querySelector(".error_tel");
const quizEmailError = document.querySelector(".error_email");

const submitBtnQuiz = document.querySelector('.btn_next_submit');

quizForm.addEventListener('change', (e) => {
    e.preventDefault();
    checkName();
    checkquizTel();
    checkquizEmail();

});


function checkName() {
    let userName = quizName.value;

    if (!quizName.validity.valid) {
        quizNameError.innerText = "Пожалуйста, заполните имя!";
    }
    else if (quizName.validity.tooShort) {
        quizNameError.innerText = "Имя должно содержать минимум 2 буквы";
    }
    else if (quizName.validity.valid) {
        quizNameError.innerText = "";

        console.log(userName);
        formData.append("userName", userName);
    }

    quizNameError.className = "error_mess active";
}

function checkquizTel() {
    let userPhone = quizTel.value;
    if (!quizTel.validity.valid) {
        quizTelError.innerText = "Пожалуйста, заполните телефон!";
    }
    else if (quizTel.validity.tooShort) {
        quizTelError.innerText = "Вы ввели номер не полностью.";
    }
    else if (quizTel.validity.patternMismatch) {
        quizTelError.innerText = "Введите номер в формате + 7";
    }
    else if (quizTel.validity.valid) {
        quizTelError.innerText = "";

        console.log(userPhone);
        formData.append("userPhone", userPhone);
    }

    quizTelError.className = "error_mess active";
}

function checkquizEmail() {
    let userEmail = quizEmail.value;
    if (!quizEmail.validity.valid) {
        quizEmailError.innerText = "Пожалуйста, заполните email!";
    }
    else if (quizEmail.validity.patternMismatch) {
        quizEmailError.innerText = "Введите email в формате: name@mail.com.";
    }
    else if (quizEmail.validity.valid) {
        quizEmailError.innerText = "";

        console.log(userEmail);
        formData.append("userEmail", userEmail);
    }

    quizEmailError.className = "error_mess active";
}
