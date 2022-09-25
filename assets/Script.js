var APIKey = "38728577514e54c85b8192270269130c"

var theDay = moment();
$("#date").text(theDay.format("LLL"))
var city;

function retrieve(city) {
    var city = $("#searchbar").val()
    console.log(city);

    var queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=imperial`
    appendHistory(city)

    //fetch request here
    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)

            //when that button is clicked give me a new element i.e card, etc...with this new element put the info into it
           
            //need better path? showing undefined in console log  also how do i get an icon, is it <i> ? 
            var weather = data.weather.main
            console.log("weather condition: " + weather)
            var weatherIcon = data.weather[0].icon

            var iconUrl = `https:openweathermap.org/img/w/$%7BweatherIcon%7D.png`

            var iconImage = $("<img>")

            var temp = data.main.temp
            console.log("temperature: " + temp)

            var humidity = data.main.humidity
            console.log("humidity: " + humidity )

            var windspeed = data.wind.speed
            console.log("windspeed: " + windspeed)

            //I think I need another function or more info on this. prob a last priority honestly
            var uvindex = data.uvindex
            console.log("uv index: " + uvindex)


            var lat = data.coord.lat
            var lon = data.coord.lon 


            var daycity =$("day1").text(city).addClass("WeatherFuture")
            //GET info output to the card

            fiveDay(lat,lon)
        })
}

function appendHistory(city) {
    var searchHistory = $("<div>").text(city).addClass("card")
    console.log(searchHistory)
    $("body").append(searchHistory)

    // searchHistory.on("click", retrieve(city))

}

function fiveDay (lat, lon) {
    var APIKey2 ="948edc073eedb355fa7de815a8e82bd5"
    fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${APIKey}`)

        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
        })

       
}

//NEED QUERY PARAMETERS, LOCAL STORAGE 

//  an API call using just the city name or by using a combination of the city name, state code, and country code.


//**api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}**
// **This section lists a number of parameters, but only the following two are required:
// q: The query parameter, where we'll add the city variable.
// appid: The application id or key, where we'll add the API key variable.

$("#city-bttn").on("click", retrieve)
//runs the retrieve function

