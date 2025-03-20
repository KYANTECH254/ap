let chatOpened = false;

$('#chat-widget-container').on('click', function() {
    toggleChat();
});

$('.chaport-overlay-contents, #chat-close-img').on('click', function() {
    $('#chat-image-popup').fadeOut(250);
});

$(window).on('resize', function() {
    checkWindowSize();
});

$(document).ready(function() {
    checkWindowSize();
});

function toggleChat() {
    isChatClosed() ? openChat() : closeChat();
    checkWindowSize();
}

function isChatClosed() {
    return chatOpened === false;
}

function openChat() {
    chatOpened = true;
    $('#chat-widget-style').removeClass('chaport-collapsed').addClass('chaport-expanded');
    $('#chat-window-0').removeClass('chaport-anim-hide').addClass('chaport-anim-show');
    document.getElementById('chat-iframe').contentWindow.scrollTop();
}

function closeChat() {
    chatOpened = false;
    $('#chat-widget-style').removeClass('chaport-expanded').addClass('chaport-collapsed');
    $('#chat-window-0').removeClass('chaport-anim-show').addClass('chaport-anim-hide');
}

function checkWindowSize() {
    if ($(window).width() <= 460 && chatOpened) {
        $('body').css('overflow', 'hidden');
    } else {
        $('body').css('overflow', 'auto');
    }
}