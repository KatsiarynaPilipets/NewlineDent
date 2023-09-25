document.addEventListener('DOMContentLoaded', function() {
  const banner = document.querySelector('.banner');
  const overlay = document.querySelector('.overlay');
  const closeButton = document.getElementById('close-button');

  const saveScrollPosition = function() {
    localStorage.setItem('scrollPosition', window.pageYOffset);
  };

  const restoreScrollPosition = function() {
    const scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
      window.scrollTo(0, scrollPosition);
    }
  };

  const showBanner = function() {
    banner.style.display = 'block';
    overlay.style.display = 'block';
  };

  setInterval(showBanner, 60000);


  const closeBanner = function() {
    banner.style.display = 'none';
    overlay.style.display = 'none';
  };

  // Закрываем баннер и оверлей пр и щелчке вне баннера
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) {
      closeBanner();
    }
  });

  closeButton.addEventListener('click', function(event){
    event.preventDefault();
    closeBanner();
    saveScrollPosition();
  });

  const phoneInputButton = document.querySelector('.phone-input-button');
  phoneInputButton.addEventListener('click', function() {
    const phoneInput = document.querySelector('.phone-input-input');
    const phoneNumber = phoneInput.value;
  });

  const fortune = document.querySelector('.fortune');
  const fortuneOverlay = document.querySelector('.fortune-overlay');
  const fortuneCloseButton = document.getElementById('fortune-close-button');


  /*const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        showFortune(); // Вызов функции showFortune, когда пользователь долистывает до середины страницы
      }
    });
  };
*/
  const target = document.querySelector('.wrapper-map');

  const observer = new IntersectionObserver(callback, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });


  observer.observe(target);

  const showFortune = function() {
    fortune.style.display = 'block';
    fortuneOverlay.style.display = 'block';
  };

  const closeFortune = function() {
    fortune.style.display = 'none';
    fortuneOverlay.style.display = 'none';
  };

  // Закрываем баннер удачи и оверлей при щелчке вне баннера
  fortuneOverlay.addEventListener('click', function(e) {
    if (e.target === fortuneOverlay) {
      closeFortune();
    }
  });

  fortuneCloseButton.addEventListener('click', function () {
    closeFortune();
    saveScrollPosition();
  });

  const wheel = document.querySelector('.wheel');
  const fortuneArrow = document.getElementById('fortune-arrow');
  const fortuneResultInput = document.getElementById('fortune-result');

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

    setTimeout(function() {
      fortuneResultInput.value = getResultMessage(randomDegrees);
    }, 90000);
  }

  fortuneArrow.addEventListener('click', spinWheel, {once:true});

  function updateDate() {
    const dateElement = document.getElementById('date');
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 3);
    const options = { day: 'numeric', month: 'long'};
    const formattedDate = currentDate.toLocaleDateString('ru-RU', options);
    dateElement.textContent = formattedDate;
  }
  setInterval(updateDate, 100);

  window.addEventListener('load', restoreScrollPosition);

});