const apiKey = "AIzaSyCZZhsTTBKsTmyhKZuD89iAUSXopM7Y2Cs";

var googleTranslate = require('google-translate')(apiKey);

var msg = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();
msg.voice = voices[0]; // Note: some voices don't support altering params
msg.voiceURI = 'native';
msg.volume = 1; // 0 to 1
msg.rate = 1; // 0.1 to 10
msg.pitch = 1; //0 to 2
msg.lang = 'ru-RU';

const translateEnReceive = function (text) {

    console.log("EN < " + text);

    // pyshell.send(translation.translatedText);

    // add(text)

    googleTranslate.translate(text, 'ru', function(err, translation) {

        console.log("RU < " + translation.translatedText);

        // add(translation.translatedText, text)

        add(text, translation.translatedText, "")

        msg.text = translation.translatedText;
        window.speechSynthesis.speak(msg);
    });
}

const translateRuSend = function (text) {

    console.log("RU > " + text);

    // add(text)

    googleTranslate.translate(text, 'en', function(err, translation) {

        console.log("EN > " + translation.translatedText);

        add(text, translation.translatedText, "user")

        pyshell.send(translation.translatedText);
    });
}