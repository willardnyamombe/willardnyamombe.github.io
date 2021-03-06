window.addEventListener('load', () => {
    const hambutton =document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');
    
    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('responsive')},false);

        // to solve the mid sizing issue wuth responsive class on
        // window.onresize = () {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

        // you can also put lines 2,3 5,6 into your HTML under the body and inside the script tag

        // enables hamburger menu
function toggleMenu() {
    document.getElementById("navigation").classList.toggle("hide");
}
});

// weather summary

async function getWeather() {

    const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=83440&appid=953894ad13f71540f4d4ee5b185b63d7&units=imperial'; // url for the weather data api
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



// Fiveday forecast
// const requestURL = 'https://api.openweathermap.org/data/2.5/forecast?zip=83440&appid=96f881dc52b0a77480e60ae03cff87e0&units=imperial'

// fetch(requestURL)
// .then((response) => {
//     return response.json()
// })
// .then((fiveDayData) => {
//     console.table(fiveDayData)

//     // grabbing the list
//     let fiveDayList = fiveDayData.list

//     // filter the list 
//     let filteredList = fiveDayList.filter(day => day.dt_txt.includes("18:00:00"))

//     // create each days forecast
//     // loop
//     for (let i = 0; i < filteredList.length; i++) {
//         let curDay = filteredList[i]

//         let name = document.createElement("h3")
//         let temp = document.createElement("span")
//         let icon = document.createElement("img")

//         // get the whole date time string
//         let dateTimeString = curDay.dt_txt
//         // break it into date and time 
//         let dateTimeParts = dateTimeString.split(" ")
//         // grab just the date
//         let dateStringRaw = dateTimeParts[0]
//         // break the date into parts [year, month, day]
//         let dateStringParts = dateStringRaw.split('-')
//         // Create a date object with correct format new Date(year, monthIndex, day)
//         let date = new Date(dateStringParts[0], dateStringParts[1] - 1, dateStringParts[2])
//         console.log(date)
//         let dateNum = date.getDay()

//         switch (dateNum) {
//             case 0:
//                 name.innerHTML = "Sunday"
//                 break;
//             case 1:
//                 name.innerHTML = "Monday"
//                 break;
//             case 2:
//                 name.innerHTML = "Tuesday"
//                 break;
//             case 3:
//                 name.innerHTML = "Wednesday"
//                 break;
//             case 4:
//                 name.innerHTML = "Thursday"
//                 break;
//             case 5:
//                 name.innerHTML = "Friday"
//                 break;
//             case 6:
//                 name.innerHTML = "Saturday"
//                 break;
//         }

//         // set the temp
//         let main = curDay.main
//         temp.innerHTML = Math.round(main.temp_max)

//         // set the icon
//         let iconId = curDay.weather[0].icon
//         icon.src = `http://openweathermap.org/img/wn/${iconId}.png`

//         // append the children
//         let containerId = 'day' + (i + 1)
//         let container = document.getElementById(containerId)
//         container.appendChild(name)
//         container.appendChild(temp)
//         container.appendChild(icon)
//     }


// })

// alternate 5 day forecast
const apiURL2 = 'https://api.openweathermap.org/data/2.5/forecast?zip=5604473&appid=96f881dc52b0a77480e60ae03cff87e0&units=imperial'; // url for the weather data api
    fetch(apiURL2)
        .then((response) => response.json())
        .then((jsObject) => {
            console.log(jsObject);

            let fiveDayList = jsObject.list

            // let filteredList = forecastData.filter(day => day.dt_txt.includes("18:00:00"))
            let filteredList = fiveDayList.filter(day => day.dt_txt.includes("18:00:00"))

            var weekday = new Array(7);
            weekday[0] = "Sun";
            weekday[1] = "Mon";
            weekday[2] = "Tue";
            weekday[3] = "Wed";
            weekday[4] = "Thu";
            weekday[5] = "Fri";
            weekday[6] = "Sat";



            for (let i = 0; i < filteredList.length; i++) {
                console.log(i);


                console.log(filteredList[i]);

                let imgspan = document.getElementById('weatherImg' + (i + 1))
                let weatherimg = document.createElement('img');
                weatherimg.setAttribute('src', 'https://openweathermap.org/img/wn/' + filteredList[i].weather[0].icon + '@2x.png');
                imgspan.appendChild(weatherimg)

                document.getElementById('dayTemp' + (i + 1)).textContent = Math.round(filteredList[i].main.temp) + "°F";


                let day = new Date(filteredList[i].dt_txt);
                let dayofweek = day.getDay();
                document.getElementById('dayName' + (i + 1)).textContent = weekday[dayofweek];
                console.log(filteredList[i].dt_txt);
                console.log(day);

            }

        });
