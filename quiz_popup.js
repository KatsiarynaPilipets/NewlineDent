// переменные для работы квиза
// Фон попап окна
let popupBg = document.querySelector('.container__quiz');
// Само окно
let popup = document.querySelector('.quiz');
let popupPages = document.querySelectorAll('.quiz');
let arrPages = Array.from(popupPages);
// console.log(arrPages);
// Кнопка открытия окна(из блока turquoise)
let openPopupButton = document.querySelector('.btn_sign_white-blue2');
// Все кнопки 'далее'
let pageNextButtons = document.querySelectorAll('.btn_gray_next');
// console.log(pageNextButtons);
// Все кнопки 'вернуться назад'
let pageBeforeButtons = document.querySelectorAll('.btn_gray_back');
// Радиокнопки
let radioButtons = document.querySelectorAll('.radio');


openPopupButton.addEventListener('click', (e) => {
    e.preventDefault(); // Предотвращаем дефолтное поведение браузера
    popupBg.classList.add('active'); // Добавляем класс 'active' для фона
    popup.classList.add('active'); // И для самого окна
});

arrPages.forEach((page) => {

    let nextButton = page.querySelector('.btn_gray_next');

    nextButton.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        nextButton.classList.add('active'); // Добавляем класс 'active' для цвета кнопки

        let pageClass = page.getAttribute('class');
        console.log(pageClass);

        page.classList.remove('active');
        console.log(page);

    });
    page.classList.add('active');
    console.log(page);

})

// pageNextButtons.forEach((button) => {
//     button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
//         e.preventDefault(); // Предотвращаем дефолтное поведение браузера
//         button.classList.add('active'); // Добавляем класс 'active' для фона
//         // popup.classList.add('active'); // И для самого окна)
//         popup.classList.remove('active');
//     })
// });

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if (e.target === popupBg) { // Если цель клика - фон, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        arrPages.forEach(page =>
            page.classList.remove('active'));
    }
});
