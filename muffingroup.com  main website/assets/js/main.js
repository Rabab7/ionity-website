/**
 * IONITY — Main Setup & Controller
 * File: assets/js/main.js
 * 
 * Handles preloader, fullpage.js initialization, smooth scrolling, and mobile menus.
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
        }
    });

    /* 3. Smooth Scrolling (Local Nav) */
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

    /* 4. Mobile Menu */
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

/* 5. Preloader Hide on Load */
$(window).on('load', function() {
    $(".preloaderWindow .logo").removeClass("show");
    $(".preloaderWindow .line").removeClass("show");
    $(".preloaderWindow .text").removeClass("show");
    $(".preloaderWindow").addClass("hide");
});
