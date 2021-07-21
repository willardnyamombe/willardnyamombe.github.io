window.addEventListener('load' ,()=>{

// Javascript for Footer copyright and date information
var d = new Date();
const week = document.querySelector('#weekday');
var weekday = daysOfWeek(d);
week.textContent = weekday;

const dayNum = document.getElementById('day');
dayNum.textContent = d.getDate();

var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthNum = document.getElementById('month');
monthNum.textContent = monthName[d.getMonth()];

const year = document.getElementById('year');
year.textContent = d.getFullYear();

const footer = document.querySelector("#copyrightyear");
footer.textContent = d.getFullYear();

//javascript for temple api
    const requestURL = "js/temples2.json"
    fetch(requestURL)
    .then((response)=> {
        return response.json();
    })
    .then((jsonObject)=>{
        console.log(jsonObject);
        Object.entries(jsonObject).forEach(([key,temple])=>{
        //     if(temple.state == "ID"){
                buildTempleCard(temple);
        //     }
        });
    });
});

function buildTempleCard(temple){
    console.log(temple);
    let card = document.createElement("section");
    card.classList.add("temple");
    card.innerHTML = `<h2>${temple.name}</h2>
                     <img src="${temple.imageurl}" alt="${temple.name}">
                    <p>First President: <b>${temple.presidents[0]} 1st of ${temple.presidents.length}</b></p>
                    <p>Current Presidents: <b>${temple.presidents[temple.presidents.length-1]}</b></p>`;
    document.querySelector("#temples").appendChild(card);

}
// Function that creates returns the name of the weekday
function daysOfWeek(date) {

    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return weekday[date.getDay()];
}
