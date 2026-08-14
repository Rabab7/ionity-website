let captchaLoaded = false;

$(document).ready(function() {

    if (captchaLoaded) return;

    let head = document.getElementsByTagName('head')[0],
        recaptchaScript = document.createElement('script');

    recaptchaScript.type = 'text/javascript';
    recaptchaScript.src = 'https://www.google.com/recaptcha/api.js';

    head.appendChild(recaptchaScript);

    captchaLoaded = true;
});