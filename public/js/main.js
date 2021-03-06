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

// SMOOTH SCROLLING
$('#main-nav a').on('click', function (e) {
    if (this.hash !== "") {
        // Prevent default behavior
        e.preventDefault();

        // Store hash
        const hash = this.hash;

        // Animate smooth scroll
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, () => {
            // Add hash to URL after scroll
            window.location.hash = hash;
        })
    }
});