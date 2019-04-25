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


    // var titles = myResults[1].map(function(item) {
    //     return "<li>" + item + "<br><a href=" + "</li>";

    // });
    // list = list.join("\n");



    // // document.getElementById("myResults").setAttribute("href", myResults[3].map());

    // document.getElementById("myResults").innerHTML = list;
    var i = 0;
    myResults[1].forEach(function(item) {
        const list2 = document.createElement("li");
        const link = document.createElement("a");
        link.innerHTML = item;
        link.setAttribute("href", myResults[3][i]);
        i++;
        
        list2.appendChild(link);

        document.getElementById("myResults").appendChild(list2);
    });

}
