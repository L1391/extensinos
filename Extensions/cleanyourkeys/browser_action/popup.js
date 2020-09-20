
var getCount = browser.storage.local.get("count");

getCount.then(onSuccess, onError);

function onSuccess(response) {
    if (Object.keys(response).length == 0) {
        document.getElementById("count_display").textContent = "Welcome! Start typing to start cleaning";
    } else {
        document.getElementById("count").textContent = response.count;
    }
}

function onError(error) {
    console.log("Request failed" + error);
    document.getElementById("count_display").textContent = "Error retrieving count";
}
