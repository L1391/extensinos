var index = 1;
var newData = "";

document.getElementById("yes-button").addEventListener("click", () => {
    console.log("yes");

    newData += "y";

    [...document.getElementById("upper").children].forEach(
        (child) => { child.style.display = "none";}
    );

    index++;

    //end questionaire
    if(index == 4) {
        newData +="|";
        document.getElementById("lower").style.display = "none";
        document.getElementById("closing").style.display = "block";

        //store answers with background script
        browser.runtime.sendMessage(newData);

    } else {
        document.getElementById("q" + index).style.display = "block";
    }
});

document.getElementById("no-button").addEventListener("click", () => {
    console.log("no");

    newData += "n";

    [...document.getElementById("upper").children].forEach(
        (child) => { child.style.display = "none";}
    );

    index++;
    
    //end questionaire
    if(index == 4) {
        newData +="|";
        document.getElementById("lower").style.display = "none";
        document.getElementById("closing").style.display = "block";

        //store answers with background script
        browser.runtime.sendMessage(newData);

    } else {
        document.getElementById("q" + index).style.display = "block";
    }
});