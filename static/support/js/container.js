let responses = 0, clientMessages = [];
const messagesBlock = document.querySelector("#chat-messages-block");
const messages = document.querySelector("#chat-messages-list");
const input = document.querySelector("#chat-message-input");
if (localStorage.getItem('clientMessagesFrom1') === null) updateClientMessagesFrom1();

// HANDLERS

// close chat
$('#chat-container-header').on('click', function() {
    parent.toggleChat();
});

// input
$('#chat-message-input').keyup(function() {
    if(this.value.charAt(0) === ' ' || this.value.charAt(0) === '\n')
        $(this).val(this.value.trim());

    if (this.value.length !== 0)
        $('#chaport-input-wrapper').removeClass('input-empty').addClass('input-not-empty');
    else
        $('#chaport-input-wrapper').removeClass('input-not-empty').addClass('input-empty');
});

// send message submit
$('#chat-message-input').keypress(async function(e) {
    if (e.which == 13 && !e.shiftKey) await sendMessage();
});

// send message click
$('#chaport-send-button').click(async function() {
    await sendMessage();
});

// input file click
$('#chat-file-button').click(function() {
    document.getElementById('chat-input-file').click();
});

// read file
$('#chat-input-file').change(function(e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    this.value = "";

    reader.onload = async function(event) {
        await sendPhoto(file, event.target.result);
    };
    reader.readAsDataURL(file.slice(0, file.size));
});



// OTHERS

// unix time
function unixTime() {
    return Math.floor(new Date().getTime() / 1000);
}

// is base64
function isBase64(str) {
    const base64ImageRegex = /^data:[^;]*;base64,([A-Za-z0-9+/=])+$/;
    return base64ImageRegex.test(str);
}

// play audio
function playAudio() {
    var audio = new Audio;
    audio.src = "/static/support/audio/beep.mp3";
    audio.play();
}

// scroll
function scrollTop() {
    messagesBlock.scrollTop = messagesBlock.scrollHeight;
}

function addClientMessage(message, side) {
    var clientMessagesLength = clientMessages.length, 
        lastIndex = 0,
        messageJson = {};
    
    if (clientMessagesLength > 0) lastIndex = clientMessages[clientMessagesLength - 1].id + 1;
    messageJson = {id: lastIndex, message: message, createdAt: unixTime(), messageFrom: side};
    clientMessages.push(messageJson);

    return lastIndex;
}

// send msg text
async function sendMessage(side=0) {
    var message = input.value.replace(/\s+/g, " ").trim();
    if (message.length < 1) return;

    input.value = "";
    input.blur();
    $('#chaport-input-wrapper').removeClass('input-not-empty').addClass('input-empty');

    var id = addClientMessage(message, side);
    messages.innerHTML += textMessageFrom0(id, message);
    scrollTop();

    await axios.post(chatUpdatePath, {
        adId: adId,
        supportToken: supportToken,
        message: message,
    });
};

// send msg photo
async function sendPhoto(file, message, side=0) {
    var id = addClientMessage(message, side);
    messages.innerHTML += photoMessageFrom0(id, message);
    initImageListeners();
    scrollTop();

    const formData = new FormData();
    formData.append("adId", adId);
    formData.append("supportToken", supportToken);
    formData.append("message", file);
    
    await axios.post(chatUpdatePath, formData, {
        'Content-Type': 'multipart/form-data'
    });
}

const photoMessageFrom1 = (id, message) => `
    <div id="chat-message-wrapper-${id}" class="message-group-wrapper message-wrapper file-transfer-wrapper interlocutor-message-wrapper image-transfer-wrapper">
        <div class="message-text-photo-wrapper">
            <div class="message">
                <div class="message-body">
                    <img src="${message}" alt="${unixTime()}" class="zoom-in">
                </div>
            </div>
            <div class="operator-photo has-photo ">
                <img alt="${chatTitle}" title="${chatTitle}" src="${chatAvatarPath}">
            </div>
        </div>
    </div>
`;

const textMessageFrom1 = (id, message) => `
    <div id="chat-message-wrapper-${id}" class="message-group-wrapper">
        <div class="message-wrapper interlocutor-message-wrapper ">
            <div class="message-text-photo-wrapper">
                <div class="message">
                    <div class="message-body">
                        <p>${textHyperlinks(message)}</p>
                    </div>
                </div>
                <div class="operator-photo has-photo ">
                    <img alt="${chatTitle}" title="${chatTitle}" src="${chatAvatarPath}">
                </div>
            </div>
        </div>
    </div>
`;

const photoMessageFrom0 = (id, message) => `
    <div id="chat-message-wrapper-${id}" class="message-group-wrapper message-wrapper file-transfer-wrapper your-message-wrapper image-transfer-wrapper">
        <div class="message-text-photo-wrapper">
            <div class="message">
                <div class="message-body">
                    <img src="${message}" alt="${unixTime()}" class="zoom-in">
                </div>
                <div class="message-status message-status-read message-status-hidden"></div>
            </div>
        </div>
    </div>
`;

const textMessageFrom0 = (id, message) => `
    <div id="chat-message-wrapper-${id}" class="message-group-wrapper">
        <div class="message-wrapper your-message-wrapper ">
            <div class="message-text-photo-wrapper">
                <div class="message">
                    <div class="message-body">
                        <p>${textHyperlinks(message)}</p>
                    </div>
                    <div class="message-status message-status-read"></div>
                </div>
            </div>
        </div>
    </div>
`;

