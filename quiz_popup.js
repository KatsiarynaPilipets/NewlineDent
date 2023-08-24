
// Фон попап окна
let popupBg = document.querySelector('.container__quiz');
// Само окно
let popup = document.querySelector('.quiz');
let popupPages = document.querySelectorAll('.quiz');
let arrPages = Array.from(popupPages);
// console.log(arrPages);

// Кнопка открытия окна(из блока turquoise)
let openPopupButton = document.querySelector('.btn_sign_white-blue2');

// все кнопки модального окна
let allButton = document.querySelectorAll('.btn_gray');
const arrButton = Array.from(allButton);
// console.log(arrButton);

// Все кнопки 'далее'
let pageNextButtons = document.querySelectorAll('.btn_gray_next');
// console.log(pageNextButtons);
// Все кнопки 'вернуться назад'
// let pageBeforeButtons = document.querySelectorAll('.btn_gray_back');



// // ВАРИАНТ С КЛАССОМ
// class Popup {
//     constructor() {
//         this.pages = arrPages;
//         this.currentPage = 0;

//         console.log(this.pages[this.currentPage]);

//         // обработчик для открытия окна с контейнером
//         openPopupButton.addEventListener('click', this.open.bind(this));

//         // все страницы quiz
//         arrButton.forEach((button) => {
//             button.addEventListener('click', this.navigate.bind(this));
//         });

//         // обработчик закрытия модального окна
//         document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
//             if (e.target === popupBg) { // Если цель клика - фон, то:
//                 popupBg.classList.remove('active'); // Убираем активный класс с фона
//                 arrPages.forEach(page =>
//                     page.classList.remove('active'));
//             }
//         });
//     }

//     // метод открытия модального окна
//     open() {
//         this.pages[this.currentPage].classList.add('active');
//         popupBg.classList.add('active');
//         document.querySelector('.btn_gray').classList.add('active');
//         console.log(this.pages[this.currentPage]);
//     }

//     // метод для перелистывания страниц модального окна
//     navigate(e) {
//         const targetClass = e.target.className;
//         console.log(targetClass);
//         console.log(this.pages[this.currentPage]);

//         if (targetClass === 'btn_gray_back') {
//             // Предыдущая страница
//             this.pages[this.currentPage].classList.remove('active');
//             this.currentPage = ((this.currentPage - 1) < 0) ? 0 : this.currentPage - 1;
//             this.pages[this.currentPage].classList.add('active');
//         }
//         else if (targetClass === 'btn_gray_next') {
//             // Следующая страница
//             this.pages[this.currentPage].classList.remove('active');
//             this.currentPage = (this.currentPage + 1 >= this.pages.length) ? this.pages.length - 1 : this.currentPage + 1;
//             this.pages[this.currentPage].classList.add('active');

//             console.log(this.pages[this.currentPage])
//         }
//     }
// }
// const quizPopup = new Popup();



// 2Й ВАРИАНТ

openPopupButton.addEventListener('click', (e) => {
    e.preventDefault(); // Предотвращаем дефолтное поведение браузера
    popupBg.classList.add('active'); // Добавляем класс 'active' для фона
    popup.classList.add('active'); // И для самого окна
});

// arrPages.forEach((page) => {

//     let nextButton = page.querySelector('.btn_gray_next');
//     page.classList.add('active');

//     nextButton.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
//         e.preventDefault(); // Предотвращаем дефолтное поведение браузера
//         nextButton.classList.add('active'); // Добавляем класс 'active' для цвета кнопки

//         let pageClass = page.getAttribute('class');
//         console.log(pageClass);

//         page.classList.remove('active');
//         console.log(page);
//     });
// });



let index = 0;
// arrButton.forEach(function (button, i) {
//     button.addEventListener('click', function (e) {
//         e.preventDefault();
//         index = i;
//         show();
//     });
// });



for (let page = 0; page < arrPages.length; page++) {
    // console.log(page);

    function show() {
        // let page = arrPages[index];

        page.classList.add('active');
        document.querySelector('.btn_gray_next').classList.add('active');

    }
    // function next(i) {
    //     let button = arrButton[button];
    //     button.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         index = i;
    //         show();
    //     });
    // }

    next();
    back();

};

function next() {
    let nextButton = document.querySelector('.btn_gray_next');
    nextButton.addEventListener('click', function (e) { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        // index = 0;
        // index = index + 1;
        // show();
        // console.log(document.querySelector('.quiz'));
        // document.querySelector('.quiz.active').classList.remove('active');
        // console.log(document.querySelector('.quiz'));

        // let page = arrPages[index];
        // console.log(page);
        // page.classList.remove('active');
        // console.log(page);

        let nextPage = arrPages[index + 1];
        console.log(nextPage);
        nextPage.classList.add('active');

        index <= arrPages.length && (index = 0);

        console.log(nextButton);
    });
};


function back() {
    let backButton = document.querySelector('.btn_gray_back');
    backButton.addEventListener('click', function (e) { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        // index--;
        index < 0 && (index = arrPages.length - 1);
        // show();

        let prevPage = arrPages[index - 1];
        console.log(prevPage);

        console.log(document.querySelector('.quiz'));
        document.querySelector('.quiz.active').classList.remove('active');
        prevPage.classList.add('active');
        if (prevPage < 0) {
            document.querySelector('.quiz')[arrPages.length - 1].classList.add('active')
        }
        console.log(prevPage);

        console.log(backButton);
    });
};


document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if (e.target === popupBg) { // Если цель клика - фон, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        arrPages.forEach(page =>
            page.classList.remove('active'));
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

















