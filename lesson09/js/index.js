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

const requestURL =
  "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);// temporary checking for valid response and data parsing
    const towns = jsonObject["towns"];
    let requiredTowns = towns.filter((towns) => towns.name == 'Soda Springs' || towns.name == 'Preston' || towns.name == 'Fish Haven');// filter json file and return the specific towns needed
    console.log(requiredTowns);
    for (let i = 0; i < requiredTowns.length; i++) {
        

      let card = document.createElement("section");
      let text = document.createElement("div");

      
      let h1 = document.createElement("h1");
      let span = document.createElement("span");
      let p = document.createElement("p");
      let p1 = document.createElement("p");
      let p2 = document.createElement("p");
      let image = document.createElement("img");
      
      

      h1.textContent = requiredTowns[i].name;
      span.textContent = requiredTowns[i].motto;
      p.textContent = `Year Founded: ${requiredTowns[i].yearFounded}`;
      p1.textContent = `Population: ${requiredTowns[i].currentPopulation}`;
      p2.textContent = `Annual Rain Fall: ${requiredTowns[i].averageRainfall}`;
      image.setAttribute('src', 'images/' + requiredTowns[i].photo);
    //   image.setAttribute('alt', `${prophets[i].name} ${prophets[i].lastname} - ${prophets[i].order}`);

                text.classList.add("text");
                // if (i == 1) {
                //    h1;
                //    span;
                //    p;
                //    p1;
                //    p2;
                   
                // }


      card.appendChild(h1);
      card.appendChild(span);
      card.appendChild(p);
      card.appendChild(p1);
      card.appendChild(p2);

      card.appendChild(text);
      card.appendChild(image);
    
      document.querySelector("div.cards").appendChild(card);
    } 
  });

// const requestURL =
//   "https://byui-cit230.github.io/weather/data/towndata.json";

// fetch(requestURL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (jsonObject) {
//     console.table(jsonObject);// temporary checking for valid response and data parsing
//     const towns = jsonObject["towns"];
//     let requiredTowns = towns.filter((towns) => towns.name == 'Soda Springs' || towns.name == 'Preston' || towns.name == 'Fish Haven');// filter json file and return the specific towns needed
//     console.log(requiredTowns);
//     for (let i = 0; i < requiredTowns.length; i++) {
        

//       let card = document.createElement("section");
//   


//       let h1 = document.createElement("h1");
//       let span = document.createElement("span");
//       let p = document.createElement("p");
//       let p1 = document.createElement("p");
//       let p2 = document.createElement("p");
//       let image = document.createElement("img");
      
      

//       h1.textContent = requiredTowns[i].name;
//       span.textContent = requiredTowns[i].motto;
//       p.textContent = `Year Founded: ${requiredTowns[i].yearFounded}`;
//       p1.textContent = `Population: ${requiredTowns[i].currentPopulation}`;
//       p2.textContent = `Annual Rain Fall: ${requiredTowns[i].averageRainfall}`;
//       image.setAttribute('src', 'images/' + requiredTowns[i].photo);
//     //   image.setAttribute('alt', `${prophets[i].name} ${prophets[i].lastname} - ${prophets[i].order}`);

//       card.appendChild(h1);
//       card.appendChild(span);
//       card.appendChild(p);
//       card.appendChild(p1);
//       card.appendChild(p2);
//       card.appendChild(image);

//       document.querySelector("div.cards").appendChild(card);
//     } 
//   });

// Alternate Javascript

//   const requestURL = " https://byui-cit230.github.io/weather/data/towndata.json";
// fetch(requestURL)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(jsonObject) {
//         const towns = jsonObject["towns"];

//         let filterdtown = towns.filter(
//             (town) =>
//             town.name == "Fish Haven" ||
//             town.name == "Preston" ||
//             town.name == "Soda Springs"
//         );
//         console.log(filterdtown);
//         for (let i = 0; i < filterdtown.length; i++) {
//             let container = document.createElement("div");
//             let places = document.createElement("div");
//             let h2 = document.createElement("h2");
//             let h4 = document.createElement("h4");
//             let image = document.createElement("img");
//             let year = document.createElement("p");
//             let population = document.createElement("p");
//             let rainfall = document.createElement("p");

//             h2.textContent = filterdtown[i].name;
//             h4.textContent = filterdtown[i].motto;
//             year.textContent = filterdtown[i].yearFounded;
//             population.textContent = filterdtown[i].currentPopulation;
//             rainfall.textContent = filterdtown[i].averageRainfall;

//             container.classList.add("container");
//             places.classList.add("places");
//             if (i == 1) {
//                 h2.classList.add("reverse-right");
//                 h4.classList.add("reverse-right");
//                 population.classList.add("reverse-right");
//                 rainfall.classList.add("reverse-right");
//                 year.classList.add("reverse-right");
//                 image.classList.add("reverse-left");
//             }

//             places.appendChild(h2);
//             places.appendChild(h4);
//             places.appendChild(year);
//             places.appendChild(population);
//             places.appendChild(rainfall);
//             places.appendChild(image);
//             container.appendChild(places);

//             document.querySelector("div.container").appendChild(container);
//             image.setAttribute("src", "images/" + filterdtown[i].photo);

//             h2.innerHTML = filterdtown[i].name;
//             h4.innerHTML = filterdtown[i].motto;
//             year.innerHTML = "Year Founded: " + filterdtown[i].yearFounded;
//             population.innerHTML = "Population: " + filterdtown[i].currentPopulation;
//             rainfall.innerHTML =
//                 "Annual Rain Fall: " + filterdtown[i].averageRainfall;
//             // image.innerHTML = towns[i].photo;
//         }
//     });