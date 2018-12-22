/*----------------------
Imports
----------------------*/

import elementInView from '@celsowhite/element-in-view';

/*----------------------
Element In View
----------------------*/

export default function parallax(elementSelector) {

    const parallaxItems = document.querySelectorAll(elementSelector);

    const windowHeight = window.innerHeight;
    
    /*----------------------
    Check Parallax Items
    ---
    On scroll check the position of an item and if in view then parallax it based on the speed and rotate settings
    ----------------------*/

    function checkParallaxItems() {

        Array.from(parallaxItems).forEach(item => {

            // If item is in view then parallax it at the given speed/rotation

            if (elementInView(item, 'bottom')) {

                // User configurations for speed and rotation

                let speed = Number(item.dataset.speed);

                let rotate = Number(item.dataset.rotate);

                // Calculate the percentage the item has scrolled within the viewport
                // If item was already in viewport then subtract its base so we have an origin for the scroll effects

                let percentage = (windowHeight - item.getBoundingClientRect().top) / (windowHeight + item.clientHeight) - item.base;

                // Adjust the vertical position by the speed factor while the item is in the viewport.
                // Taking the negative of the speed that was entered so the element moves in the direction the user desired. (positive speed is a negative translate Y).

                let position = -Math.round((speed * (percentage * 100)));

                // Rotate a specific amount of degrees while the item is in the viewport

                let degrees = Math.round((rotate / 100) * (percentage * 100));

                // Check which data attributes the user has set so we apply the right style attributes.

                if (rotate && speed) {
                    item.style.transform = 'translate3d(0,' + position + 'px, 0) rotate(' + degrees + 'deg)';
                } 
                else if (rotate) {
                    item.style.transform = 'rotate(' + degrees + 'deg)';
                } 
                else if (speed) {
                    item.style.transform = 'translate3d(0,' + position + 'px, 0)';
                }

            }

        });

    }

    /*----------------------
    Init
    ----------------------*/

    if(parallaxItems.length) {

        /*----------------------
        Initial Position Check
        ---
        Check each item to see if it is in view on page load so we can set a base position
        ----------------------*/

        Array.from(parallaxItems).forEach(item => {

            if (item.getBoundingClientRect().bottom < windowHeight) {
                item.base = (-item.getBoundingClientRect().top + windowHeight) / (item.clientHeight + windowHeight);
            } else {
                item.base = 0;
            }

        });

        /*----------------------
        Scroll Event
        ----------------------*/

        window.addEventListener('scroll', function () {

            // Ensure the browser repaints before running each animation

            window.requestAnimationFrame(checkParallaxItems);

        });

    }

}