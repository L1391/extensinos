//detoured websites
const socials = ["twitter.com", "instagram.com", "reddit.com", "facebook.com", "vsco.co", "tiktok.com", "www.youtube.com"];

browser.tabs.onUpdated.addListener((tabId, changeInfo, tabInfo) => {

    //detour when the new url contains detoured websites
    if (socials.some( (social) => changeInfo.url.includes(social))) {

        browser.tabs.create({
            active: true,
            url: "redirect/redirect.html"
        });

    }
}, {"properties": ["url"]});

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    var data = browser.storage.local.get("data");
    data.then(onSuccess, onError);

    //add new questionaire data to locally stored string
    function onSuccess(response) {
        if (Object.keys(response).length == 0) {
            browser.storage.local.set({"data": message});
        } else {
            browser.storage.local.set({"data":response.data+message});
        }
    }

    function onError(error) {
        console.log("Form data request failed " + error);
    }
});