document.addEventListener('DOMContentLoaded', function() {
    const banner = document.querySelector('.banner');
    const overlay = document.querySelector('.overlay');
    const submitBtn = document.getElementById('submitBtn');
    const closeButton = document.getElementById('close-button');
    const bannerIframe = document.getElementById('banner-iframe');

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

  var phoneInputButton = document.querySelector('.phone-input-button');
    phoneInputButton.addEventListener('click', function() {
      var phoneInput = document.querySelector('.phone-input-input');
      var phoneNumber = phoneInput.value;
    });

  });

