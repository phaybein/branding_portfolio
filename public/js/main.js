console.log('Main JS loaded');

// GRAB NAV BUTTON
const menuBtn = document.querySelector('.nav__menu__btn');

// GRAB NAV MENU
const mobileMenu = document.querySelector('.nav__menu--mobile');

// TOGGLE CLASS ON NAV MENU
const clickedBtn = () => {
    mobileMenu.classList.toggle('active');
};

// ADD EVENT LISTENER FOR CLICK
menuBtn.addEventListener('click', clickedBtn);