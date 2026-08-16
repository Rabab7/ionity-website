/**
 * IONITY — Master Bilingual Language & Direction Controller (Logic)
 * File: assets/js/lang-core.js
 * 
 * Supports seamless switching between Arabic (RTL) and English (LTR)
 * across Desktop, Tablet, and Mobile for the entire website.
 */

(function () {
    'use strict';

    var navKeys = ['navHome', 'navWhy', 'navClients', 'navWebsites', 'navPremium', 'navContact'];

    var pluginDescKeys = [
        'pluginRevSliderDesc',
        'pluginLayerSliderDesc',
        'pluginWpBakeryDesc',
        'pluginWooCommerceDesc',
        'pluginWpmlDesc',
        'pluginHubspotDesc',
        'pluginRankMathDesc',
        'pluginContactFormDesc',
        'pluginMailchimpDesc',
        'pluginEventsCalDesc',
        'pluginAdsProDesc',
        'pluginW3CacheDesc',
        'pluginBuddyPressDesc',
        'pluginBbPressDesc',
        'pluginCookieLawDesc',
        'pluginYoastDesc'
    ];

    /* State Management */
    var currentLang = localStorage.getItem('ionity-lang') || 'ar';

    function qs(selector, parent) {
        return (parent || document).querySelector(selector);
    }

    function qsa(selector, parent) {
        return Array.prototype.slice.call((parent || document).querySelectorAll(selector));
    }

    /* Apply Language to the DOM */
    function applyLang(lang) {
        if (!window.IONITY_STRINGS || !window.IONITY_STRINGS[lang]) return;
        var s = window.IONITY_STRINGS[lang];
        var isAr = (lang === 'ar');

        /* 1. Toggle body class & html lang attribute */
        document.body.classList.toggle('lang-ar', isAr);
        document.documentElement.lang = lang;

        /* 2. Update Desktop Sidebar Navigation */
        var desktopLinks = qsa('.sidebar #menu .menuMiddle .menuContainer ul li a');
        desktopLinks.forEach(function (link, i) {
            if (!navKeys[i]) return;
            var spans = qsa('span', link);
            link.innerHTML = '';
            spans.forEach(function (sp) { link.appendChild(sp); });
            link.appendChild(document.createTextNode(s[navKeys[i]]));
        });

        /* 3. Update Mobile Menu Popup Navigation */
        var mobileLinks = qsa('.menuMobilePopup .menuMobilePopupContent ul li a');
        mobileLinks.forEach(function (link, i) {
            if (navKeys[i]) {
                link.textContent = s[navKeys[i]];
            }
        });

        /* 4. Update Scroll Down / Up Text */
        qsa('.sidebar .scrollDown a span:not(.img)').forEach(function (el) {
            el.textContent = s.scrollDown;
        });
        qsa('.sidebar .scrollUp a span:not(.img)').forEach(function (el) {
            el.textContent = s.scrollUp;
        });

        /* 5. Update Hero Headlines across all 5 slides */
        var headlines = [s.slide1Title, s.slide2Title, s.slide3Title, s.slide4Title, s.slide5Title];
        qsa('.muffinSlider .muffinSlide .headline h1').forEach(function (h, i) {
            if (headlines[i]) {
                h.innerHTML = headlines[i];
            }
        });

        /* 6. Update Slide Navigation Columns */
        var slideNavMappings = [
            [s.slideNav1, s.slideNav2, s.slideNav3],
            [s.slideNav1, s.slideNav2, s.slideNav3],
            [s.slideNav2, s.slideNav3, s.slideNav4],
            [s.slideNav3, s.slideNav4, s.slideNav5],
            [s.slideNav4, s.slideNav5, s.slideNav1]
        ];

        qsa('.muffinSlider .muffinSlide').forEach(function (slide, slideIdx) {
            var mapping = slideNavMappings[slideIdx];
            if (!mapping) return;
            var navCols = qsa('.navigation .column .name', slide);
            navCols.forEach(function (colName, colIdx) {
                if (mapping[colIdx]) {
                    colName.textContent = mapping[colIdx];
                }
            });
        });

        /* 7. Update Hero CTA Buttons */
        qsa('.muffinSlider .muffinSlide .headline .btn-wrapper a, .muffinSlider .muffinSlide .headline .button a').forEach(function (btn) {
            var img = btn.querySelector('img');
            btn.innerHTML = s.readMore + ' <span>' + (img ? img.outerHTML : '<img src="assets/images/arrow.svg" alt="">') + '</span>';
        });

        /* 8. Update Why Section */
        var whyTitleEl = qs('.whySection .whyColumnLeft h2');
        if (whyTitleEl) whyTitleEl.innerHTML = s.whyTitle;

        var why1 = qs('.whySection .icon1 .title');
        if (why1) why1.innerHTML = s.whyIcon1;
        var why2 = qs('.whySection .icon2 .title');
        if (why2) why2.innerHTML = s.whyIcon2;
        var why3 = qs('.whySection .icon3 .title');
        if (why3) why3.innerHTML = s.whyIcon3;
        var why4 = qs('.whySection .icon4 .title');
        if (why4) why4.innerHTML = s.whyIcon4;

        /* 9. Update Laser Stats / Social Proof Section */
        var stat1 = qs('.laser-stats-container .stat-1-text');
        if (stat1) stat1.textContent = s.stat1Text;

        var stat2 = qs('.laser-stats-container .stat-2-text');
        if (stat2) stat2.textContent = s.stat2Text;

        var stat3 = qs('.laser-stats-container .stat-3-text');
        if (stat3) stat3.textContent = s.stat3Text;

        var aboutTitle = qs('.about-us-container .about-title');
        if (aboutTitle) aboutTitle.textContent = s.aboutUsTitle;

        var aboutDesc = qs('.about-us-container .about-desc');
        if (aboutDesc) aboutDesc.textContent = s.aboutUsDesc;

        /* 10. Update Websites Section */
        var webTitle = qs('.websitesSection .content .title');
        if (webTitle) webTitle.innerHTML = s.websitesTitle;

        var webBtn = qs('.websitesSection .content .btn-wrapper a, .websitesSection .content .button a');
        if (webBtn) {
            webBtn.innerHTML = s.websitesButton + ' <span><img src="assets/images/arrow.svg" alt=""></span>';
        }

        /* 11. Update Premium Solutions Section */
        var premTitle = qs('.premiumSection .headline h2');
        if (premTitle) premTitle.textContent = s.premiumTitle;

        var descElements = qsa('.premiumSection .items .item .desc');
        descElements.forEach(function (descEl, idx) {
            var key = pluginDescKeys[idx];
            if (key && s[key]) {
                descEl.textContent = s[key];
            }
        });

        /* 12. Update Who We Are Section */
        var whoH2 = qs('.whoSection h2');
        if (whoH2) whoH2.textContent = s.whoTitle;

        var whoTeamDesc = qs('.whoSection .leftColumn .desc');
        if (whoTeamDesc) whoTeamDesc.innerHTML = s.whoTeamDesc;

        var whoCenter = qs('.whoSection .centerColumn .columnContainer');
        if (whoCenter) whoCenter.textContent = s.whoCenterText;

        var whoExpDesc = qs('.whoSection .rightColumn .desc');
        if (whoExpDesc) whoExpDesc.innerHTML = s.whoExpDesc;

        /* 13. Update Contact Section */
        var contactH2 = qs('.contactSection h2');
        if (contactH2) contactH2.textContent = s.contactTitle;

        var contactCol1Title = qs('.contactSection .columns .column:nth-child(1) .title div');
        if (contactCol1Title) contactCol1Title.textContent = s.contactSupport;

        var contactCol2Title = qs('.contactSection .columns .column:nth-child(2) .title div');
        if (contactCol2Title) contactCol2Title.textContent = s.contactDirect;

        var contactBtn1 = qs('.contactSection .columns .column:nth-child(1) .btn, .contactSection .columns .column:nth-child(1) .button a');
        if (contactBtn1) {
            contactBtn1.innerHTML = s.readMore + ' <span><img src="assets/images/arrow.svg" alt=""></span>';
        }
        var contactBtn2 = qs('.contactSection .columns .column:nth-child(2) .btn, .contactSection .columns .column:nth-child(2) .button a');
        if (contactBtn2) {
            contactBtn2.innerHTML = s.readMore + ' <span><img src="assets/images/arrow.svg" alt=""></span>';
        }

        var link1 = qs('.contactSection .links .column:nth-child(1) a');
        if (link1) {
            link1.innerHTML = '<span class="icon"><img src="assets/images/linkIcon1.svg" alt=""></span>' + s.linkDoc + ' <span class="arrow"><img src="assets/images/arrow2.svg" alt=""></span>';
        }
        var link2 = qs('.contactSection .links .column:nth-child(2) a');
        if (link2) {
            link2.innerHTML = '<span class="icon"><img src="assets/images/linkIcon2.svg" alt=""></span>' + s.linkForum + ' <span class="arrow"><img src="assets/images/arrow2.svg" alt=""></span>';
        }
        var link3 = qs('.contactSection .links .column:nth-child(3) a');
        if (link3) {
            link3.innerHTML = '<span class="icon"><img src="assets/images/linkIcon3.svg" alt=""></span>' + s.linkVideo + ' <span class="arrow"><img src="assets/images/arrow2.svg" alt=""></span>';
        }

        var copyEl = qs('.contactSection .copyright');
        if (copyEl) copyEl.innerHTML = s.copyright;

        /* 14. Update all Toggle Button Labels */
        var desktopBtn = document.getElementById('lang-toggle-btn');
        if (desktopBtn) desktopBtn.textContent = s.toggleDesktop;

        var headerBtn = document.getElementById('header-lang-toggle-btn');
        if (headerBtn) headerBtn.textContent = s.toggleHeader;

        var mobileMenuBtn = document.getElementById('mobile-lang-toggle-btn');
        if (mobileMenuBtn) mobileMenuBtn.textContent = s.toggleMobileMenu;

        /* 15. Save Preference */
        localStorage.setItem('ionity-lang', lang);
        currentLang = lang;
    }

    /* Toggle Action */
    function toggleLanguage() {
        var nextLang = (currentLang === 'ar') ? 'en' : 'ar';
        applyLang(nextLang);
    }

    /* Inject / Bind All Toggle Buttons */
    function setupToggleButtons() {
        /* Desktop Sidebar Toggle */
        var sidebar = document.querySelector('.sidebar');
        if (sidebar && !document.getElementById('lang-toggle-btn')) {
            var wrapper = document.createElement('div');
            wrapper.className = 'lang-toggle';
            var btn = document.createElement('button');
            btn.id = 'lang-toggle-btn';
            btn.setAttribute('type', 'button');
            btn.addEventListener('click', toggleLanguage);
            wrapper.appendChild(btn);
            sidebar.appendChild(wrapper);
        }

        /* Mobile Header Toggle */
        var headerBtn = document.getElementById('header-lang-toggle-btn');
        if (headerBtn) {
            headerBtn.addEventListener('click', toggleLanguage);
        }

        /* Mobile Menu Popup Toggle */
        var mobileMenuBtn = document.getElementById('mobile-lang-toggle-btn');
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', toggleLanguage);
        }
    }

    /* Initialization */
    function init() {
        setupToggleButtons();
        applyLang(currentLang);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
