window.addEventListener('keydown', (e) => {
    console.log("keydown");
    var keydown = browser.runtime.sendMessage({"action":"increment"});

    keydown.then(onSuccess, onError);

    function onSuccess(response) {
        console.log("Key down processed");
    }
    
    function onError(error) {
        console.log("Request failed" + error);
    }
    
});


