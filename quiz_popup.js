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
                if (indexButton >= 0 && indexButton < 5) {
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
    });
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
    quizForm.addEventListener("change", () => {    // слушаем форму на странице
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
        })

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
})
