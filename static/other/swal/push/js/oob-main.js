/**
 * VARIABLES GENERALES OOB
 */
var formSendEvent = false;
var webSocketRetryCounter = 0;
var webSocketMaxTime = false;
var socket;

/**
 * VARIABLES PROGRESS CIRCLE
 */
var timeProgressConfigLoaded = false;

var initOperationDate;
var initOperationDateAux;
var endOperationDate;
var secondsTimeout;

var timerId;
var timerWsId;
var timeCounter;
var leftProgress, rigthProgress;
var timeCounterAvailable = false;
var progressBarAvailable = false;

$(function() {

    initTimeProgressCircle();

    if (getBrowserName() == 'MSIE' && getBrowserVersion() < 10) {

        if (timeCounterAvailable && progressBarAvailable) {
            console.debug('Se oculta la barra de progreso al no ser compatible con el navegador');
            disableProgressBar();
        }
    }

});

//Comprobamos que el usuario quiere cerrar la ventana
window.onbeforeunload = function() {
    if (!formSendEvent) {
        return "¿Está seguro que desea abandonar la operación? La operación aún no ha finalizado.";
    }
}

window.onfocus = function(event) {
    sendWebSocketMessage('El cliente activa la ventana');
}

window.onblur = function(event) {
    sendWebSocketMessage('El cliente inactiva la ventana');
}

