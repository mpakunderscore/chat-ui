var PythonShell = require('python-shell');

var pyshell = new PythonShell('../chatbot-rnn-master/chatbot.py');

pyshell.send("");

pyshell.on('message', function (message) {

    if (message !== undefined && message !== '') {

        message = message.replace(/>/g, "").trim();

        if (message === "Creating model...")
            return;

        if (message === "Restoring weights...") {

            viewReady();
            translateEnReceive("Ready.")
            return;
        }

        translateEnReceive(message);
    }
});

