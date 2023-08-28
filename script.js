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
// Button "Up"
window.addEventListener('scroll', function ()
{
    let scroll = document.querySelector('.upward');
    scroll.classList.toggle("active", window.scrollY>500)
})
function scrollTopTop() {
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })
}
 // Получаем элементы модального окна и изображения
 const modalLicense = document.getElementById("license-modal");
 const modalImageLicense = document.getElementById("license-modal__image");

 // Отображаем модальное окно и устанавливаем источник изображения
 function displayModal(img)
 {
    modalLicense.style.display = "block";
    modalImageLicense.src = img.src;
 }

 // Скрываем содержимое модального окна, если пользователь кликнул вне его
 function hideModalLicense(event)
 {
     if (event.target == modalLicense) {
        modalLicense.style.display = "none";
     }
 }
// Получаем элементы модального окна и изображения
 const modalWarranty = document.getElementById("warranty-modal");
 const modalImageWarranty = document.getElementById("warranty-modal__image");

 function displayWarranty(img)
 {
    modalWarranty.style.display = "block";
    modalImageWarranty.src = img.src;
 }

function hideModalWarranty(event)
 {
     if (event.target == modalWarranty) {
        modalWarranty.style.display = "none";
     }
 }
