//BEFORE-AFTER
// обьявление переменных для блока ДО/ПОСЛЕ
const sliderBody = document.querySelector('.before_after__slider');

//1е фото до/после
const slider1 = document.querySelector('.slider_1');
const before1 = slider1.querySelector('.before_1');
const beforeImg1 = before1.querySelector('img');
const change1 = slider1.querySelector('.change1');
//2е фото до/после
const slider2 = document.querySelector('.slider_2');
const before2 = slider2.querySelector('.before_2');
const beforeImg2 = before2.querySelector('img');
const change2 = slider2.querySelector('.change2');
//3е фото до/после
const slider3 = document.querySelector('.slider_3');
const before3 = slider3.querySelector('.before_3');
const beforeImg3 = before3.querySelector('img');
const change3 = slider3.querySelector('.change3');

let isActive = false;

// расположение фото на всю ширину слайдера при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    let width1 = slider1.offsetWidth;
    beforeImg1.style.width = `${width1}px`;

    let width2 = slider2.offsetWidth;
    beforeImg2.style.width = `${width2}px`;

    let width3 = slider3.offsetWidth;
    beforeImg3.style.width = `${width3}px`;
});

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
slider1.addEventListener('mousemove', (e) => {
    if (!isActive) {
        return;
    }
    let x = e.pageX;
    x -= slider1.getBoundingClientRect().left;

    beforeAfterSlider1(x);
    pause(e);
});
// слушатель на 2й слайдер при движении мыши
slider2.addEventListener('mousemove', (e) => {
    if (!isActive) {
        return;
    }
    let x = e.pageX;
    x -= slider2.getBoundingClientRect().left;

    beforeAfterSlider2(x);
    pause(e);
});
// слушатель на 3й слайдер при движении мыши
slider3.addEventListener('mousemove', (e) => {
    if (!isActive) {
        return;
    }
    let x = e.pageX;
    x -= slider3.getBoundingClientRect().left;

    beforeAfterSlider3(x);
    pause(e);
});
// слушатель на нажатие/отжатиеи на 'уход' мыши из блока
sliderBody.addEventListener('mousedown', () => {
    isActive = true;
});
sliderBody.addEventListener('mouseup', () => {
    isActive = false;
});
sliderBody.addEventListener('mouseleave', () => {
    isActive = false;
});








