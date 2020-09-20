browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action == "increment") {

        var count = browser.storage.local.get("count");
        count.then(onSuccess, onError);

        function onSuccess(response) {
            if (Object.keys(response).length == 0) {
                browser.storage.local.set({"count": 1});
            } else {
                if (response.count > 5000) {

                    let createData = {
                        type: "detached_panel",
                        url: "/extension_page/window.html",
                        width: 700,
                        height: 300
                    };
        
                    let popup = browser.windows.create(createData);
        
                } else {
                   browser.storage.local.set({"count":response.count+1});
                }
            }
        }

        function onError(error) {
            console.log("Request failed" + error);
        }

    } else if (message.action == "reset") {

        browser.storage.local.set({"count": 0});

        let winId = browser.windows.WINDOW_ID_CURRENT;
        browser.windows.remove(winId);

    } 
});

