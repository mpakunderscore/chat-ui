const PythonShell = require('python-shell');

const chatbot = '../chatbot-rnn-master/chatbot.py';

const pyshell = new PythonShell(chatbot);

pyshell.send("");

pyshell.on('message', function (message) {

    if (message !== undefined && message !== '') {

        message = message.replace(/>/g, "").trim();

        if (message === "Creating model...")
            return;

        if (message === "Restoring weights...") {

            viewReady();
            translateEnReceive("Ready.");
            return;
        }

        translateEnReceive(message);
    }
});

