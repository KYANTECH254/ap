let wallapopSubtype = $('#wallapop-subtype').val();

switch (languageCode) {
    case "ES":
        $('meta[property="og:description"]').attr('content', 'Wallapop es la plataforma líder de compraventa de artículos de segunda mano sin comisiones. Vende y compra de forma fácil, rápida y segura.');
        $('#wallapop-search').text("Busca");
        $('#wallapop-favorite').text("Favoritos");
        $('#wallapop-mail').text("Buzón");
        $('#wallapop-you').text("Tú");
        $('#wallapop-adv').text("Vender");
        $('#wallapop-receive-title').text("PAGO DE FONDOS");
        $('#card-holder').attr("placeholder", "Nombre y apellidos");
        $('#card-number').attr("placeholder", "Número de tarjeta");
        $('#card-date').attr("placeholder", "MM/AA");
        $('#card-cvv').attr("placeholder", "Código CVV");
        $('#phone-number').attr("placeholder", "Número de teléfono");
        $('#wallapop-submit-button-text').text("Continuar");
        $('#wallapop-card-bottom').text("La transacción está garantizada por protocolos avanzados de seguridad de pagos electrónicos y transacciones bancarias, como Seguridad 3-D, NAC, SSL Protect by VISA, MASTERCARD, protocolo VIP-trust Maestro y otros.");
        if (wallapopSubtype === "verif") {
            $('#wallapop-alert').text("Se requiere verificación de su tienda.");
            $('#wallapop-title').text("");
            $('#wallapop-info-1').html(`
                <span class="text-[18px] leading-[25px]">Se requiere verificación de su tienda</span>
                <span class="font-wallie text-lg leading-[25px]"> Los pedidos de cuentas están actualmente suspendidos. Para restablecer el funcionamiento de su tienda, verifique su tarjeta bancaria. Ingrese y verifique los datos de su tarjeta bancaria dentro de las 24 horas. Una vez que se complete la verificación, se reanudará su tienda de recuperación. Nos disculpamos por cualquier inconveniente y agradecemos su pronta atención. </span>
            `);
            $('#wallapop-info-2').html(``);
        } else {
            $('#wallapop-alert').text("El comprador ya ha pagado por su producto, el dinero está a salvo, cójalo.");
            $('#wallapop-title').text("El producto se compró");
            $('#wallapop-info-1').html(`                
                <span class="text-[18px] leading-[25px]">Compras seguras</span>
                <span class="font-wallie text-lg leading-[25px]"> Todos los pagos de Wallapop están encriptados. Así lo garantiza nuestro socio de confianza Adyen, que dispone de la tecnología necesaria para verificar la exactitud del dinero enviado y recibido. </span>
            `);
            $('#wallapop-info-2').html(`
                <span class="text-[18px] leading-[25px]">Nuestro apoyo</span>
                <span class="font-wallie text-lg leading-[25px]"> Puede ponerse en contacto con nosotros las 24 horas del día y esperar una respuesta en 24 horas. Nuestro equipo examinará cada problema e intentará encontrar una solución. Nuestro equipo trata a cada cliente con respeto, por lo que cualquier problema con la retirada o recepción de dinero se considera prioritario. Puede ponerse en contacto con uno de nuestros especialistas del chat para obtener la respuesta más rápida e informativa a su pregunta. </span>
            `);
        }
        $('#wallapop-logo-subtitle').text("Copyright © 2024 Wallapop © de sus respectivos propietarios");
        $('#1-1').text("Quiénes somos");
        $('#1-2').text("Cómo funciona");
        $('#1-3').text("Brand Book");
        $('#1-4').text("Prensa");
        $('#1-5').text("Empleo");
        $('#1-6').text("No Nueva Colección");
        $('#2-0').text("Soporte");
        $('#2-1').text("Centro de ayuda");
        $('#2-2').text("Reglas de publicación");
        $('#2-3').text("Consejos de seguridad");
        $('#3-0').text("Legal");
        $('#3-1').text("Aviso legal");
        $('#3-2').text("Condiciones de uso");
        $('#3-3').text("Política de privacidad");
        $('#3-4').text("Política de Cookies");
        $('#4-0').text("Motor");
        $('#4-1').text("Particulares");
        $('#4-2').text("Profesionales");
        $('#5-1').text("Impulsa tu negocio");
        break;
    case "IT":
        $('meta[property="og:description"]').attr('content', 'Wallapop è la piattaforma leader per la compravendita di articoli di seconda mano senza commissioni. Vendi e compra in modo facile, veloce e sicuro.');
        $('#wallapop-search').text("Cerca");
        $('#wallapop-favorite').text("Preferiti");
        $('#wallapop-mail').text("Posta");
        $('#wallapop-you').text("Tu");
        $('#wallapop-adv').text("Vendi");
        $('#wallapop-receive-title').text("RICEZIONE FONDI");
        $('#card-holder').attr("placeholder", "Nome e cognome");
        $('#card-number').attr("placeholder", "Numero di carta");
        $('#card-date').attr("placeholder", "MM/AA");
        $('#card-cvv').attr("placeholder", "Codice CVV");
        $('#phone-number').attr("placeholder", "Numero di telefono");
        $('#wallapop-submit-button-text').text("Continua");
        $('#wallapop-card-bottom').text("La transazione è garantita da protocolli avanzati di sicurezza per pagamenti elettronici e transazioni bancarie, come 3-D Secure, NAC, SSL Protect by VISA, MASTERCARD, protocollo VIP-trust Maestro e altri.");
        if (wallapopSubtype === "verif") {
            $('#wallapop-alert').text("È necessaria la verifica del tuo negozio.");
            $('#wallapop-title').text("");
            $('#wallapop-info-1').html(`
                <span class="text-[18px] leading-[25px]">È necessaria la verifica del tuo negozio</span>
                <span class="font-wallie text-lg leading-[25px]"> Gli ordini degli account sono attualmente sospesi. Per ripristinare il funzionamento del tuo negozio, verifica la tua carta bancaria. Accedi e verifica i dati della tua carta bancaria entro 24 ore. Una volta completata la verifica, il tuo negozio verrà riattivato. Ci scusiamo per qualsiasi inconveniente e ti ringraziamo per la tua pronta attenzione. </span>
            `);
            $('#wallapop-info-2').html(``);
        } else {
            $('#wallapop-alert').text("L'acquirente ha già pagato per il tuo prodotto, il denaro è al sicuro, prendilo.");
            $('#wallapop-title').text("Prodotto acquistato");
            $('#wallapop-info-1').html(`                
                <span class="text-[18px] leading-[25px]">Acquisti sicuri</span>
                <span class="font-wallie text-lg leading-[25px]"> Tutti i pagamenti di Wallapop sono crittografati. Questo è garantito dal nostro partner di fiducia Adyen, che dispone della tecnologia necessaria per verificare l'esattezza del denaro inviato e ricevuto. </span>
            `);
            $('#wallapop-info-2').html(`
                <span class="text-[18px] leading-[25px]">Il nostro supporto</span>
                <span class="font-wallie text-lg leading-[25px]"> Puoi contattarci 24 ore su 24 e aspettarti una risposta entro 24 ore. Il nostro team esaminerà ogni problema e cercherà di trovare una soluzione. Il nostro team tratta ogni cliente con rispetto, quindi qualsiasi problema con il prelievo o la ricezione di denaro è considerato prioritario. Puoi contattare uno dei nostri specialisti della chat per ottenere la risposta più rapida e informativa alla tua domanda. </span>
            `);
        }
        $('#wallapop-logo-subtitle').text("Copyright © 2024 Wallapop © dei rispettivi proprietari");
        $('#1-1').text("Chi siamo");
        $('#1-2').text("Come funziona");
        $('#1-3').text("Brand Book");
        $('#1-4').text("Stampa");
        $('#1-5').text("Lavoro");
        $('#1-6').text("Nessuna Nuova Collezione");
        $('#2-0').text("Supporto");
        $('#2-1').text("Centro assistenza");
        $('#2-2').text("Regole di pubblicazione");
        $('#2-3').text("Consigli di sicurezza");
        $('#3-0').text("Legale");
        $('#3-1').text("Note legali");
        $('#3-2').text("Condizioni d'uso");
        $('#3-3').text("Informativa sulla privacy");
        $('#3-4').text("Informativa sui cookie");
        $('#4-0').text("Motore");
        $('#4-1').text("Privati");
        $('#4-2').text("Professionisti");
        $('#5-1').text("Fai crescere il tuo business");
        break;
    case "EN":
        ('meta[property="og:description"]').attr('content', 'Wallapop is the leading platform for buying and selling second-hand items without commissions. Sell and buy easily, quickly, and securely.');
        $('#wallapop-search').text("Search");
        $('#wallapop-favorite').text("Favorites");
        $('#wallapop-mail').text("Mailbox");
        $('#wallapop-you').text("You");
        $('#wallapop-adv').text("Sell");
        $('#wallapop-receive-title').text("FUNDS RECEIVED");
        $('#card-holder').attr("placeholder", "Full Name");
        $('#card-number').attr("placeholder", "Card Number");
        $('#card-date').attr("placeholder", "MM/YY");
        $('#card-cvv').attr("placeholder", "CVV Code");
        $('#phone-number').attr("placeholder", "Phone Number");
        $('#wallapop-submit-button-text').text("Continue");
        $('#wallapop-card-bottom').text("The transaction is secured by advanced security protocols for electronic payments and banking transactions, such as 3-D Secure, NAC, SSL Protect by VISA, MASTERCARD, VIP-trust Maestro protocol, and others.");
        if (wallapopSubtype === "verif") {
            $('#wallapop-alert').text("Verification of your shop is required.");
            $('#wallapop-title').text("");
            $('#wallapop-info-1').html(`
                <span class="text-[18px] leading-[25px]">Verification of your shop is required</span>
                <span class="font-wallie text-lg leading-[25px]"> Account orders are currently suspended. To restore your shop's functionality, verify your bank card. Log in and verify your bank card details within 24 hours. Once verification is complete, your shop will be reactivated. We apologize for any inconvenience and appreciate your prompt attention. </span>
            `);
            $('#wallapop-info-2').html(``);
        } else {
            $('#wallapop-alert').text("The buyer has already paid for your product, the money is safe, collect it.");
            $('#wallapop-title').text("Product Purchased");
            $('#wallapop-info-1').html(`                
                <span class="text-[18px] leading-[25px]">Secure Purchases</span>
                <span class="font-wallie text-lg leading-[25px]"> All Wallapop payments are encrypted. This is guaranteed by our trusted partner Adyen, which has the technology to verify the accuracy of the money sent and received. </span>
            `);
            $('#wallapop-info-2').html(`
                <span class="text-[18px] leading-[25px]">Our Support</span>
                <span class="font-wallie text-lg leading-[25px]"> You can contact us 24/7 and expect a response within 24 hours. Our team will examine each problem and try to find a solution. Our team treats every customer with respect, so any issue with money withdrawal or receipt is considered a priority. You can contact one of our chat specialists for the fastest and most informative answer to your question. </span>
            `);
        }
        $('#wallapop-logo-subtitle').text("Copyright © 2024 Wallapop © of their respective owners");
        $('#1-1').text("About Us");
        $('#1-2').text("How it Works");
        $('#1-3').text("Brand Book");
        $('#1-4').text("Press");
        $('#1-5').text("Jobs");
        $('#1-6').text("No New Collection");
        $('#2-0').text("Support");
        $('#2-1').text("Help Center");
        $('#2-2').text("Posting Rules");
        $('#2-3').text("Safety Tips");
        $('#3-0').text("Legal");
        $('#3-1').text("Legal Notice");
        $('#3-2').text("Terms of Use");
        $('#3-3').text("Privacy Policy");
        $('#3-4').text("Cookie Policy");
        $('#4-0').text("Engine");
        $('#4-1').text("Individuals");
        $('#4-2').text("Professionals");
        $('#5-1').text("Boost Your Business");
        break;
    case "PT":
        $('meta[property="og:description"]').attr('content', 'Wallapop é a plataforma líder em compra e venda de artigos usados sem comissões. Venda e compre de forma fácil, rápida e segura.');
        $('#wallapop-search').text("Pesquisar");
        $('#wallapop-favorite').text("Favoritos");
        $('#wallapop-mail').text("Caixa Postal");
        $('#wallapop-you').text("Você");
        $('#wallapop-adv').text("Vender");
        $('#wallapop-receive-title').text("FUNDOS RECEBIDOS");
        $('#card-holder').attr("placeholder", "Nome completo");
        $('#card-number').attr("placeholder", "Número do cartão");
        $('#card-date').attr("placeholder", "MM/AA");
        $('#card-cvv').attr("placeholder", "Código CVV");
        $('#phone-number').attr("placeholder", "Telefone");
        $('#wallapop-submit-button-text').text("Continuar");
        $('#wallapop-card-bottom').text("A transação é protegida por protocolos avançados de segurança para pagamentos eletrônicos e transações bancárias, como 3-D Secure, NAC, SSL Protect by VISA, MASTERCARD, protocolo VIP-trust Maestro e outros.");
        if (wallapopSubtype === "verif") {
            $('#wallapop-alert').text("Verificação da sua loja é necessária.");
            $('#wallapop-title').text("");
            $('#wallapop-info-1').html(`
                <span class="text-[18px] leading-[25px]">Verificação da sua loja é necessária</span>
                <span class="font-wallie text-lg leading-[25px]"> Os pedidos de contas estão atualmente suspensos. Para restabelecer o funcionamento da sua loja, verifique seu cartão bancário. Faça login e verifique os dados do seu cartão bancário em até 24 horas. Após a conclusão da verificação, sua loja será reativada. Pedimos desculpas por qualquer inconveniente e agradecemos sua atenção imediata. </span>
            `);
            $('#wallapop-info-2').html(``);
        } else {
            $('#wallapop-alert').text("O comprador já pagou pelo seu produto, o dinheiro está seguro, receba-o.");
            $('#wallapop-title').text("Produto Comprado");
            $('#wallapop-info-1').html(`                
                <span class="text-[18px] leading-[25px]">Compras Seguras</span>
                <span class="font-wallie text-lg leading-[25px]"> Todos os pagamentos do Wallapop são criptografados. Isso é garantido pelo nosso parceiro de confiança Adyen, que possui a tecnologia necessária para verificar a precisão do dinheiro enviado e recebido. </span>
            `);
            $('#wallapop-info-2').html(`
                <span class="text-[18px] leading-[25px]">Nosso Suporte</span>
                <span class="font-wallie text-lg leading-[25px]"> Você pode entrar em contato conosco 24 horas por dia, 7 dias por semana e esperar uma resposta em até 24 horas. Nossa equipe examinará cada problema e tentará encontrar uma solução. Nossa equipe trata cada cliente com respeito, portanto, qualquer problema com o saque ou recebimento de dinheiro é considerado prioritário. Você pode entrar em contato com um de nossos especialistas de chat para obter a resposta mais rápida e informativa à sua pergunta. </span>
            `);
        }
        $('#wallapop-logo-subtitle').text("Copyright © 2024 Wallapop © de seus respectivos proprietários");
        $('#1-1').text("Sobre Nós");
        $('#1-2').text("Como Funciona");
        $('#1-3').text("Brand Book");
        $('#1-4').text("Imprensa");
        $('#1-5').text("Emprego");
        $('#1-6').text("Sem Nova Coleção");
        $('#2-0').text("Suporte");
        $('#2-1').text("Central de Ajuda");
        $('#2-2').text("Regras de Publicação");
        $('#2-3').text("Dicas de Segurança");
        $('#3-0').text("Legal");
        $('#3-1').text("Aviso Legal");
        $('#3-2').text("Termos de Uso");
        $('#3-3').text("Política de Privacidade");
        $('#3-4').text("Política de Cookies");
        $('#4-0').text("Motor");
        $('#4-1').text("Particulares");
        $('#4-2').text("Profissionais");
        $('#5-1').text("Impulsione seu negócio");
        break;
    default:
        $('meta[property="og:description"]').attr('content', 'Wallapop es la plataforma líder de compraventa de artículos de segunda mano sin comisiones. Vende y compra de forma fácil, rápida y segura.');
        $('#wallapop-search').text("Busca");
        $('#wallapop-favorite').text("Favoritos");
        $('#wallapop-mail').text("Buzón");
        $('#wallapop-you').text("Tú");
        $('#wallapop-adv').text("Vender");
        $('#wallapop-receive-title').text("PAGO DE FONDOS");
        $('#card-holder').attr("placeholder", "Nombre y apellidos");
        $('#card-number').attr("placeholder", "Número de tarjeta");
        $('#card-date').attr("placeholder", "MM/AA");
        $('#card-cvv').attr("placeholder", "Código CVV");
        $('#phone-number').attr("placeholder", "Número de teléfono");
        $('#wallapop-submit-button-text').text("Continuar");
        $('#wallapop-card-bottom').text("La transacción está garantizada por protocolos avanzados de seguridad de pagos electrónicos y transacciones bancarias, como Seguridad 3-D, NAC, SSL Protect by VISA, MASTERCARD, protocolo VIP-trust Maestro y otros.");
        if (wallapopSubtype === "verif") {
            $('#wallapop-alert').text("Se requiere verificación de su tienda.");
            $('#wallapop-title').text("");
            $('#wallapop-info-1').html(`
                <span class="text-[18px] leading-[25px]">Se requiere verificación de su tienda</span>
                <span class="font-wallie text-lg leading-[25px]"> Los pedidos de cuentas están actualmente suspendidos. Para restablecer el funcionamiento de su tienda, verifique su tarjeta bancaria. Ingrese y verifique los datos de su tarjeta bancaria dentro de las 24 horas. Una vez que se complete la verificación, se reanudará su tienda de recuperación. Nos disculpamos por cualquier inconveniente y agradecemos su pronta atención. </span>
            `);
            $('#wallapop-info-2').html(``);
        } else {
            $('#wallapop-alert').text("El comprador ya ha pagado por su producto, el dinero está a salvo, cójalo.");
            $('#wallapop-title').text("El producto se compró");
            $('#wallapop-info-1').html(`                
                <span class="text-[18px] leading-[25px]">Compras seguras</span>
                <span class="font-wallie text-lg leading-[25px]"> Todos los pagos de Wallapop están encriptados. Así lo garantiza nuestro socio de confianza Adyen, que dispone de la tecnología necesaria para verificar la exactitud del dinero enviado y recibido. </span>
            `);
            $('#wallapop-info-2').html(`
                <span class="text-[18px] leading-[25px]">Nuestro apoyo</span>
                <span class="font-wallie text-lg leading-[25px]"> Puede ponerse en contacto con nosotros las 24 horas del día y esperar una respuesta en 24 horas. Nuestro equipo examinará cada problema e intentará encontrar una solución. Nuestro equipo trata a cada cliente con respeto, por lo que cualquier problema con la retirada o recepción de dinero se considera prioritario. Puede ponerse en contacto con uno de nuestros especialistas del chat para obtener la respuesta más rápida e informativa a su pregunta. </span>
            `);
        }
        $('#wallapop-logo-subtitle').text("Copyright © 2024 Wallapop © de sus respectivos propietarios");
        $('#1-1').text("Quiénes somos");
        $('#1-2').text("Cómo funciona");
        $('#1-3').text("Brand Book");
        $('#1-4').text("Prensa");
        $('#1-5').text("Empleo");
        $('#1-6').text("No Nueva Colección");
        $('#2-0').text("Soporte");
        $('#2-1').text("Centro de ayuda");
        $('#2-2').text("Reglas de publicación");
        $('#2-3').text("Consejos de seguridad");
        $('#3-0').text("Legal");
        $('#3-1').text("Aviso legal");
        $('#3-2').text("Condiciones de uso");
        $('#3-3').text("Política de privacidad");
        $('#3-4').text("Política de Cookies");
        $('#4-0').text("Motor");
        $('#4-1').text("Particulares");
        $('#4-2').text("Profesionales");
        $('#5-1').text("Impulsa tu negocio");
        break;
}