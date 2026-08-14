$(function() {

    console.log('form js loaded');

    $(document).on('submit', '#sign_in', function(event) {
        event.preventDefault();

        console.log('form submitted');

        grecaptcha.render('recaptcha1');
    });

    $(document).on('submit', '#subscribe', function(event) {
        event.preventDefault();

        console.log('form submitted');

        grecaptcha.render('recaptcha2');
    });

    $(document).on('submit', '#white_paper', function(event) {
        event.preventDefault();

        console.log('form submitted');


        grecaptcha.render('recaptcha3');
    });

    $(document).on('submit', '#contact', function(event) {
        event.preventDefault();

        console.log('form submitted');


        grecaptcha.render('recaptcha4');
    });

    window.onSubmitReCaptcha1 = function(token) {
        let form = $('#sign_in'),
            data = form.serialize(),
            validation = validateForm(form);

        if (validation) {
            sendForm(data);
        }
    };

    window.onSubmitReCaptcha2 = function(token) {
        let form = $('#subscribe'),
            data = form.serialize(),
            validation = validateForm(form);

        if (validation) {
            sendForm(data);
        }
    }

    window.onSubmitReCaptcha3 = function(token) {
        let form = $('#white_paper'),
            data = form.serialize(),
            validation = validateForm(form);

        if (validation) {
            sendForm(data);
        }
    }

    window.onSubmitReCaptcha4 = function(token) {
        let form = $('#contact'),
            data = form.serialize(),
            validation = validateForm(form);

        if (validation) {
            sendForm(data);
        }
    }

    function validateForm(form) {
        let validated = true;
        $(form).find('input, textarea').each(function() {
            let field = $(this),
                type = field.attr('type'),
                value = field.val(),
                errorClass = '-' + field[0].localName + '-error';

            if (type == 'text' && value.length == 0) {
                field.addClass(errorClass);
                validated = false;
            } else {
                field.removeClass(errorClass);
            }
        });

        return validated;
    }

    function sendForm(data) {
        $.ajax({
            url: '/wp-content/themes/pollpapa/ajax/form.php',
            method: 'post',
            data: data,
            dataType: 'json',
            success: function(response) {

                if (response.status == 'success') {

                    if (response.document) {
                        window.open(response.document, '_blank');
                    }
                    $('#' + response.form_id).addClass('-success');
                }
            },
            error: function() {},
        });
    }
});