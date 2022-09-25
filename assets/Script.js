var APIKey = "38728577514e54c85b8192270269130c"

var theDay = moment();
$("#date").text(theDay.format("LLL"))
var city;

function retrieve(city) {
    var city = $("#searchbar").val()
    console.log(city);

    var queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=imperial`
    appendHistory(city);


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

            var weatherIcon = data.weather[0].icon

            var iconUrl =`http://openweathermap.org/img/w/${weatherIcon}.png`
            console.log(iconUrl)


            console.log("windspeed: " + windspeed)

            // I think we can delete this now
            // var uvindex = data.uvindex
            // console.log("uv index: " + uvindex)

            var lat = data.coord.lat
            var lon = data.coord.lon 

            var daycity =$("day1").text(city).addClass("WeatherFuture")
            //GET info output to the card

            fiveDayForecast(lat,lon)
        })
}

// LOCAL STORAGE, need cities to stay
//Where does my FOR loop go? 
//Also how can I get the search button to work with the click of the return button?

function appendHistory(city) {
    var searchHistory = $("<div>").text(city).addClass("card")
    console.log(searchHistory)
    $("#history").append(searchHistory)

    

}
//API call, got it to work!
function fiveDayForecast (lat, lon) {
    var fiveDay = $("<div>").text(fiveDay).
    addClass("aside")
    var city = $("#searchbar").val()

    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${APIKey}`)

        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
        })
 

            var currentDay = $("<div>").text(city)
            console.log(currentDay)
            $("#currentDay").append(currentDay)


//**api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}**
// **This section lists a number of parameters, but only the following two are required:
// q: The query parameter, where we'll add the city variable.
// appid: The application id or key, where we'll add the API key variable.

$("#city-bttn").on("click", retrieve)
//runs the retrieve function

