var APIKey = "38728577514e54c85b8192270269130c"

var theDay = moment();
$("#date").text(theDay.format("LLL"))

function retrieve(city) {
    var city = $("#searchbar").val()
    console.log(city);
$("#forecast").empty()
$("#searchbar").val("");



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

    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${APIKey}`)

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

            for (let index = 0; index < data.list.length; index+=8) {
            var div = $("<div>")  
            var temperature = data.list[index].main.temp
            var humidity = data.list[index].main.humidity
            var windspeed = data.list[index].wind.speed
            var weatherIcon = data.list[index].weather[0].icon
            var iconUrl = `https://openweathermap.org/img/w/${weatherIcon}.png`
            console.log(iconUrl)

            var currentTemp = $("<p>").append("temperature : ", temperature)
            var currentHumidity = $("<p>").append("Humidity : ", humidity)
            var currentWindspeed = $("<p>").append("Windspeed : ", windspeed)
            var iconImg = $("<img>").attr({ src: iconUrl})
        
            div.append(city)
            div.append(currentTemp)
            div.append(currentHumidity)
            div.append(currentWindspeed)
            div.append(iconImg)
            div.addClass("futureday")
            $("#forecast").append(div)
            }
        
        })
}


$("#city-bttn").on("click", function() {
    var city = $("#searchbar").val();
    retrieve(city);
    $("#searchbar").val(""); // Clear the search bar
  });

  $("#searchbar").on("keydown", function (event) {
    if (event.key === "Enter") {
      var city = $("#searchbar").val();
      retrieve(city);
      $("#searchbar").val(""); // Clear the search bar
    }
  });

// $("#city-bttn").on("click", retrieve)
//runs the retrieve function

