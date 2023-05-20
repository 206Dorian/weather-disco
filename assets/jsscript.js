var APIKey = "38728577514e54c85b8192270269130c"

var theDay = moment();
$("#date").text(theDay.format("LLL"))

function retrieve(city, fromInput =false) {
    city = city || $("#searchbar").val(); // Use the provided city name or get the value from the search bar
    console.log(city);
    $("#forecast").empty()

    // Only save to local storage if the city was retrieved from the search bar
    if (fromInput) {
        var history = JSON.parse(localStorage.getItem('history')) || [];
        if (!history.includes(city)) {
            history.push(city);
            localStorage.setItem('history', JSON.stringify(history));
    }

    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=imperial`
    appendHistory(city);

    //fetch request here
    // ...
}

function appendHistory() {
    var history = JSON.parse(localStorage.getItem('history')) || [];
    $("#history").empty() // Clear the history section

    history.forEach(function(city) {
        var searchHistory = $("<div>").text(city).addClass("card")
        console.log(searchHistory)

        // Add a click event to the searchHistory element to retrieve the city's information
        searchHistory.on("click", function() {
            retrieve(city);
        });

        $("#history").append(searchHistory)
    });
}


if (!history.includes(city)) {
    history.push(city);
    localStorage.setItem('history', JSON.stringify(history));
}

//...

    
//API call, got it to work!
function fiveDayForecast(lat, lon, city) {
    var fiveDay = $("<div>").text(fiveDay).
        addClass("aside")
    // var city = $("#searchbar").val()

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

            for (let index = 0; index < data.list.length; index += 8) {
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
                var iconImg = $("<img>").attr({ src: iconUrl })

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


$("#city-bttn").on("click", function () {
    var city = $("#searchbar").val();
    retrieve(city, true);
    $("#searchbar").val(""); // Clear the search bar
});

$("#searchbar").on("keydown", function (event) {
    if (event.key === "Enter") {
        var city = $("#searchbar").val();
        retrieve(city, true);
        $("#searchbar").val(""); // Clear the search bar
    }
});



// $("#city-bttn").on("click", retrieve)
//runs the retrieve function

