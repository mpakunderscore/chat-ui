var settings = {
    continuous:true, // Don't stop never because i have https connection
    onResult:function(text){
        // text = the recognized text
        console.log(text);
    },
    onStart:function(){
        console.log("Dictation started by the user");
    },
    onEnd:function(){
        alert("Dictation stopped by the user");
    }
};

var UserDictation = artyom.newDictation(settings);

function startRecognition(){
    UserDictation.start();
}

function stopRecognition(){
    UserDictation.stop();
}