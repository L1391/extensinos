var getData = browser.storage.local.get("data");

getData.then(onSuccess, onError);

function onSuccess(response) {

    if (Object.keys(response).length == 0) {

        document.getElementById("ranking").innerText = "No data yet (maybe you'll keep it that way)";

    } else {
        
        //get unique questionaire answer combinations only
        let set = new Set(response.data.split("|"));

        //array of answer data to be sorted
        let ranking = [];
        let total = 0;

        for(const perm of set) {
            if (perm != "") {
                //get occurances of specific combination and add to array
                var count = response.data.split(perm).length - 1;
                ranking.push({"name": perm, "count": count});
    
                total += count;
            }
        }

        //sort array by count in descending order
        ranking.sort((a,b) => b.count - a.count);

        //create a list of 5 or less top combinations
        for (var i = 0; i < ranking.length && i < 5; i++) {
            let row = document.createElement("div");
            row.className = "row";

            let number = document.createElement("div");
            number.className = "number";
            number.innerText = i + 1;

            let name = document.createElement("div");
            name.className = "name";
            name.innerText = ranking[i].name;

            let percent = document.createElement("div");
            percent.className = "percent";
            percent.innerText = (ranking[i].count/total).toFixed(2)*100 + "%";

            row.append(number, name, percent);
            document.getElementById("ranking").append(row);
        
        }

    }
}

function onError(error) {
    console.log("Storage request failed" + error);
    document.getElementById("ranking").textContent = "Error retrieving data";
}
