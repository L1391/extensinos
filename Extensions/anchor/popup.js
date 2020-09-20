if(!localStorage.status) localStorage['status'] = 1;
if(localStorage.status == 1){
    $("#anchor--toggle input").prop("checked", true);
    $("#anchor--toggle label span").text("on");
} else {
    $("#anchor--toggle input").prop("checked", false);
    $("#anchor--toggle label span").text("off");
}
$("#anchor--toggle").mousedown(function(){
    if($("#anchor--input").is(":checked")){
        localStorage.status = 0;
        $("#anchor--toggle label span").text("off");
        chrome.tabs.reload();
    } else {
        localStorage.status = 1;
        $("#anchor--toggle label span").text("on");
        chrome.tabs.reload();
    }
});



