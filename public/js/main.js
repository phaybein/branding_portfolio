console.log('Main JS loaded')
// $(document).ready(() => {
//     $('.header--all__add').on('click', () => {
//         $('.task-form').addClass('active')
//     })

//     $('.task-form .modal__close').on('click', () => {
//         $('.task-form').removeClass('active')
//     })
// });

// Grab Elements
const siteBody = document.querySelector('body');

const add = document.querySelector('.header--all__add');

const close = document.querySelector('.task-form .modal__close');

const addActiveClass = document.querySelector('.task-form');

const removeActiveClass = document.querySelector('.task-form');

// Add Active Class

add.addEventListener('click', () => {
    addActiveClass.classList.add('activate');
    siteBody.classList.add('overflowHidden');
});

// Remove Active Class
close.addEventListener('click', () => {
    removeActiveClass.classList.remove('activate');
    siteBody.classList.remove('overflowHidden');
});