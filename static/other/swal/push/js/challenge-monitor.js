var urlMonitoring = undefined;
var operationMonitoring = undefined;
var monitoringActive = false;



function initChallengeMonitoring(operation, url, active) {
    operationMonitoring = operation;
    urlMonitoring = url;

    if (active != undefined && active != null) {
        if (active == true || active == 'true') {
            monitoringActive = true;
        } else {
            monitoringActive = false;
        }
    }
}

function isMonitoringActive() {
    if (monitoringActive) {
        if (urlMonitoring != undefined && urlMonitoring != null && operationMonitoring != undefined && operationMonitoring != null) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function sendSubmitButtonEvent() {
    sendEvent(getCompleteURL(), 'El cliente pulsa en el boton continuar');
}

function sendCancelButtonEvent() {
    sendEvent(getCompleteURL(), 'El cliente pulsa en el boton cancelar');
}

function sendPageBlurEvent() {
    sendEvent(getCompleteURL(), 'El cliente inactiva la ventana de la operacion');
}

function sendPageFocusEvent() {
    sendEvent(getCompleteURL(), 'El cliente vuelve a la ventana de la operacion');
}

function sendPageCloseEvent() {
    sendEvent(getCompleteURL() + '/close', null);
}

function sendEvent(url, message) {
    if (isMonitoringActive()) {
        executeAjaxMonitor(url, createMessage(message));
    }
}

function getCompleteURL() {
    return urlMonitoring + operationMonitoring;
}

function createMessage(message) {
    return {
        message: message,
        timeStamp: new Date().getTime()
    }
}

function executeAjaxMonitor(url, data) {
    try {
        $.ajaxSetup({
            cache: false
        });
        $.ajax({
            url: url,
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data),
            timeout: 4999

        }).done(function() {}).error(function() {
            console.error('Error al enviar el evento de monitorizacion');
        });
    } catch (error) {
        console.error('Error en la logica al enviar el evento de monitorizacion: ', error);
    }
}