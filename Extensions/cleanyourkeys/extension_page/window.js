document.addEventListener("click", (e) => {
    if (e.target.id == "reset_button") {
        var reset = browser.runtime.sendMessage({"action":"reset"});

        reset.then(onSuccess, onError);
    
        function onSuccess(response) {
            console.log("Counter reset");
        }
        
        function onError(error) {
            console.log("Request failed" + error);
        }
    }
})