var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

function testSpeech() {
    var recognition = new SpeechRecognition();

    var diagnostic = document.querySelector('.output');
    recognition.interimResults = true;

    recognition.start();

    recognition.onresult = function(event) {
        var speechResult = event.results[0][0].transcript;
        diagnostic.textContent = speechResult;
    }

    recognition.onspeechend = function() {
        recognition.stop();
    }

    recognition.onerror = function(event) {
        diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
    }
}

document.body.onclick = function() {
    testSpeech();
}
