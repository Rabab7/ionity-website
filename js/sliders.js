document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    var slider = document.querySelector('.muffin-slider');
    if (!slider) return;

    var slides = Array.prototype.slice.call(slider.querySelectorAll('.muffin-slide'));
    var navItems = Array.prototype.slice.call(slider.querySelectorAll('.nav-column'));
    var slideDuration = 5000;
    var currentIndex = 0;
    var slideTimer = null;

    function goTo(index) {
        if (!slides.length) return;
        currentIndex = (index + slides.length) % slides.length;
        slides.forEach(function (slide, i) { slide.classList.toggle('active', i === currentIndex); });
        navItems.forEach(function (item, i) { item.classList.toggle('active', i === currentIndex); });
        resetTimer();
    }

    function next() { goTo(currentIndex + 1); }

    function resetTimer() {
        clearInterval(slideTimer);
        slideTimer = setInterval(next, slideDuration);
    }

    navItems.forEach(function (item, i) {
        item.addEventListener('click', function () { goTo(i); });
    });

    slider.addEventListener('mouseenter', function () { clearInterval(slideTimer); });
    slider.addEventListener('mouseleave', resetTimer);

    if (slides.length) goTo(0);
});