// replace text links
function textHyperlinks(text) {
    var regex = /(https?:\/\/[^\s]+)/g;
    return text.replace(regex, '<a href="$1" target="_blank">$1</a>');
};

// message child
function messageChildHtml(side, message, id) {
    var messageHtml = '';
    
    if (isBase64(message)) {
        if (side === 1) messageHtml = photoMessageFrom1(id, message);
        else messageHtml = photoMessageFrom0(id, message);
    } else {
        if (side === 1) messageHtml = textMessageFrom1(id, message);
        else messageHtml = textMessageFrom0(id, message);
    }

    return messageHtml;
};

const popupStyle = () => `
    left: 0; top: 0;
    height: 100%; width: 100%;
    position: fixed; display: flex;
    background-color: rgba(255, 255, 255, 1);
    justify-content: center; align-items: center;
    z-index: 2;
`;

const closeBtnStyle = `  
    top: 0; right: 15px;
    position: absolute;
    font-size: 50px;
    cursor: pointer;  
`;

const createPopup = (element) => {
    const container = document.querySelector("#chat-messages-block");
    const image = document.createElement("img");
    const popup = document.createElement("div");
    const imageContainer = document.createElement("div");

    imageContainer.style = "display: flex; max-height: 85vh;";
    image.style = "max-width: 90%;max-height: 100%; margin: 0 auto; object-fit: contain;";
    popup.style = popupStyle();
    image.setAttribute("src", element.src);

    popup.onclick = () => {
        popup.remove();
    };

    container.append(popup);
    imageContainer.append(image);
    popup.append(imageContainer);
};

// init image listeners
const initImageListeners = () => {
    const images = document.querySelectorAll("#chat-messages-list .zoom-in");
    images.forEach((img) => (img.onclick = (event) => createPopup(event.target)));
};

// clear messages
function clearMessages() {
    messages.innerHTML = "";
}

// check new messages
function checkNewMessages(newMessagesLength) {
    if (parent.isChatClosed() && newMessagesLength > 0) {
        if (chatAutoOpen) {
            parent.openChat();
        } else {
            playAudio();
            parent.showWidgetBadge(newMessagesLength);
        }
    }
}

// check deleted messages
function checkDeletedMessages(deletedMessagesLength) {
    if (parent.isChatClosed()) {
        if (!chatAutoOpen) {
            parent.showWidgetBadge(0 - deletedMessagesLength);
        }
    }
}

// display messages
function displayResponseMessages(messagesData, newMessagesLength=0) {
    checkNewMessages(newMessagesLength);
    
    messagesData.forEach((message) => {
        messages.innerHTML += messageChildHtml(message.messageFrom, message.message, message.id);
    });
    
    scrollTop();
    initImageListeners();
}

// deleted messages handler
function handleDeletedMessages(deletedMessages) {
    checkDeletedMessages(deletedMessages.length);

    deletedMessages.forEach((message) => {
        $(`#chat-message-wrapper-${message}`).remove();
    });
}

// new messages handler
function handleNewMessages(newMessages, dataMessages) {
    checkNewMessages(newMessages.length);
    displayResponseMessages(dataMessages.filter(message => newMessages.includes(message.id)));
}

// sort messages
function sortMessages(messagesData) {
    return messagesData.map(message => message.id);
}

// get storage client messages
function getClientMessagesFrom1() {
    let storageMessages = localStorage.getItem('clientMessagesFrom1');
    return JSON.parse(storageMessages);
}

// update storage client messages
function updateClientMessagesFrom1(sortedMessages = []) {
    localStorage.setItem('clientMessagesFrom1', JSON.stringify(sortedMessages));
}

// compare messages
function compareMessages(cmf1, rmf1) {
    return rmf1.length === cmf1.length && rmf1.every((value, index) => value === cmf1[index]);
}

// equate responces
function equateResponse(responseMessages) {
    responses++;
    clientMessages = responseMessages;
}

// init messages
function initMessages(data) {
    const responseMessages = data.messages;
    if (responseMessages.length === 0) 
        return equateResponse(responseMessages);

    const responseMessagesFrom1 = responseMessages.filter(message => message.messageFrom === 1);

    const sortedClientMessages = getClientMessagesFrom1();
    const sortedResponseMessages = sortMessages(responseMessagesFrom1);
    var noDifferences = compareMessages(sortedClientMessages, sortedResponseMessages);

    updateClientMessagesFrom1(sortedResponseMessages);
    
    if (responses === 0 && noDifferences) {
        clearMessages();
        displayResponseMessages(responseMessages);
    } else if (responses === 0 && !noDifferences) {
        const haveNewMessages = sortedResponseMessages.filter((a) => !sortedClientMessages.includes(a));
        displayResponseMessages(responseMessages, haveNewMessages.length);
    } else {
        const haveDeleteMessages = sortedClientMessages.filter((a) => !sortedResponseMessages.includes(a));
        const haveNewMessages = sortedResponseMessages.filter((a) => !sortedClientMessages.includes(a));

        if (haveDeleteMessages.length > 0) handleDeletedMessages(haveDeleteMessages);
        if (haveNewMessages.length > 0) handleNewMessages(haveNewMessages, responseMessages);
    }

    equateResponse(responseMessages)
}