var lastMessages = [];
var deletedMessages = 0;

const messagesBlock = document.querySelector("#chat-messages-block");
const messages = document.querySelector("#chat-messages-list");
const input = document.querySelector("#chat-message-input");



// HANDLERS

// close chat
$('#chat-container-header').on('click', function() {
    parent.toggleChat();
});

// input
$('#chat-message-input').keyup(function() {
    if ($(this).val() != '') {
        $('#chaport-input-wrapper').removeClass('input-empty').addClass('input-not-empty');
    } else {
        $('#chaport-input-wrapper').removeClass('input-not-empty').addClass('input-empty');
    }
});

// send message submit
$('#chat-message-input').keypress(function(e) {
    if (e.which == 13) sendMessage();
});

// send message click
$('#chaport-send-button').click(function() {
    sendMessage();
});

// input file click
$('#chat-file-button').click(function() {
    document.getElementById('chat-input-file').click();
});

// read file
$('#chat-input-file').change(function(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
        sendPhoto(reader.result);
    };
    reader.onerror = (error) => {
        console.log(error);
    };
});



// OTHERS

// unix time
function unixTime() {
    return Math.floor(new Date().getTime() / 1000);
}

// is base64
function isBase64(str) {
    if (str.includes("data:image") && str.includes(";base64,")) return true;
    return false;
}

// scroll
function scrollTop() {
    messagesBlock.scrollTop = messagesBlock.scrollHeight;
}

// send msg text
async function sendMessage() {
    var message = input.value.replace(/\s+/g, " ").trim();
    if (message.length < 1) return;

    input.value = "";
    input.blur();
    $('#chaport-input-wrapper').removeClass('input-not-empty').addClass('input-empty');

    addMessage(0, message);
    scrollTop();

    await axios.post("/api/chat/sendMessage", {
        adId: adId,
        supportToken: supportToken,
        message: message,
    });
};

// send msg photo
async function sendPhoto(result) {
    addMessage(0, result);
    scrollTop();

    await axios.post("/api/chat/sendMessage", {
        adId: adId,
        supportToken: supportToken,
        message: result,
    });
}

// add message
function addMessage(side, message) {
    if (side === 1) {
        if(isBase64(message)) {            
            messages.innerHTML +=
                `<div class="message-group-wrapper message-wrapper file-transfer-wrapper interlocutor-message-wrapper image-transfer-wrapper">
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
                </div>`;
        } else {
            messages.innerHTML +=
                `<div class="message-group-wrapper">
                    <div class="message-wrapper interlocutor-message-wrapper ">
                        <div class="message-text-photo-wrapper">
                            <div class="message">
                                <div class="message-body">
                                    <p>${message}</p>
                                </div>
                            </div>
                            <div class="operator-photo has-photo ">
                                <img alt="${chatTitle}" title="${chatTitle}" src="${chatAvatarPath}">
                            </div>
                        </div>
                    </div>
                </div>`;
        }
    } else {
        if(isBase64(message)) {
            messages.innerHTML +=
                `<div class="message-group-wrapper message-wrapper file-transfer-wrapper your-message-wrapper image-transfer-wrapper">
                    <div class="message-text-photo-wrapper">
                        <div class="message">
                            <div class="message-body">
                                <img src="${message}" alt="${unixTime()}" class="zoom-in">
                            </div>
                            <div class="message-status message-status-read message-status-hidden"></div>
                        </div>
                    </div>
                </div>`;
        } else {
            messages.innerHTML +=
                `<div class="message-group-wrapper">
                    <div class="message-wrapper your-message-wrapper ">
                        <div class="message-text-photo-wrapper">
                            <div class="message">
                                <div class="message-body">
                                    <p>${message}</p>
                                </div>
                                <div class="message-status message-status-read"></div>
                            </div>
                        </div>
                    </div>
                </div>`;
        }
    }
}

const popupStyle = () => `
    height: 100%;
    width: 100%;
    background-color: rgba(255,255,255,0.9);
    justify-content: center;
    align-items: center;
    z-index: 2147483648;
    position: fixed;
    display: flex;
    left: 0;
    top: 0;
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
    const closeBtn = document.createElement("p");
    const popup = document.createElement("div");
    const imageContainer = document.createElement("div");

    imageContainer.style = "display: flex; max-height: 85vh;";

    image.style =
        "max-width: 90%;max-height: 100%; margin: 0 auto; object-fit: contain;";

    popup.style = popupStyle();

    image.setAttribute("src", element.src);

    closeBtn.textContent = "×";
    closeBtn.style = closeBtnStyle;
    
    closeBtn.onclick = () => {
        popup.remove();
    };

    popup.onclick = () => {
        popup.remove();
    };

    container.append(popup);
    popup.append(closeBtn);
    imageContainer.append(image);
    popup.append(imageContainer);
};

// init image listeners
const initImageListeners = () => {
    const images = document.querySelectorAll("#chat-messages-list .zoom-in");
    images.forEach((img) => (img.onclick = (event) => createPopup(event.target)));
};

// init messages
function initMessages(data) {
    var messagesFrom1 = data.messages.filter(v => v.messageFrom === 1);

    messages.innerHTML = "";
    data.messages.forEach((v) =>
        addMessage(v.messageFrom, v.message)
    );
    initImageListeners();
    
    if (messagesFrom1.length > lastMessages.length) {
        lastMessages = messagesFrom1;

        if (parent.isChatClosed()) parent.openChat();
        scrollTop();
    }
}

// update messages
async function updateMessages() {
    await axios.post("/api/chat", {
        adId: adId,
        supportToken: supportToken,
        online: !document.hidden
    })
    .then((response) => {
        initMessages(response.data);
    })
    .catch((err) => err)
    .finally(() => setTimeout(updateMessages, 3000));
}

updateMessages();