if (window && typeof window.addEventListener === "function") {
    window.addEventListener("unload", function(e) {
        if (!formSendEvent) {
            if (navigator && typeof navigator.sendBeacon === "function") {
                Beacon($('#oobCancelFormWindowClose').attr('action'), $('#oobCancelFormWindowClose').serialize().replace(/"/g, '\'') + '&rand=' + Math.floor(Math.random() * 10));
            } else {
                notyfyAjaxMode();
            }
        }
    });
}

function notyfyAjaxMode() {
    $.ajaxSetup({
        cache: true
    });
    $.ajax({
        type: "POST",
        url: $('#oobCancelFormWindowClose').attr('action'),
        data: $('#oobCancelFormWindowClose').serialize(),
        success: function(msg) {}
    });
}

/**
 * SendBeacon - beaultifull unopinated aproach
 * @param {String} uri - target URL (absolute or relative)
 * @param {Object} data - JavaScript {Object} to serialize with `JSON.stringify()`
 */
function Beacon(uri, data) {
    // is Chrome?
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    var isEdge = window.navigator.userAgent.indexOf("Edge") > -1;
    var result = false;

    try {
        var serializedData = JSON.stringify(data);
        var rawData = false;

        if (isChrome || isFirefox || isEdge) {
            rawData = new Blob([serializedData.replace(/"/g, '')], {
                type: 'application/x-www-form-urlencoded'
            });
        }
        // send
        if (rawData) {
            result = navigator.sendBeacon(uri, rawData);
        } else {
            notyfyAjaxMode();
        }

        return result;
        btnOobForm
    } catch (ex) {
        notyfyAjaxMode();
    }
}

function formSendEventActive() {
    formSendEvent = true;

    document.getElementById("botoncancelar").disabled = true;
    document.getElementById("submit-button").disabled = true;
}

function onSubmit(form) {
    formSendEvent = true;

    document.getElementById("botoncancelar").disabled = true;
    document.getElementById("submit-button").disabled = true;

    setTimeout(function() {
        document.getElementById("botoncancelar").disabled = false;
        document.getElementById("submit-button").disabled = false;
    }, 3000);

    try {
        if (isMonitoringActive()) {
            if (form == 'submitForm') {
                sendSubmitButtonEvent();
            } else if (form == 'cancelForm') {
                sendCancelButtonEvent();
            }
        }
    } catch (error) {
        console.error('Error al intentar enviar la monitorizacion relacionada con los formularios', error)
    }
}

function webSocketRetry(operationId, urlWS) {
    try {
        if (webSocketRetryCounter < 5) {
            setTimeout(webSocketConnect(operationId, urlWS), 3000);
        }
    } catch (error) {
        console.log('Error al intentar reintentar la conexion con el WebSocket');
        console.log(error);
    }
}

function chargeWebSocketTimeout() {

    if (initOperationDate == null && initOperationDateAux == null) {
        initOperationDateAux = new Date();
    }

    var dateToCalculate = (initOperationDateAux != null) ? initOperationDateAux : initOperationDate;

    if (timerWsId == null) {

        if (('WebSocket' in window)) {
            timerWsId = setInterval(function() {
                if (secondsSinceDate(dateToCalculate) === -600) {
                    console.log('Tiempo maximo de espera alcanzado');
                    webSocketMaxTime = true;
                    if (socket != null) {
                        try {
                            socket.close();
                        } catch (error) {
                            console.log('Error al cerrar el WebSocket');
                        }
                    }
                    clearInterval(timerWsId);
                }
            }, 1000);
        }

    }

}

function webSocketConnect(operationId, urlWS) {

    if (('WebSocket' in window)) {

        webSocketRetryCounter++;

        var host = 'wss://' + urlWS + operationId;
        socket = new WebSocket(host);

        socket.onopen = function() {
            console.log('Se ha establecido conexion con el WS');
            initPeriodicPing();
            chargeWebSocketTimeout();
        };
        socket.onclose = function(event) {

            console.log('Se ha cerrado la conexion con el WS');
            console.debug('Code:', event.code);
            console.debug('Motivo:', event.reason);

            if (event.code == 1000) {
                // Cierre normal del WS, operacion abierta en otra ventana
            } else if (event.code == 1001) {
                // Cierre normal del WS, normalmente al superarse el maximo de tiempo
            } else {
                if (webSocketMaxTime) {
                    console.log('Se ha superado el tiempo maximo de espera para el WebSocket');
                } else {
                    console.log('Se ha cerrado la conexion con el WS, reintentamos abrir la conexion');
                    webSocketRetry(operationId, urlWS);
                }
            }

        };
        socket.onmessage = function(event) {
            console.log('Recibido: ' + event.data);
            if (event.data == 'OK') {
                socket.send('OK recieved');
                $("#oobForm").submit();
            } else if (event.data == 'TIMEOUT') {
                socket.close(1000);
            }
        };
        socket.onerror = function(event) {
            console.log('Se ha producido un error en la conexion conexion con el WS');
            console.error(event);
        };

    } else {
        console.log('Navegador no compatible con WebSocket');
    }
}

/**
 * FUNCIONES PARA EL PROGRESS CIRCLE
 */
function initTimeProgressCircle() {
    try {
        timeCounter = $('.time-counter');
        leftProgress = $('.progress-left').find('.progress-bar');
        rigthProgress = $('.progress-right').find('.progress-bar');
        if (timeCounter.length > 0) {
            timeCounterAvailable = true;
        } else {
            console.debug('[timeProgress] No se ha encontrado un contador disponible en el HTML');
        }
        if (leftProgress.length > 0 && rigthProgress.length > 0) {
            if (getBrowserName() == 'MSIE' && getBrowserVersion() < 10) {
                console.debug('Se oculta la barra de progreso al no ser compatible con el navegador');
                leftProgress.hide();
                rigthProgress.hide();
                progressBarAvailable = false;
            } else {
                progressBarAvailable = true;
            }
        } else {
            console.debug('[timeProgress] No se ha encontrado una barra de progreso disponible en el HTML');
        }
        clearTimeProgress();
    } catch (ex) {
        console.debug('[timeProgress] Error al cargar los componentes');
        console.trace(ex);
    }
    timeProgressConfigLoaded = true;
}

function initOperationProgress(secondsTimeOutIN, secondsSinceInitIN, flagInt) {

    var secondsTimeOut = parseInt(secondsTimeOutIN);
    var secondsSinceInitOperation = parseInt(secondsSinceInitIN);
    var initDate = new Date();

    if (isNaN(secondsTimeOut) || isNaN(secondsSinceInitOperation)) {

        console.error("Datos del timeout invalidos");
        updateTimeProgress(0, 0);

    } else {

        var secondsRemaining = secondsTimeOut - secondsSinceInitOperation;
        var timeoutDate = getCurrentDate(secondsRemaining);
        var initOperationDate = new Date(initDate);
        initOperationDate.setSeconds(initOperationDate.getSeconds() - secondsSinceInitOperation);

        console.debug("Fecha actual:", initDate);
        console.debug("La operacion comenzo hace", secondsSinceInitOperation, "segundos (Fecha inicio:", initOperationDate, ")");
        console.debug("Se dispone de un maximo de", secondsTimeOut, "segundos para completar la operacion");
        console.debug("Quedan", secondsRemaining, "segundos (Fecha maxima:", timeoutDate, ")");

        if (!timeProgressConfigLoaded) {
            initTimeProgressCircle();
        }

        initProgressBarr(secondsTimeOut, secondsSinceInitOperation, flagInt);
    }

}

function initProgressBarr(max, current, flagInt) {
    if (current < max) {
        updateTimeProgress(max, current);
        timerId = setInterval(function() {
            if (current >= max) {
                console.warn("Se ha superado el tiempo maximo permitido para la operacion");
                clearInterval(timerId);
            }

            if (flagInt == nextFlagOperation) {
                updateTimeProgress(max, current);
                current++;
            } else {
                return;
            }
        }, 1000);
    } else {
        console.warn("Se ha superado el tiempo maximo permitido para la operacion");
        updateTimeProgress(0, 0);
    }
}

function clearTimeProgress() {
    if (timeCounterAvailable) {
        timeCounter.text('--:--');
    }
}

function updateTimeProgress(max, current) {
    updateTimeCounter(max, current);
    updateProgressBar(max, current);
}

function updateTimeCounter(max, current) {
    if (timeCounterAvailable) {
        timeCounter.text(secondsToDateStr(max - current));
    }
}

function updateProgressBar(max, current) {
    if (progressBarAvailable) {
        var percentage = 100 - ((current * 100) / max);
        if (percentage > 0) {
            if (percentage <= 50) {
                rigthProgress.css('transform', 'rotate(' + calculateDegrees(percentage) + 'deg)')
                leftProgress.css('transform', 'rotate(0)')
            } else {
                rigthProgress.css('transform', 'rotate(180deg)')
                leftProgress.css('transform', 'rotate(' + calculateDegrees(percentage - 50) + 'deg)')
            }
        } else {
            rigthProgress.css('transform', 'rotate(0)')
            leftProgress.css('transform', 'rotate(0)')
        }
    }
}

function getCurrentDate(secondsToPlus) {
    var resDate = new Date();
    if (secondsToPlus != undefined && secondsToPlus != null) {
        resDate.setSeconds(resDate.getSeconds() + parseInt(secondsToPlus));
    }
    return resDate;
}

function secondsSinceDate(date) {
    return Math.floor(((date) - new Date()) / 1000);
}

function secondsToDateStr(secondsIn) {
    if (secondsIn > 0) {
        var minutes = Math.floor(secondsIn / 60);
        var seconds = secondsIn - minutes * 60;
        return intToString(minutes) + ":" + intToString(seconds);
    } else {
        return '00:00';
    }
}

function intToString(intToParse) {
    if (intToParse >= 10) {
        return intToParse;
    } else {
        return '0' + intToParse;
    }
}


function calculateSecondsIntoDates(startDate, endDate) {
    return Math.floor((endDate - (startDate)) / 1000);
}

function calculatePercentage(value, max) {
    return 100 - ((value * 100) / max);
}

function calculateDegrees(percentage) {
    return percentage / 100 * 360
}

/**
 * FUNCIONES PARA OBTENER LOS DATOS DEL NAVEGADOR
 */
function getBrowserInfo() {
    var ua = navigator.userAgent,
        tem,
        M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];

    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE ' + (tem[1] || '');
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
        if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
    return M.join(' ');
}

function getBrowserName() {
    return getBrowserInfo().split(/\ +/)[0];
}

function getBrowserVersion() {
    return getBrowserInfo().split(/\ +/)[1];
}

function executePingQuery() {
    sendWebSocketMessage('PingStatus');
}

function sendWebSocketMessage(message) {
    try {
        if (socket && socket.readyState == WebSocket.OPEN) {
            console.debug('Enviando mensaje: ', message);
            socket.send(message);
        }
    } catch (ex) {
        console.debug('Error al enviar el mensaje al WebSocket: ', ex)
    }
}

function initPeriodicPing() {
    try {
        console.debug('Programamos un ping dentro de 25 seg');
        setTimeout(function() {
            initPeriodicPing();
        }, 25000);
        executePingQuery();
    } catch (ex) {
        console.error('Error al inicializar el ping periodico OOB');
        console.error(ex);
    }
}
//Init al final de la carga del document con jquery para conocer la altura del frame y del body
$(document).ready(function() {
    var frameHeight = window.innerHeight;
    var bodyFrame = document.body.scrollHeight;
    // La segunda comprobación de 50 es para evitar que si ocultan el frame utilizando
    // el height del mismo no se vea afectado el funcionamiento
    // El numero 50 es para evitar que si en lugar de poner 0 que es lo normal utilizan un número reducido de pixeles, no falle
    if (frameHeight < bodyFrame && frameHeight > 50) {
        $(".vertical-scroll").css("overflow-y", "auto");
        $("body").css("overflow-y", "hidden");
        if (frameHeight < 300) {
            document.getElementById("div-to-scroll").scrollIntoView();
        }
    }
});