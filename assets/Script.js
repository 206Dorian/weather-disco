var APIKey = "38728577514e54c85b8192270269130c"

var theDay = moment();
$("#date").text(theDay.format("LLL"))


function retrieve() {
    var city = $("#searchbar").val()
    console.log(city);

    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey

    //fetch request here
    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
        })
//when that button is clicked give me a new element i.e card, etc...with this new element put the info into it
var searchHistory = $("<div>").text(city).addClass("card")
console.log(searchHistory)
$("body").append(searchHistory)


//GET info and put in the card

        //WHY isnt this working, when above works fine?
    // .then(function (response) {
    //     return response.json();
    // });
    // .then(function (data) {
    //     console.log(data)
    // });
}

//NEED QUERY PARAMETERS, LOCAL STORAGE 

//  an API call using just the city name or by using a combination of the city name, state code, and country code.


//**api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}**
// **This section lists a number of parameters, but only the following two are required:
// q: The query parameter, where we'll add the city variable.
// appid: The application id or key, where we'll add the API key variable.

$("#city-bttn").on("click", retrieve)
//runs the retrieve function

