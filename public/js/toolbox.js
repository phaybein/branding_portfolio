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