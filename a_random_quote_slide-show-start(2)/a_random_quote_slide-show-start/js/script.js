/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/
let quotes = [];
let obj = {};

for(let i = 0; i < 5; i++){
  obj[i] = {};
}
// console.log(obj);


obj[0] = {
  quote:"Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",
  source:"Albert Einstein",
};
obj[1] = {
  quote:"You've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth.",
  source:"William W. Purkey",
}
obj[2] = {
  quote:"Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma — which is living with the results of other people’s thinking.",
  source:"Steve Jobs",
  citation:"Stanford Commencement address",
  year:"2005",
};
obj[3] = {
  quote:"Many of life’s failures are people who did not realize how close they were to success when they gave up.",
  source:"Thomas A. Edison",
};
obj[4] = {
  quote:"My mama always said life was like a box of chocolates. You never know what you're gonna get.",
  source:"Forrest Gump",
  year:"1994",
};

quotes.push(obj[0], obj[1], obj[2], obj[3], obj[4]);
// console.log(quotes);

/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
  //1.create a variable that generates a random number between zero and the last index in the quote array
  const randomNum = Math.floor(Math.random() * quotes.length);

  //2. Use the random number variable and bracket notation to  grab a random object from the quote array and store it in a variable
  let selectedObj = obj[randomNum];

  //3.Return the variable storing the random quote object
  return selectedObj;
}
console.log(getRandomQuote());
/***
 * `printQuote` function
***/
function printQuote(){
  let randomQuote = getRandomQuote();

  let PtoHTML1 = "<p class='quote'>" + randomQuote.quote + 
                  "</p>" + "<p class='source'>" + randomQuote.source;

  if('citation' in randomQuote){
    PtoHTML1 += "<span class='citation'>" + randomQuote.citation + "</span>";
  }
  
  if('year' in randomQuote){
    PtoHTML1 += "<span class='year'>" + randomQuote.year + "</span>" ;
  }

  PtoHTML1 += "</p>";
  
  document.getElementById('quote-box').innerHTML = PtoHTML1;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener('click',printQuote);