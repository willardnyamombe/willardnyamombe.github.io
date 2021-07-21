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

// //javascript for temple api
//     const requestURL = "json/temples.json"
//     fetch(requestURL)
//     .then((response)=> {
//         return response.json();
//     })
//     .then((jsonObject)=>{
//         console.log(jsonObject);
//         Object.entries(jsonObject).forEach(([key,temple])=>{
//         //     if(temple.state == "ID"){
//                 buildTempleCard(temple);
//         //     }
//         });
//     });
// });

// function buildTempleCard(temple){
//     console.log(temple);
//     let card = document.createElement("section");
//     card.classList.add("temple");
//     card.innerHTML = `<h2>${temple.name}</h2>
//                      <img src="${temple.imageurl}" alt="${temple.name}">
//                     <p><b>Services: </b>${temple.services}</p> <br>
//                     <p><b>Address: </b>${temple.address1}</p>
//                     <p><b>Temple Closure Schedule:</b>${temple.templeClosureSchedule[2021]}</p>
//                     `;
//     document.querySelector("#temples").appendChild(card);

})
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
async function getTemples() {
    const requestURL = 'https://willardnyamombe.github.io/FinalProject/JSON/temples.json';

    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            console.log(jsonObject); // temporary checking for valid response and data parsing
            const temples = jsonObject;
            for (let i = 0; i < temples.length; i++) {
                let card = document.createElement('section');
                let grid = document.createElement('div');
                let h1 = document.createElement('h1');
                let phone = document.createElement('p');
                let address = document.createElement('p');
                let services = document.createElement('p');
                let ordinance = document.createElement('section');
                let closures = document.createElement('p');
                let image = document.createElement('img');

                h1.textContent = temples[i].name;
                phone.innerHTML += `
                <b>Phone Number</b>
                <br>
                ${temples[i].phone}`;
               
                address.innerHTML = `
                <b>Address</b>
                <br>
                ${temples[i].address1}
                <br>
                ${temples[i].city}, ${temples[i].state} ${temples[i].zip}
                `;
                const service = temples[i].services;
                services.innerHTML += `
                    <b>Services</b>
                    <br>`;
                for (let i = 0; i < service.length; i++) {
                    if (i != 0) {
                        services.innerHTML += `
                        <br>
                        `;
                    }
                    services.innerHTML += `${service[i]}`;
                }
               
                const closure = temples[i].templeClosureSchedule;
                closures.innerHTML += `
                    <b>Closures</b>
                    <br>`;
                for (let i = 0; i < closure.length; i++) {
                    closures.innerHTML += `${closure[i]}
                    <br>`;
                }
                image.setAttribute('src', temples[i].imageurl);
                image.setAttribute('alt', temples[i].name);
                image.classList.add("temple-images");
                grid.appendChild(phone);
                
                grid.appendChild(address);
                grid.appendChild(services);
                

                card.appendChild(h1);
                card.appendChild(grid);
                
                card.appendChild(closures);
                grid.appendChild(image);

                document.querySelector('div.cards').appendChild(card);
                card.classList.add("card");


            }
        });
}
window.addEventListener('load', (event) => {
    if (document.URL.includes("temples.html")) {
        getTemples();
    }
})