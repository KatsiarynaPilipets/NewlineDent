
// Фон попап окна
let popupBg = document.querySelector('.container__quiz');
// Само окно
let popup = document.querySelector('.quiz1');
let popupPages = document.querySelectorAll('.quiz');
let arrPages = Array.from(popupPages);
// console.log(arrPages);

// Кнопка открытия модального окна(из блока turquoise)
let openPopupButton = document.querySelector('.btn_sign_white-blue2');

// Все кнопки 'далее'
const allButtonNext = document.querySelectorAll('.btn_gray_next');
const arrButtonNext = Array.from(allButtonNext);
// console.log(arrButtonNext);

// Все кнопки 'вернуться назад'
let allBackButtons = document.querySelectorAll('.btn_gray_back');
const arrButtonBack = Array.from(allBackButtons);
// console.log(arrButtonBack);

// слушаем кнопку 'заявка на онлайн-консультацию'
openPopupButton.addEventListener('click', (e) => {
    e.preventDefault(); // Предотвращаем дефолтное поведение браузера
    popupBg.classList.add('active'); // Добавляем класс 'active' для фона
    popup.classList.add('active'); // И для самого окна
    nextButton(); //кнопки вперед
    backButton(); //кнопки назад
});

// функция листания кнопок вперед
function nextButton() {
    arrButtonNext.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Предотвращаем дефолтное поведение браузера
            //ищем индекс кнопки в массиве
            let indexButton = arrButtonNext.indexOf(button);
            // console.log(indexButton);
            arrPages.forEach(page => {
                if ((indexButton >= 0) && (indexButton < 5)) {
                    // индекс следующей страницы будет на 1 больше
                    indexNextPage = indexButton + 1;
                    // console.log(indexNextPage);
                    page.classList.remove('active');
                    arrPages[indexNextPage].classList.add('active');
                }
                else if (indexButton <= arrButtonNext.length) {
                    // убираем класс active со страницы и модального окна
                    page.classList.remove('active');
                    popupBg.classList.remove('active');
                }
            });
        });
    });
};

// функция листания кнопок назад
function backButton() {
    arrButtonBack.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();// Предотвращаем дефолтное поведение браузера
            let indexButton = arrButtonBack.indexOf(button);
            arrPages.forEach(page => {
                let indexPrevPage = arrPages.indexOf(page);
                if (indexButton <= arrButtonBack.length) {
                    indexPrevPage = indexButton;
                    page.classList.remove('active');
                    arrPages[indexPrevPage].classList.add('active');
                }
                else {
                    popupBg.classList.remove('active')
                }
            });
        });
    });
};

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if (e.target === popupBg) { // Если цель клика - фон, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
    }
});


// РАБОЧИЕ РАДИОКНОПКИ: МЕНЯЮТ ФОН, ВЫВОДЯТ ЗНАЧЕНИЯ В КОНСОЛЬ
let arrRadio = Array.from(document.querySelectorAll('.radio'));

arrRadio.forEach(radio => radio.addEventListener('change', () => {
    for (let radio of arrRadio) {
        if (radio.checked) {
            radio.parentElement.classList.add('active');
            console.log(radio.parentNode);
        } else if (!radio.checked) {
            radio.parentElement.classList.remove('active');
        }

    }
    console.log(radio.value);

}));

















