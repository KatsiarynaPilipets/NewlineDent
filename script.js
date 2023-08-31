//Первые два блока
document.addEventListener('DOMContentLoaded', function () {
    const callButton = document.getElementById('callButton');
    callButton.addEventListener('click', function () {
        window.location.href = 'tel:+78126226242';
    });

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
});

//Фортуна

document.addEventListener('DOMContentLoaded', function() {
    const banner = document.querySelector('.banner');
    const overlay = document.querySelector('.overlay');
    const closeButton = document.getElementById('close-button');


    const showBanner = function() {
      banner.style.display = 'block';
      overlay.style.display = 'block';
    };

    // Показывать баннер и затемнение каждые 5 секунд
    setInterval(showBanner, 5000);

    // Закрывать баннер и затемнение при клике вне баннера
    overlay.addEventListener('click', function() {
      banner.style.display = 'none';
      overlay.style.display = 'none';
    });


    closeButton.addEventListener('click', function () {
      banner.style.display = 'none';
      overlay.style.display = 'none';
  });

  const phoneInputButton = document.querySelector('.phone-input-button');
    phoneInputButton.addEventListener('click', function() {
      const phoneInput = document.querySelector('.phone-input-input');
      const phoneNumber = phoneInput.value;
    });

  const wheel = document.querySelector('.wheel');
  const arrow = document.getElementById('arrow');
  const resultInput = document.getElementById('result');

  function spinWheel() {
    const randomDegrees = Math.floor(Math.random() * 6) + 1;

    wheel.style.animationName = `wheel-rotate-${randomDegrees}`;
    wheel.style.display = "block";

    switch (randomDegrees) {
      case 1:
        resultInput.value = "Бесплатная 3D диагностика зубов";
        break;
      case 2:
        resultInput.value = "Портативный ирригатор в подарок";
        break;
      case 3:
        resultInput.value = "Скидка 25 000 рублей на имплантацию";
        break;
      case 4:
        resultInput.value = "Комплекс по уходу за полостью рта";
        break;
      case 5:
        resultInput.value = "Консультация стоматолога бесплатно";
        break;
      case 6:
        resultInput.value = "Имплантация All-on-4 в подарок";
        break;
      default:
        alert("Нет таких значений");
    }

    setTimeout(function() {
      resultInput.value = getResultMessage(randomDegrees);
    }, 3000);

  }

    arrow.addEventListener('click', spinWheel, {once:true});

  function updateDate() {
    const dateElement = document.getElementById('date');
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    const options = { day: 'numeric', month: 'long'};
    const formattedDate = currentDate.toLocaleDateString('ru-RU', options);
    dateElement.textContent = formattedDate;
  }

  setInterval(updateDate, 100);

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
});