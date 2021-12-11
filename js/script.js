$(document).ready(function() {
  $('.header__burger').click(function() {
    $('.header__burger, .header__menu').toggleClass('active');
  });
});

const contactBtns = document.querySelectorAll('.contact');
const modal = document.querySelector('.modal-overlay');
const modalClose = document.querySelector('.modal-close');
const slides = document.querySelectorAll('.slide');
const videos = document.querySelectorAll('video');

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses();
        slide.classList.add('active');   
    })
}

for (const video of videos) {
  video.addEventListener('click', () => {
    clearActiveVideos();
    video.play();
  })
}   

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
}

function clearActiveVideos() {
  videos.forEach((video) => {
    video.pause();
  });
}


contactBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
      modal.style.opacity = '1';
      modal.style.pointerEvents = 'auto';
      document.body.style.overflowY = 'hidden';
  });
});

modalClose.addEventListener('click', () => {
  modal.style.opacity = '0';
  modal.style.pointerEvents = 'none';
  document.body.style.overflowY = 'auto';
});