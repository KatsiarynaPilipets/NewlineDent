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
 function hideModalLicense()
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

function hideModalWarranty()
 {
     if (event.target == modalWarranty) {
        modalWarranty.style.display = "none";
     }
 }
