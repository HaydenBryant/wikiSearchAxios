function handleClick() {
    const input = document.getElementById("input").value;

    const url = "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search=" + input + "&format=json"
    
    axios.get(url)
        .then(function (response) {
            displayResults(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
};

function displayResults(myResults) {
    
    document.getElementById("myResults").innerHTML = ' ';

    var i = 0;
    myResults[1].forEach(function(item) {
        const list2 = document.createElement("li");
        const link = document.createElement("a");
        link.innerHTML = item;
        link.setAttribute("href", myResults[3][i]);
        i++;

        const snippet = document.createElement("span");
        snippet.innerHTML = myResults[2][i];

        const br = document.createElement("br");

        list2.appendChild(link);
        list2.appendChild(br);
        list2.appendChild(snippet);

        document.getElementById("myResults").appendChild(list2);
    });

}
