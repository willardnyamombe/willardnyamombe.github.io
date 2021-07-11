// weather summary

async function getWeather() {

    const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=953894ad13f71540f4d4ee5b185b63d7&units=imperial'; // url for the weather data api
    fetch(apiURL)
        .then((response) => response.json())
        .then((jsObject) => {
            console.log(jsObject);

            document.getElementById('condition').textContent = jsObject.weather[0].main;
            document.getElementById('temp').textContent = Math.round(jsObject.main.temp_max);
            document.getElementById('windChill').textContent = calcWindChill(jsObject.main.temp_max, jsObject.wind.speed);
            document.getElementById('humidity').textContent = Math.round(jsObject.main.humidity);
            document.getElementById('windSpeed').textContent = Math.round(jsObject.wind.speed);



        })
    const calcWindChill = (temperature, speed) => {
        if (temperature <= 50 && speed > 3) {
            return Math.round(
                35.74 + (0.6215 * temperature) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * (temperature *
                    Math.pow(speed, 0.16)))) + "°F"
        } else {
            return "NA"
        }
    }

    // const displayWindChill = () => {
    //     let temperature = parseInt(document.getElementById("high").textContent);
    //     let wind = parseInt(document.getElementById("windspeed").textContent);
    //     let result = calcWindChill(temperature, wind);
    //     document.getElementById("windchill").innerHTML = result;
    // }
    // displayWindChill();
