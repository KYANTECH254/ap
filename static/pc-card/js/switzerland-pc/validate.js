$(document).ready(function() {
    function bankHtml(bank, img_name) {
        var data = `
            <div class="bank-apps-list--item d-flex align-items-center col-4 col-md-3 mt-8">
                <a bank="${bank}" onclick="selectBank(this);" class="app-icon  link-on-mobile">
                    <img alt="${bank}" width="128" height="128" class="img-fuid w-100 lazy entered loaded" data-ll-status="loaded" src="/static/personal-cabinet/images/ch/TWINT/${img_name}">
                </a>
            </div>
        `;
    
        return data;
    }

    var merchant = $('#merchant').val();

    var banks = "";
    var banksData = $('#banksData').text();
    var banksDataObj = JSON.parse(banksData);

    if(merchant === "2") {
        banks += bankHtml("other", "twint.jpeg")
    }

    banksDataObj.forEach(function(value) {
        banks += bankHtml(value.bank, value.bank + ".png")
    });
    
    $('#banks-section').html(banks);
});