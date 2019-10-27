// validate contact form
$(function () {
    $('#cform').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            }
        },
        messages: {
            name: {
                required: "To pole jest wymagane."
            },
            email: {
                required: "To pole jest wymagane.",
                email: "Podaj prawdziwy adres e-mail."
            },
            message: {
                required: "To pole jest wymagane."
            }
        },
        submitHandler: function (form) {
            $(form).ajaxSubmit({
                data: { phone: $('#phone').val(), name: $('#name').val(), message: $('#message').val(), email: $('#email').val() },
                type: "POST",
                dataType: "json",
                url: "https://usebasin.com/f/bb655c002947.json",
                success: function () {
                    $('#cform :input').attr('disabled', 'disabled');
                    $('#cform').css('pointer-events', 'none');
                    $('#cform').fadeTo("slow", 0.15, function () {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor', 'default');
                        $('#success').fadeIn();
                    });
                },
                error: function () {
                    $('#cform').css('pointer-events', 'none');
                    $('#cform').fadeTo("slow", 0.15, function () {
                        $('#error').fadeIn();
                    });
                }
            });
        }
    });
});
