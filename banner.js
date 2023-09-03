document.addEventListener('DOMContentLoaded', function() {
    const banner = document.querySelector('.banner');
    const overlay = document.querySelector('.overlay');
    const closeButton = document.getElementById('close-button');

    let scrollPosition = 0;
    let bannerVisible = false;

    const showBanner = function() {
      if (!bannerVisible) {
        scrollPosition = window.scrollY || document.documentElement.scrollTop;
      banner.style.display = 'block';
      overlay.style.display = 'block';
      bannerVisible = true;
      }
    };

    const closeBanner = function(event) {
      if (!bannerVisible) {
      banner.style.display = 'none';
      overlay.style.display = 'none';
      window.scrollTo(0, scrollPosition);
      bannerVisible = false;
      }
    };

    // Показывать баннер и затемнение каждые 5 секунд
    setInterval(showBanner, 50000000);

    // Закрывать баннер и затемнение при клике вне баннера
    overlay.addEventListener('click', function(e) {
      banner.style.display = 'none';
      overlay.style.display = 'none';
    });


    closeButton.addEventListener('click', function(event){
      event.preventDefault();
      closeBanner();
    });

    const phoneInputButton = document.querySelector('.phone-input-button');
    phoneInputButton.addEventListener('click', function() {
      const phoneInput = document.querySelector('.phone-input-input');
      const phoneNumber = phoneInput.value;
    });

  });

