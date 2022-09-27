var APIKey = "38728577514e54c85b8192270269130c"

var theDay = moment();
$("#date").text(theDay.format("LLL"))
var city;

function retrieve(city) {
    var city = $("#searchbar").val()
    console.log(city);

    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=imperial`
    appendHistory(city);

    //fetch request here
    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)

            var lon = data.coord.lon
            var lat = data.coord.lat


            var daycity = $("day1").text(city).addClass("WeatherFuture")
            //GET info output to the card

            fiveDayForecast(lat, lon)
            console.log(lat)
            console.log(lon)
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
function fiveDayForecast(lat, lon) {
    var fiveDay = $("<div>").text(fiveDay).
        addClass("aside")
    var city = $("#searchbar").val()

    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${APIKey}`)

        .then(function (response) {
            return response.json();
        })

        .then(function (data) {
            console.log(data)

            var currentDay = $("<div>").text(city)
            console.log(currentDay)
            $("#currentDay").append(currentDay)
            console.log(city)

            //current day
            var temperature = data.list[0].main.temp
            var humidity = data.list[0].main.humidity
            var windspeed = data.list[0].wind.speed
            var weatherIcon = data.list[0].weather[0].icon
            var iconUrl = `https://openweathermap.org/img/w/${weatherIcon}.png`
            console.log(iconUrl)

            var currentTemp = $("<p>").append("temperature : ", temperature)
            var currentHumidity = $("<p>").append("Humidity : ", humidity)
            var currentWindspeed = $("<p>").append("Windspeed : ", windspeed)
            var iconImg = $("<img>").attr({ src: iconUrl })
            console.log(windspeed)
            console.log(currentWindspeed)

            $("#currentDay").empty();
            $("#currentDay").append(city)
            $("#currentDay").append(currentTemp)
            $("#currentDay").append(currentHumidity)
            $("#currentDay").append(currentWindspeed)
            $("#currentDay").append(iconImg)

            //Da one
            var temperature1 = data.list[1].main.temp
            var humidity1 = data.list[1].main.humidity
            var windspeed1 = data.list[1].wind.speed
            var weatherIcon1 = data.list[1].weather[0].icon
            var iconUrl1 = `http://openweathermap.org/img/w/${weatherIcon1}.png`
            console.log(iconUrl)

            var currentTemp1 = $("<p>").append("temperature : ", temperature1)
            var currentHumidity1 = $("<p>").append("Humidity : ", humidity1)
            var currentWindspeed1 = $("<p>").append("Windspeed : ", windspeed1)
            var iconImg1 = $("<img>").attr({ src: iconUrl1 })


            $("#daytwo").empty();
            $("#daytwo").append(city)
            $("#daytwo").append(currentTemp1)
            $("#daytwo").append(currentHumidity1)
            $("#daytwo").append(currentWindspeed1)
            $("#daytwo").append(iconImg1)

            //Day Two 
            var temperature2 = data.list[2].main.temp
            var humidity2 = data.list[2].main.humidity
            var windspeed2 = data.list[2].wind.speed
            var weatherIcon2 = data.list[2].weather[0].icon
            var iconUrl2 = `http://openweathermap.org/img/w/${weatherIcon2}.png`
            console.log(iconUrl)

            var currentTemp2 = $("<p>").append("temperature : ", temperature2)
            var currentHumidity2 = $("<p>").append("Humidity : ", humidity2)
            var currentWindspeed2 = $("<p>").append("Windspeed : ", windspeed2)
            var iconImg2 = $("<img>").attr({ src: iconUrl2 })
            console.log(windspeed2)
            console.log(currentWindspeed2)

            $("#daythree").empty();
            $("#daythree").append(city)
            $("#daythree").append(currentTemp2)
            $("#daythree").append(currentHumidity2)
            $("#daythree").append(currentWindspeed2)
            $("#daythree").append(iconImg2)

            //Day Three 
            var temperature3 = data.list[3].main.temp
            var humidity3 = data.list[3].main.humidity
            var windspeed3 = data.list[3].wind.speed
            var weatherIcon3 = data.list[3].weather[0].icon
            var iconUrl3 = `http://openweathermap.org/img/w/${weatherIcon3}.png`
            console.log(iconUrl)

            var currentTemp3 = $("<p>").append("temperature : ", temperature3)
            var currentHumidity3 = $("<p>").append("Humidity : ", humidity3)
            var currentWindspeed3 = $("<p>").append("Windspeed : ", windspeed3)
            var iconImg3 = $("<img>").attr({ src: iconUrl3 })
            console.log(windspeed3)
            console.log(currentWindspeed3)

            $("#dayfour").empty();
            $("#dayfour").append(city)
            $("#dayfour").append(currentTemp3)
            $("#dayfour").append(currentHumidity3)
            $("#dayfour").append(currentWindspeed3)
            $("#dayfour").append(iconImg3)


            //Day four 
            var temperature4 = data.list[4].main.temp
            var humidity4 = data.list[4].main.humidity
            var windspeed4 = data.list[4].wind.speed
            var weatherIcon4 = data.list[4].weather[0].icon
            var iconUrl4 = `http://openweathermap.org/img/w/${weatherIcon4}.png`
            console.log(iconUrl)

            var currentTemp4 = $("<p>").append("temperature : ", temperature4)
            var currentHumidity4 = $("<p>").append("Humidity : ", humidity4)
            var currentWindspeed4 = $("<p>").append("Windspeed : ", windspeed4)
            var iconImg4 = $("<img>").attr({ src: iconUrl4 })
            console.log(windspeed4)
            console.log(currentWindspeed4)

            $("#dayfive").empty();
            $("#dayfive").append(city)
            $("#dayfive").append(currentTemp4)
            $("#dayfive").append(currentHumidity4)
            $("#dayfive").append(currentWindspeed4)
            $("#dayfive").append(iconImg4)

        })
}


//**api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}**
// **This section lists a number of parameters, but only the following two are required:
// q: The query parameter, where we'll add the city variable.
// appid: The application id or key, where we'll add the API key variable.

$("#city-bttn").on("click", retrieve)
//runs the retrieve function

