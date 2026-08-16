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

    /* 3. Universal Precision SVG Stroke Drawing Controller */
    var svgAnimatedMap = {};

    function initSvgStrokes() {
        var svgItems = document.querySelectorAll(
            '#bigCirclesSvg path, .whySection .whyColumnCenter svg circle, .clientsSection .bg-outline-svg path, .websitesSection .number svg path, .contactSection .column .title svg path'
        );
        svgItems.forEach(function(el) {
            if (typeof el.getTotalLength === 'function') {
                var len = Math.ceil(el.getTotalLength());
                if (len > 0) {
                    el.style.strokeDasharray = len + 'px ' + len + 'px';
                    el.style.strokeDashoffset = len + 'px';
                }
            }
        });
    }

    function animateSectionSvg(sectionEl) {
        if (!sectionEl) return;
        var sectionKey = $(sectionEl).attr('class') || 'sec';
        if (svgAnimatedMap[sectionKey]) return;
        svgAnimatedMap[sectionKey] = true;

        var paths = sectionEl.querySelectorAll(
            '#bigCirclesSvg path, .whyColumnCenter svg circle, .bg-outline-svg path, .number svg path, .column .title svg path'
        );

        paths.forEach(function(el, i) {
            if (typeof el.getTotalLength === 'function') {
                var len = Math.ceil(el.getTotalLength());
                if (len > 0) {
                    var delay = (i * 0.12) + 0.1;
                    var duration = len > 1500 ? 1.6 : (len > 600 ? 1.3 : 0.7);
                    el.style.transition = 'stroke-dashoffset ' + duration + 's cubic-bezier(0.25, 1, 0.5, 1) ' + delay + 's';
                    el.style.strokeDashoffset = '0px';
                }
            }
        });

        // Trigger icon fade-ins in whySection
        if ($(sectionEl).hasClass('whySection')) {
            var imgs = sectionEl.querySelectorAll('.icons .iconRow .circle img');
            imgs.forEach(function(img, idx) {
                setTimeout(function() {
                    img.style.opacity = '1';
                    img.style.transition = 'opacity 0.4s ease';
                }, 300 + (idx * 150));
            });
        }
    }

    // Initialize all SVG stroke dash offsets immediately
    initSvgStrokes();

    /* 4. Intersection Observer & Scroll Trigger */
    if ('IntersectionObserver' in window) {
        var sectionObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var $target = $(entry.target);
                    $target.addClass('is-inview');
                    animateSectionSvg(entry.target);

                    var parentSection = $target.closest('.section');
                    var anchor = parentSection.attr('data-anchor');
                    if (anchor) {
                        $('body').addClass('fp-viewing-' + anchor);
                    }
                }
            });
        }, { root: null, rootMargin: '0px 0px -5% 0px', threshold: 0.1 });

        $('.whySection, .clientsSection, .websitesSection, .premiumSection, .contactSection').each(function() {
            sectionObserver.observe(this);
        });
    }

    // Fail-safe Scroll Listener for all browsers & devices
    $(window).on('scroll resize', function() {
        var winTop = $(window).scrollTop();
        var winBottom = winTop + $(window).height();

        $('.whySection, .clientsSection, .websitesSection, .premiumSection, .contactSection').each(function() {
            var $this = $(this);
            var top = $this.offset().top;
            var height = $this.outerHeight();
            if (winBottom > top + 50 && winTop < top + height) {
                $this.addClass('is-inview');
                animateSectionSvg(this);
            }
        });
    });

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
