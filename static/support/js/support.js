var opened = 0;
var you = $('#you').val();
var moderator = $('#moderator').val();

$(document).ready(function() {
    var chatContainer = $("#myForm");
  
    chatContainer.on("mouseenter", function() {
      disableScroll();
    });
  
    chatContainer.on("mouseleave", function() {
      enableScroll();
    });
  
    chatContainer.on("touchstart", function() {
      disableScroll();
    });
  
    chatContainer.on("touchend", function() {
      enableScroll();
    });
  
    function disableScroll() {
      $("body").css("overflow", "hidden");
    }
  
    function enableScroll() {
      $("body").css("overflow", "");
    }
  });

function openForm() {
    opened = 1;
    // chat_update();
    // $("#myForm").show();
    $("#myForm").addClass('big-chat-opened')
    down()
    $("#open-support").fadeOut(250);
}

function closeForm() {
    opened = 0;
    // $("#myForm").hide();
    $('.open-new-chat-btn').removeClass('chat-hidden');
    $("#myForm").removeClass('big-chat-opened');
    $("body").css("overflow", "");

}

$('#message-text').keyup(function() {
    if ($(this).val() != '') {
        $('.chat-send-btn').removeClass('send-disable')
    } else {
        $('.chat-send-btn').addClass('send-disable')
    }
})

// $('#myForm').mouseup(function(e) {
//     var div = $(".emoji-box");
//     if (!div.is(e.target)
//         &&
//         div.has(e.target).length === 0) {
//         $(".emoji-variants").fadeOut()
//         $('.open_emoji').removeClass('active-chat-btn')
//     }
// });

$('.single_emoji').click(function() {
    $('#message-text').val($('#message-text').val() + $(this).text())
    $('.chat-send-btn').removeClass('send-disable')
    $('.open_emoji').removeClass('active-chat-btn')
    $(".emoji-variants").fadeOut()
})

$('.open_emoji').click(function() {
    $('.emoji-variants').fadeToggle()
    $('.open_emoji').toggleClass('active-chat-btn')
})

$('.open-new-chat-btn').hover(function() {
    $('.chat-dots svg').addClass('chat-animation')
    $('.chat-dots').css('opacity', '1')
})

$('.open-new-chat-btn').mouseleave(function() {
    // $('.chat-dots-back').css('fill','#705BF5')
    $('.chat-dots svg').removeClass('chat-animation')
    $('.chat-dots').css('opacity', '0')
})

$('.open-new-chat-btn').click(function() {
    $(this).addClass('chat-hidden')
})

const popupStyle = () => `
    height: 100%;
    width: 100%;
    background-color: rgba(255,255,255,0.9);
    justify-content: center;
    align-items: center;
    z-index: 2147483648;
    border-radius: 12px;
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

const messages = document.getElementById("messages"),
    input = document.querySelector("#message-text");

var lastMessages = [];
var deletedMessages = 0;

// SCROLL TOP

function scrollTop() {
    document.querySelector(".form-content").scrollTop = 
        document.querySelector(".form-content").scrollHeight;
}


// SEND PHOTO

document.querySelector(".input-file").addEventListener("click", () => {
    document.getElementById("input-file").click();
});

document
    .getElementById("input-file")
    .addEventListener("change", (e) => {
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

function sendPhoto(result) {
    const photo = result;

    addMessage(0, photo, Date.now() / 1000)
    scrollTop();

    axios.post("/api/chat/sendMessage", {
        adId: adId,
        supportToken: supportToken,
        message: photo,
    });

    scrollTop();
}


// SEND MESSAGE

document.querySelector(".form-chat-container").addEventListener("submit", (e) => {
    e.preventDefault();
    sendMessage();
});

function sendMessage() {
    var message = input.value.replace(/\s+/g, " ").trim();

    if (message.length < 1) return;
    
    addMessage(0, message, Date.now() / 1000)
    scrollTop();
    $('.chat-send-btn').addClass('send-disable')
    input.value = "";

    axios
        .post("/api/chat/sendMessage", {
            adId: adId,
            supportToken: supportToken,
            message: message,
        })
}


// ADD MESSAGE

function addMessage(side, message, time) {
    if (side === 1) {
        if (message.includes("data:image")) {
            message = `<img style="margin-left: 15px;max-width: 80%;max-height: 80%;margin-bottom: 15px;margin-right: 15px; border-radius: unset;" src="${message}" />`;
        }
        
        messages.innerHTML +=
        `<div class="message message-received">
            <div class="message-header">
                <img class="user-avatar" src="/static/support/images/chat_support_icon.jpg">
                <div class="message-content">
                    <div class="message-sender">${moderator}</div>
                    <div class="message-timestamp">${fromUnixToTime(time)}</div>
                </div>
            </div>
            <div class="message-text">
                ${message}
            </div>
        </div>`
        
        } else {
        if (message.includes("data:image")) {
            message = `<img style="margin-left: 15px;max-width: 80%;max-height: 80%;margin-bottom: 15px;margin-right: 15px; border-radius: unset;" src="${message}" />`;
        }
        
        messages.innerHTML +=
        `<div class="message">
            <div class="message-header">
                <img class="user-avatar" src="/static/support/images/chat_user_icon.png">
                <div class="message-content">
                    <div class="message-sender">${you}</div>
                    <div class="message-timestamp">${fromUnixToTime(time)}</div>
                </div>
            </div>
            <div class="message-text">
                ${message}
            </div>
        </div>`;
    }
}


// CONVERT FROM UNIX TO TIME

function fromUnixToTime(unixTime) {
    var date = new Date(unixTime * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var formattedTime = hours + ':' + minutes.substr(-2);
    
    return formattedTime;
}


// CREATE POPUP

const createPopup = (element) => {
    const container = document.querySelector(".form-content");

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


// INIT IMAGE

const initImageListeners = () => {
    const images = document.querySelectorAll("#messages img");

    images.forEach((img) => (img.onclick = (event) => createPopup(event.target)));
};


// PLAY AUDIO

function playAudio() {
    var myAudio = new Audio;
    myAudio.src = "/static/audio/new_message.mp3";
    myAudio.play();
}


// UPDATE MESSAGES

function updateMessages(without_sound = false) {
    axios.post("/api/chat", {
        adId: adId,
        supportToken: supportToken,
        online: !document.hidden
    })
    .then((response) => {
        var have_new_messages = response.data.messages.filter(
            (a) => !lastMessages.find((b) => a.id == b.id)
        );
        
        var have_delete_messages = lastMessages.filter(
            (a) => !response.data.messages.find((b) => a.id == b.id)
        );

        lastMessages = response.data.messages;
        
        if (have_new_messages.length >= 1) {
            if (!without_sound)
                have_new_messages.map((v) => v.messageFrom == 1);

            messages.innerHTML = "";
            response.data.messages.forEach((v) =>
                addMessage(v.messageFrom, v.message, v.createdAt)
            );
            
            document.querySelector('.open-new-chat-btn').classList.add('chat-hidden');
            document.querySelector('.form-popup').classList.add('big-chat-opened');

            scrollTop();
            initImageListeners();
        }

        if (have_delete_messages.length >= 1) {
            messages.innerHTML = "";
            response.data.messages.forEach((v) =>
                addMessage(v.messageFrom, v.message, v.createdAt)
            );

            scrollTop();
            initImageListeners();
        }
        
        
    })
    .catch((err) => err)
    .finally(() => setTimeout(updateMessages, 3000));
}

updateMessages(true);