/**
 * IONITY — Sliders Controller
 * File: assets/js/sliders.js
 * 
 * Handles all slick.js slider initializations and custom navigation.
 */

$(document).ready(function() {
    'use strict';

    /* 1. Muffin (Hero) Slider */
    var muffinSlider = $('.muffinSlider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: false,
        focusOnSelect: false,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        pauseOnFocus: false,
        pauseOnHover: false
    });

    $('.goToPrev').click(function() {
        $('.muffinSlider .slick-prev').click();
    });

    $('.goToNext').click(function() {
        $('.muffinSlider .slick-next').click();
    });

    $('.goTo1Slide').click(function() { muffinSlider.slick('slickGoTo', 0); });
    $('.goTo2Slide').click(function() { muffinSlider.slick('slickGoTo', 1); });
    $('.goTo3Slide').click(function() { muffinSlider.slick('slickGoTo', 2); });
    $('.goTo4Slide').click(function() { muffinSlider.slick('slickGoTo', 3); });
    $('.goTo5Slide').click(function() { muffinSlider.slick('slickGoTo', 4); });

    /* 2. Quote Slider */
    var quoteSlider = $('.quoteSlider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: false,
        focusOnSelect: true,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 600,
            settings: {
                arrows: false
            }
        }]
    });

    $('a[data-slide]').click(function(e) {
        e.preventDefault();
        var slideno = $(this).data('slide');
        $('.quoteSlider').slick('slickGoTo', slideno - 1);
    });

});
