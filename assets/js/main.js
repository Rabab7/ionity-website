/**
 * IONITY — Main Setup & Controller
 * File: assets/js/main.js
 * 
 * Handles preloader, fullpage.js initialization, smooth scrolling, section animations, sliders, and mobile menus.
 */

$(document).ready(function() {
    'use strict';

    /* 1. Preloader Initial State */
    $(".preloaderWindow .logo").addClass("show");
    $(".preloaderWindow .line").addClass("show");
    $(".preloaderWindow .text").addClass("show");

    $(window).resize();

    /* 2. Fullpage.js Initialization */
    $('#fullpage').fullpage({
        autoScrolling: false,
        fitToSection: false,
        menu: '#menu',
        anchors: ['homePage', 'whyPage', 'clientsPage', 'websitesPage', 'premiumPage', 'contactPage'],
        onLeave: function(index, nextIndex, direction) {
            if (index == 1 && direction == 'down') {
                $('.hamburger').addClass("active");
            } else if (index == 2 && direction == 'up') {
                $('.hamburger').removeClass("active");
            }
        },
        afterLoad: function(anchorLink, index) {
            $('body').removeClass(function(i, c) {
                return (c.match(/\bfp-viewing-\S+/g) || []).join(' ');
            }).addClass('fp-viewing-' + anchorLink);
            
            $('.section[data-anchor="' + anchorLink + '"] > div').addClass('is-inview');
        }
    });

    /* 3. Intersection Observer for Scroll Animations */
    if ('IntersectionObserver' in window) {
        var observerOptions = {
            root: null,
            rootMargin: '0px 0px -10% 0px',
            threshold: 0.15
        };

        var sectionObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var $target = $(entry.target);
                    $target.addClass('is-inview');
                    
                    var parentSection = $target.closest('.section');
                    var anchor = parentSection.attr('data-anchor');
                    if (anchor) {
                        $('body').addClass('fp-viewing-' + anchor);
                    }
                }
            });
        }, observerOptions);

        $('.whySection, .clientsSection, .websitesSection, .premiumSection, .contactSection').each(function() {
            sectionObserver.observe(this);
        });
    } else {
        // Fallback for older browsers
        $('.whySection, .clientsSection, .websitesSection, .premiumSection, .contactSection').addClass('is-inview');
    }

    /* 4. Smooth Scrolling (Local Nav) */
    var body = $("html, body");

    $('.scrollDown a').click(function() {
        $.fn.fullpage.moveSectionDown();
    });

    $('.scrollUp a, .buttonHome a, .logo a').click(function() {
        body.animate({
            scrollTop: $(".muffin").offset().top
        }, 800);
        return false;
    });

    /* 5. Sliders Initialization */
    if ($('.muffinSlider').length && typeof $.fn.slick === 'function') {
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
    }

    /* 6. Mobile Menu */
    $(".hamburger").click(function() {
        $(".menuMobilePopup").show(0);
        $(".menuMobilePopup").animate({
            "opacity": 1
        }, 0);
        $(".menuMobilePopupWindow").delay(0).addClass("show");
    });

    $(".menuMobilePopup a").click(function() {
        $(".menuMobilePopupWindow").removeClass("show");
        $(".menuMobilePopup").delay(200).animate({
            "opacity": 0
        }, 200);
        $(".menuMobilePopup").delay(200).hide(0);
    });

});

/* 7. Preloader Hide on Load */
$(window).on('load', function() {
    $(".preloaderWindow .logo").removeClass("show");
    $(".preloaderWindow .line").removeClass("show");
    $(".preloaderWindow .text").removeClass("show");
    $(".preloaderWindow").addClass("hide");
});
