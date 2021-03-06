# Javascript for APIs n .Json access
## **Fetch() function**
We are going to use the fetch() (Links to an external site.) method which requires at least one argument, the path to the resource, which in our case is the latter-day-prophets JSON file. fetch() then returns an asynchronous Promise (Links to an external site.) that provides a generic Response (Links to an external site.) to the request. fetch() has built in error handling. With the string data retrieved, we can run a .json() method on the Response to convert it into a JavaScript object, which is easy to work with. Let's get started on your JavaScript! The following lines of code should be written in your prophets.js file.

► Let's store the resource, the URL of the JSON file into a const variable to start.

const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
► We will use a basic fetch() method and feed it the required argument, the URL and use the .then() method that returns a Promise which response we will work with as an argument to an anonymous function. We need to extract the JSON content from the noise of the full HTTP response by using the json() method. The second .then() method is then setup for us to work with the converted response data in JavaScript object format.  Initially we will test to see if we get a valid, parsed response using a console.table() method to output the results to the console.

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
  });
For more detailed information, check on Using Fetch (Links to an external site.) on MDN web docs.
## **Store Results**
► Now we will store the results of the converted response into an array since the data source is a neatly packed array of records named "prophets". See JSON source.

```javascript
const prophets = jsonObject['prophets'];
```
## **Loop**

 As you guessed, in order to produce the output as shown in the screenshots, we need to loop through every record and process them into their own 'cards' (HTML output), one at a time. This is easily done using a for loop, something that you are familiar with as you process each element of an array. Remember? We will use the variable i as our control variable in the loop as we iterate through the prophets array.
IMPORTANT: Put this line of code directly after the console.table() line and before you close the .then() method }); .

``` javascript 
for (let i = 0; i < prophets.length; i++ ) {
```

## **createElement(), textContent(), and appendChild() methods**

Now we just build the HTML of the prophet card using the createElement(), textContent(), and appendChild() methods on the document. We will place all of these prophet 'cards' in already marked up, generic division ``<div>`` element on the page that has a class attribute value of "cards". Let's go ahead and make each card a ``<section>`` element with standard heading ``<h2>`` and paragraphs ``<p>`` for field items and an image ``<img>``. This code snippet, which resides in the for loop, adds the ``<h2>`` element only.
```javascript
let card = document.createElement('section');
let h2 = document.createElement('h2');

h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;

card.appendChild(h2);

document.querySelector('div.cards').appendChild(card);
```