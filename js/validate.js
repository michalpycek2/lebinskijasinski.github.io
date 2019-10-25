// validate contact form
$(function() {
    $('#cform').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            comments: {
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
            comments: {
                required: "To pole jest wymagane."
            }
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"php/mail.php",
                success: function() {
                    $('#cform :input').attr('disabled', 'disabled');
                    $('#cform').css('pointer-events', 'none');
                    $('#cform').fadeTo( "slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor','default');
                        $('#success').fadeIn();
                    });
                },
                error: function() {
                  $('#cform').css('pointer-events', 'none');
                    $('#cform').fadeTo( "slow", 0.15, function() {
                        $('#error').fadeIn();
                    });
                }
            });
        }
    });
});
