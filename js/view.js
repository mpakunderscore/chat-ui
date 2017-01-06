let input = $("#input").append("");

$(document).keyup(function (e) {

    if (input.is(":focus") && (e.keyCode == 13) && input.val() !== "" ) {

        translateRuSend(input.val());
        input.val("");
    }
});

const add = function (text, en, author) {

    $('#conversation').prepend("<div class='message " + author + "'>" +
                               "<div class='text'>" + redact(text) + "</div>" +
                               "<div class='en'>" + redact(en) + "</div>" +
                               "</div>")
}

function redact(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function viewReady() {
    input.attr("placeholder", "Say something..");
    input.focus();
}