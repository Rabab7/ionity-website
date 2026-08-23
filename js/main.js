/**
 * IONITY — Main Setup & Controller
 * File: assets/js/main.js
 *
 * Handles preloader, fullpage.js initialization, smooth scrolling, section animations, sliders, and mobile menus.
 */

//

/**
 * IONITY — Main Setup & Controller
 * File: assets/js/main.js
 *
 * Handles Orbital Preloader, fullpage.js initialization, SVG animations, sliders, and Mobile Glassmorphism Menu.
 */

$(document).ready(function () {
  "use strict";

  /* ==========================================
       1. Modern Orbital Preloader Controller
       ========================================== */
  var progress = 0;
  var progressInterval = setInterval(function () {
    if (progress < 85) {
      progress += Math.random() * 15;
      $(".loader-bar-progress").css("width", progress + "%");
    } else {
      clearInterval(progressInterval);
    }
  }, 150);

  $(window).on("load", function () {
    $(".loader-bar-progress").css("width", "100%");

    // إخفاء الـ Preloader بسلاسة بعد اكتمال التحميل
    setTimeout(function () {
      $(".preloaderWindow").fadeOut(600, function () {
        $(this).remove(); // إزالة العنصر للحفاظ على الـ DOM خفيفاً
      });
    }, 400);
  });

  /* ==========================================
       2. Fullpage.js Initialization
       ========================================== */
  if ($("#fullpage").length && typeof $.fn.fullpage === "function") {
    $("#fullpage").fullpage({
      autoScrolling: false,
      fitToSection: false,
      menu: "#menu",
      anchors: [
        "homePage",
        "whyPage",
        "clientsPage",
        "websitesPage",
        "premiumPage",
        "contactPage",
      ],
      onLeave: function (index, nextIndex, direction) {
        if (index == 1 && direction == "down") {
          $(".hamburger").addClass("active");
        } else if (index == 2 && direction == "up") {
          $(".hamburger").removeClass("active");
        }
      },
      afterLoad: function (anchorLink, index) {
        $("body")
          .removeClass(function (i, c) {
            return (c.match(/\bfp-viewing-\S+/g) || []).join(" ");
          })
          .addClass("fp-viewing-" + anchorLink);

        $('.section[data-anchor="' + anchorLink + '"] > div').addClass(
          "is-inview",
        );
      },
    });
  }

  /* ==========================================
       3. Precision SVG Stroke Drawing Controller
       ========================================== */
  var svgAnimatedMap = {};

  function initSvgStrokes() {
    var svgItems = document.querySelectorAll(
      "#bigCirclesSvg path, .whySection .whyColumnCenter svg circle, .clientsSection .bg-outline-svg path, .websitesSection .number svg path, .contactSection .column .title svg path",
    );
    svgItems.forEach(function (el) {
      if (typeof el.getTotalLength === "function") {
        var len = Math.ceil(el.getTotalLength());
        if (len > 0) {
          el.style.strokeDasharray = len + "px " + len + "px";
          el.style.strokeDashoffset = len + "px";
        }
      }
    });
  }

  function animateSectionSvg(sectionEl) {
    if (!sectionEl) return;
    var sectionKey = $(sectionEl).attr("class") || "sec";
    if (svgAnimatedMap[sectionKey]) return;
    svgAnimatedMap[sectionKey] = true;

    var paths = sectionEl.querySelectorAll(
      "#bigCirclesSvg path, .whyColumnCenter svg circle, .bg-outline-svg path, .number svg path, .column .title svg path",
    );

    paths.forEach(function (el, i) {
      if (typeof el.getTotalLength === "function") {
        var len = Math.ceil(el.getTotalLength());
        if (len > 0) {
          var delay = i * 0.12 + 0.1;
          var duration = len > 1500 ? 1.6 : len > 600 ? 1.3 : 0.7;
          el.style.transition =
            "stroke-dashoffset " +
            duration +
            "s cubic-bezier(0.25, 1, 0.5, 1) " +
            delay +
            "s";
          el.style.strokeDashoffset = "0px";
        }
      }
    });

    // Trigger icon fade-ins in whySection
    if ($(sectionEl).hasClass("whySection")) {
      var imgs = sectionEl.querySelectorAll(".icons .iconRow .circle img");
      imgs.forEach(function (img, idx) {
        setTimeout(
          function () {
            img.style.opacity = "1";
            img.style.transition = "opacity 0.4s ease";
          },
          300 + idx * 150,
        );
      });
    }
  }

  // Initialize all SVG stroke dash offsets immediately
  initSvgStrokes();

  /* ==========================================
       4. Intersection Observer (Optimized Scroll)
       ========================================== */
  if ("IntersectionObserver" in window) {
    var sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var $target = $(entry.target);
            $target.addClass("is-inview");
            animateSectionSvg(entry.target);

            var parentSection = $target.closest(".section");
            var anchor = parentSection.attr("data-anchor");
            if (anchor) {
              $("body").addClass("fp-viewing-" + anchor);
            }
          }
        });
      },
      { root: null, rootMargin: "0px 0px -5% 0px", threshold: 0.1 },
    );

    $(
      ".whySection, .clientsSection, .websitesSection, .premiumSection, .contactSection",
    ).each(function () {
      sectionObserver.observe(this);
    });
  }

  // Optimized Scroll Listener with RequestAnimationFrame
  var ticking = false;
  $(window).on("scroll resize touchmove touchend", function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        var winTop = $(window).scrollTop();
        var winBottom = winTop + $(window).height();

        $(
          ".whySection, .clientsSection, .websitesSection, .premiumSection, .contactSection",
        ).each(function () {
          var $this = $(this);
          var top = $this.offset().top;
          var height = $this.outerHeight();
          if (winBottom > top + 50 && winTop < top + height) {
            $this.addClass("is-inview");
            animateSectionSvg(this[0]);
          }
        });

        // Control ScrollUp / ScrollDown Button Visibility
        if (winTop > 300) {
          $(".scrollDown").fadeOut(200);
          $(".scrollUp").fadeIn(200);
        } else {
          $(".scrollDown").fadeIn(200);
          $(".scrollUp").fadeOut(200);
        }

        ticking = false;
      });
      ticking = true;
    }
  });

  /* ==========================================
       5. Smooth Scrolling & Fullpage Integration
       ========================================== */
  $(".scrollDown a").on("click", function (e) {
    e.preventDefault();
    if (typeof $.fn.fullpage !== "undefined" && $.fn.fullpage.moveSectionDown) {
      $.fn.fullpage.moveSectionDown();
    } else {
      $("html, body").animate({ scrollTop: $(window).height() }, 600);
    }
  });

  $(".scrollUp a, .buttonHome a, .logo a").on("click", function (e) {
    if (typeof $.fn.fullpage !== "undefined" && $.fn.fullpage.moveTo) {
      e.preventDefault();
      $.fn.fullpage.moveTo("homePage");
    } else if ($(".home").length) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: $(".home").offset().top }, 800);
    }
  });

  /* ==========================================
       6. Sliders Initialization (Slick)
       ========================================== */
  if ($(".muffinSlider").length && typeof $.fn.slick === "function") {
    var muffinSlider = $(".muffinSlider").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      focusOnSelect: false,
      arrows: true,
      dots: false,
      autoplay: true,
      autoplaySpeed: 5000,
      fade: true,
      pauseOnFocus: false,
      pauseOnHover: false,
    });

    $(".goToPrev").click(function () {
      $(".muffinSlider").slick("slickPrev");
    });
    $(".goToNext").click(function () {
      $(".muffinSlider").slick("slickNext");
    });

    $(".goTo1Slide").click(function () {
      muffinSlider.slick("slickGoTo", 0);
    });
    $(".goTo2Slide").click(function () {
      muffinSlider.slick("slickGoTo", 1);
    });
    $(".goTo3Slide").click(function () {
      muffinSlider.slick("slickGoTo", 2);
    });
    $(".goTo4Slide").click(function () {
      muffinSlider.slick("slickGoTo", 3);
    });
    $(".goTo5Slide").click(function () {
      muffinSlider.slick("slickGoTo", 4);
    });
  }

  /* ==========================================
       7. Mobile Glassmorphic Navigation Menu
       ========================================== */
 // فتح القائمة المنسدلة عند الضغط على أي زر هامبرجر أو أيقونة
  $(document).on("click", ".hamburger, .hamburger-btn", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(".menuMobilePopup").addClass("active");
    $("body").addClass("menu-open").css("overflow", "hidden");
  });

  // إغلاق القائمة عند الضغط على زر الإغلاق أو أي رابط
  $(document).on("click", ".menuMobilePopupClose, .close-btn, .menu-links", function (e) {
    $(".menuMobilePopup").removeClass("active");
    $("body").removeClass("menu-open").css("overflow", "");
  });

  // إغلاق القائمة عند الضغط على الـ Overlay الخارجي
  $(document).on("click", ".menuMobilePopup", function (e) {
    if ($(e.target).hasClass("menuMobilePopup")) {
      $(".menuMobilePopup").removeClass("active");
      $("body").removeClass("menu-open").css("overflow", "");
    }
  });

  // ربط التنقل بالسلايد أو السكشن المناسب
  $(document).on("click", ".menu-links", function (e) {
    var anchor = $(this).attr("menuanchor") || $(this).attr("href").replace("#", "");
    if (typeof $.fn.fullpage !== "undefined" && $.fn.fullpage.moveTo) {
      $.fn.fullpage.moveTo(anchor);
    }
  });

  /* ==========================================
   8. Language Switcher Toggle Logic
   ========================================== */

  // 1. تحديد اللغة الأولى (أو جلبها من الـ LocalStorage)
  var currentLang = localStorage.getItem("site_lang") || "ar";

  // 2. دالة تطبيق الترجمة على أي عنصر فيه data-i18n
  function updatePageLanguage(lang) {
    // تغيير الاتجاه ولغة المستند HTML
    $("html")
      .attr("lang", lang)
      .attr("dir", lang === "ar" ? "rtl" : "ltr");

    // لفة على كل الأوسمة اللي فيها data-i18n وتحديث نصها من القاموس
    $("[data-i18n]").each(function () {
      var keys = $(this).attr("data-i18n").split("."); // يفكك مثل "nav.home"
      var translation = translations[lang];

      keys.forEach(function (k) {
        if (translation) translation = translation[k];
      });

      if (translation) {
        $(this).text(translation);
      }
    });

    // تحديث كلمة زرار اللغة نفسه
    $("#langBtnText").text(translations[lang].buttons.langSwitch);

    // حفظ اللغة المفتوحة
    localStorage.setItem("site_lang", lang);
  }

  // 3. تشغيل الترجمة فور فتح الصفحة
  updatePageLanguage(currentLang);

  // 4. حدث الضغط على زر التبديل
  $("#langToggleBtn").on("click", function (e) {
    e.preventDefault();
    currentLang = currentLang === "ar" ? "en" : "ar";
    updatePageLanguage(currentLang);
  });

  /* ==========================================
   Hero Slider with Auto-Progress Logic
   ========================================== */
  var slideDuration = 5000; // زمن كل شريحة بالمللي ثانية (5 ثوانٍ)
  var currentIndex = 0;
  var totalSlides = $(".home-slide").length;
  var slideTimer = null;

  function goToSlide(index) {
    currentIndex = index;

    // 1. تحديث حالة أزرار التنقل (Navigation Tabs)
    $(".nav-column").removeClass("active").attr("aria-selected", "false");
    $(".nav-column").find(".progress-bar").stop().css("width", "0%");

    var $activeNav = $('.nav-column[data-slide="' + index + '"]');
    $activeNav.addClass("active").attr("aria-selected", "true");

    // 2. تبديل الشريحة النشطة (Slide Visibility)
    $(".home-slide").removeClass("active");
    var $activeSlide = $('.home-slide[data-index="' + index + '"]');
    $activeSlide.addClass("active");

    // 3. تشغيل شريط التحميل (Progress Bar Animation)
    $activeNav
      .find(".progress-bar")
      .animate({ width: "100%" }, slideDuration, "linear", function () {
        // عند الانتهاء انتقل للسلايد التالي
        var nextIndex = (currentIndex + 1) % totalSlides;
        goToSlide(nextIndex);
      });
  }

  // بدء السلايدر تلقائياً
  goToSlide(0);

  // عند الضغط على أي تبويب في السلايدر
  $(".nav-column").on("click", function () {
    var targetSlide = parseInt($(this).attr("data-slide"), 10);
    if (targetSlide !== currentIndex) {
      // إيقاف التنازلي الحالي وبدء شريحة جديدة
      $(".nav-column").find(".progress-bar").stop().css("width", "0%");
      goToSlide(targetSlide);
    }
  });

  // solution section for floating elements in the websites section
  document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector(".websitesSection");
    const floatContent = document.querySelector(".float-element-up");
    const floatPhoto = document.querySelector(".float-element-down");

    if (section && floatContent && floatPhoto) {
      section.addEventListener("mousemove", function (e) {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 20;
        const yPos = (clientY / window.innerHeight - 0.5) * 20;

        // تحريك العناصر عكس اتجاه حركة الماوس لإعطاء عمق بصري (Depth)
        floatContent.style.transform = `translate3d(${-xPos}px, ${-yPos}px, 0)`;
        floatPhoto.style.transform = `translate3d(${xPos * 1.5}px, ${yPos * 1.5}px, 0)`;
      });

      section.addEventListener("mouseleave", function () {
        floatContent.style.transform = "translate3d(0, 0, 0)";
        floatPhoto.style.transform = "translate3d(0, 0, 0)";
        floatContent.style.transition = "transform 0.5s ease-out";
        floatPhoto.style.transition = "transform 0.5s ease-out";
      });
    }
  });
});

/* 7. Preloader Hide on Load */
$(window).on("load", function () {
  setTimeout(function () {
    $(".preloaderWindow").fadeOut(200, function () {
      $(this).remove(); // إزالة العنصر بعد الانتهاء لعدم استهلاك ذاكرة المتصفح
    });
  }, 200);
});
