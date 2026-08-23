/**
 * IONITY — Interactive Audio Soundscapes Controller
 * File: assets/js/audio-controller.js
 */

(function(window, $) {
    'use strict';

    var AudioController = {
        isMuted: localStorage.getItem('ionity_audio_muted') === 'true',
        sounds: {},
        isInitialized: false,

        init: function() {
            if (this.isInitialized) return;
            this.isInitialized = true;

            // Define sound paths
            var soundFiles = {
                click: 'audio/click.mp3',
                hover: 'audio/hover.mp3',
                switch: 'audio/switch.mp3',
                scroll: 'audio/scrollShort.mp3'
            };

            // Preload audio objects
            for (var key in soundFiles) {
                if (soundFiles.hasOwnProperty(key)) {
                    var aud = new Audio(soundFiles[key]);
                    aud.preload = 'auto';
                    aud.volume = (key === 'hover') ? 0.2 : (key === 'scroll' ? 0.25 : 0.35);
                    this.sounds[key] = aud;
                }
            }

            this.updateButtonUI();
            this.bindEvents();
        },

        play: function(name) {
            if (this.isMuted) return;
            var sound = this.sounds[name];
            if (sound) {
                try {
                    sound.currentTime = 0;
                    var promise = sound.play();
                    if (promise !== undefined) {
                        promise.catch(function() {
                            // User hasn't interacted with document yet or browser blocked autoplay
                        });
                    }
                } catch (e) {
                    // Audio play fallback
                }
            }
        },

        toggleMute: function() {
            this.isMuted = !this.isMuted;
            localStorage.setItem('ionity_audio_muted', this.isMuted ? 'true' : 'false');
            this.updateButtonUI();
            if (!this.isMuted) {
                this.play('switch');
            }
            return this.isMuted;
        },

        updateButtonUI: function() {
            var $btn = $('.audio-toggle-btn');
            if (!$btn.length) return;

            if (this.isMuted) {
                $btn.addClass('muted');
                $btn.attr('title', 'تشغيل المؤثرات الصوتية');
                $btn.find('.sound-label').text(document.documentElement.lang === 'en' ? 'Muted' : 'مكتوم');
                $btn.find('.sound-icon-on').hide();
                $btn.find('.sound-icon-off').show();
            } else {
                $btn.removeClass('muted');
                $btn.attr('title', 'كتم المؤثرات الصوتية');
                $btn.find('.sound-label').text(document.documentElement.lang === 'en' ? 'Sound' : 'صوت');
                $btn.find('.sound-icon-on').show();
                $btn.find('.sound-icon-off').hide();
            }
        },

        bindEvents: function() {
            var self = this;

            // Audio Toggle Click
            $(document).on('click', '.audio-toggle-btn', function(e) {
                e.preventDefault();
                e.stopPropagation();
                self.toggleMute();
            });

            // Button & Navigation Clicks
            $(document).on('click', 'a.btn, .menuMobilePopup a, .sidebar a, .lang-option, .goToPrev, .goToNext, .goTo1Slide, .goTo2Slide, .goTo3Slide, .goTo4Slide, .goTo5Slide', function() {
                self.play('click');
            });

            // Slide or Language Switch
            $(document).on('click', '.lang-option, .muffinSlide .menu .column', function() {
                self.play('switch');
            });

            // Desktop Hover Effect
            if (window.matchMedia('(hover: hover)').matches) {
                $(document).on('mouseenter', 'a.btn, .team-member-card, .menuMobilePopupClose, .itemContainer', function() {
                    self.play('hover');
                });
            }
        }
    };

    window.AudioController = AudioController;

    $(document).ready(function() {
        AudioController.init();
    });

})(window, jQuery);
