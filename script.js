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

//Отзывы

const openButton = document.getElementById('open-button');
const closeButton = document.getElementById('close-button');
const videoItems = document.getElementById('video-section')
const videoModal = document.getElementById('video-modal');
const videoIframe = document.getElementById('video-iframe');

videoItems.forEach(function(item) {
   const video = item.querySelector('video');
   video.addEventListener('click', function() {
   });
 });

openButton.addEventListener('click', function () {
    const videoId = 'fkse3SatzAM'; // Замените на фактический идентификатор видео, указанный в URL видео после "v="
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
