//BEFORE-AFTER
// обьявление переменных для блока ДО/ПОСЛЕ
const slider = document.querySelector('.before_after__slider').children;
// console.log(slider);
let sliderMove = document.querySelector('.before_after__slider');
// console.log(sliderMove);
const arrSliders = Array.from(slider);
console.log(arrSliders);

// переменная слайдера не активна
let isActive = false;
let width;

// при загрузке страницы ширина картинки равна 100% блоку слайдера
document.addEventListener('DOMContentLoaded', () => {
    width = arrSliders.offsetWidth;
    // beforeImg.style.width = `${width}px`;
});


arrSliders.forEach((el) => {
    let before = el.querySelector('.slider_photo_before');
    let beforeImg = before.querySelector('img');
    let change = el.querySelector('.slider_change');

    beforeImg.style.width = `${width}px`;

    // функция сдвига слайдера
    function beforeAfterSlider(x) {
        let shift = Math.max(0, Math.min(x, el.offsetWidth));
        before.style.width = `${shift}px`;
        change.style.left = `${shift}px`;
    };

    // функция остановки
    function pauseEventsSlider(e) {
        e.stopPropagation();
        e.preventDefault();
        return false;
    };

    // слушатель события при движении мыши по блоку до/после
    sliderMove.addEventListener('mousemove', (e) => {
        if (!isActive) {
            return;
        }

        let x = e.pageX;
        x -= el.getBoundingClientRect().left;
        beforeAfterSlider(x);
        pauseEventsSlider(e);
    });
});


sliderMove.addEventListener('mousedown', () => {
    isActive = true;
})

sliderMove.addEventListener('mouseup', () => {
    isActive = false;
});

sliderMove.addEventListener('mouseleave', () => {
    isActive = false;
});








