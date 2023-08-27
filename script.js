document.addEventListener('DOMContentLoaded', function () {
    //кнопка с номером телефона
    const callButton = document.getElementById('callButton');
    callButton.addEventListener('click', function () {
        window.location.href = 'tel:+78126226242';
    });

    //видео на заставке с мужиком
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
    // карусель с отзывами
    const carouselContainer = document.querySelector('.carousel-container');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const dots = document.querySelectorAll('.dot');

    let currentIndex = 0;

    function updateCarousel() {
        const totalItems = dots.length;
        const itemsPerPage = 1; // Всегда показываем один слайд

        const availableSpace = carouselContainer.offsetWidth / 1.6;
        const singleSlideWidth = availableSpace / itemsPerPage;

        const minIndex = 0;
        const maxIndex = totalItems - itemsPerPage;
        currentIndex = Math.max(minIndex, Math.min(maxIndex, currentIndex));

        const translateValue = -currentIndex * singleSlideWidth;
        carouselContainer.style.transform = `translateX(${translateValue}px)`

        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active-dot');
            } else {
                dot.classList.remove('active-dot');
            }
        });
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < 4) {
            currentIndex++;
            updateCarousel();
        }
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });
    window.addEventListener('resize', updateCarousel);

});

