// let daynames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
// let months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December"
// ];

//// I can use the above code if I need to specify the Week days and months as strings
//// I can use 'long' or 'short' for string name eg Tue or Tuesday

let d = new Date();
// let dayName = daynames[d.getDay()];
// let monthName = months[d.getMonth()];
let dayName = d.getDay();
let monthName = d.getMonth();
let year = d.getFullYear();
// let fulldate = dayName + ", " + monthName + " " + d.getDate() +", " + year;
let fulldate = monthName + "/" + d.getDate() +"/" + year + " " + d.getHours() +
":"+ d.getMinutes() +":"+ d.getSeconds();

document.getElementById("currentdate").textContent = fulldate;
document.getElementById("year").textContent = year;


try {
    let options = {
        weekday: "long",//'long' > Tuesday or January, 'short' > Tue or Feb
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    document.getElementById(
        "currentdate2"
    ).textContent = new Date().toLocaleDateString("en-US", options);
} catch (e) {
  alert("Error with code or your browser does not support Locale");
    }

