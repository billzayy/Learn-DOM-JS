const btnBurger = document.querySelector('.fa-bars');
const link = document.querySelector('.links');
const socialMedia = document.querySelector('.social-media')

btnBurger.addEventListener('click', () => { 
    link.classList.toggle("show-links")
    socialMedia.classList.toggle("show-links")
})