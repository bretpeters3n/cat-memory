// PSUEDO CODING START //

// Navigation with 'game' 'adoption' 'contact' 'about'

// Create layout (wireframe) for cards on page
// make placeholder DIV in html for cards (fill these with event delegation)
// Add start button to start game
// Start with cards fliped over (no cats)
// One game - use time left from timer to give their score
// place timer in top right
//

// initial page load
// page with nav, title, desc, start button, and flipped over cards
// on press START, flip cards over to reveal for 2 seconds, then flip back over.
// Start timer now.
// Allow user to click on two cards and flip them
// Compare these two cards (for similar attributes)
// If they match, place green border on matched cards
// If they don't, flip them back over
// If all are matched, stop timer and use time as score.
// If timer runs out, bring them to results page with score 0.

// card logic
// Every click runs through a function. This function will:
// flip a card that has been clicked on
// once two cards have been flipped it will compare the flips.
// upon match, outline green, and keep playing
// upon mismatch, flip card back over
// Start with array full of 8 (including duplicates) cat images.
// choose a random url and place it in spot 1. Repeat until all 8 are filled.
// use array of objects to store images with attributes for matching.
// event delegation can handle making these caerds interactive (click events)
// each card can be constructed as 2 layers. Layer 1 is side with logo. Layer 2 is side with cat.
// when clicked the second layer is revealed.
// funtion that keeps track of card flips, and stops for comparison at 2 (reset this on matches)
// use an attribute to state whether the card can still be interacted with or not.
// attributes to use:
// matched/unmatched
// similar cards will share attribute (ex: match1) if these attributes match, success.
//

// Final score page with user score and place to enter initials.

document.addEventListener("DOMcontentLoaded", () => {
  const CardArray = [
    {
      name: "cat1",
      img: "./img/cat.jpg",
    },
    {
      name: "cat1",
      img: "./img/cat.jpg",
    },
    {
      name: "cat2",
      img: "./img/cat.jpg",
    },
    {
      name: "cat2",
      img: "./img/cat.jpg",
    },
    {
      name: "cat3",
      img: "./img/cat.jpg",
    },
    {
      name: "cat3",
      img: "./img/cat.jpg",
    },
    {
      name: "cat4",
      img: "./img/cat.jpg",
    },
    {
      name: "cat4",
      img: "./img/cat.jpg",
    },
    {
      name: "cat5",
      img: "./img/cat.jpg",
    },
    {
      name: "cat5",
      img: "./img/cat.jpg",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  //board

  createBoard();
  for (let i = 0; i < CardArray.length; i++) {
    var card = document.createElement("img");
    card.setAttribute("src", ".img/devJordan1.jpg");
    card.setAttribute("data-id", i);
    // card.addEventListener('click', flipcard)
    grid.appendChild(card);
  }

  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenID[0];
    const optionTwoId = cardsChosen[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert("Match!");
      cards[optionOneId].setAttribute("src", "./img/devJordan1.jpg");
      cards[optionTwoId].setAttribute("src", "./img.devJordan1.jpg");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", ".img/devJordan.jpg");
      cars[optionTwoId].setAttribute("src", "./img/devJordan.jpg");
      alert("Nope");
    }
    cardsChosen = [];
    cardsChosenID = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Yup";
    }
  }

  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }
});

// selectors
var theCards = $("#theCards");
var image01 = $("#card-img-01");
var image02 = $("#card-img-02");
var image03 = $("#card-img-03");
var image04 = $("#card-img-04");
var image05 = $("#card-img-05");
var image06 = $("#card-img-06");
var image07 = $("#card-img-07");
var image08 = $("#card-img-08");
var image09 = $("#card-img-09");
var image10 = $("#card-img-10");

// global variables
var myName = "Bret";

// functions
function doSomethign() {}

// "x-api-key": "b69f0faf-4c12-4714-8998-743f7fb4546e",

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("x-api-key", "b69f0faf-4c12-4714-8998-743f7fb4546e");

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

fetch(
  "https://api.thecatapi.com/v1/images/search?format=json&limit=10",
  requestOptions
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    //assign 2 cat URLs to a variable an then array
    var catArray = [];

    //Loop over the data to generate a table, each table row will have a link to the repo url
    for (var i = 0; i < data.length; i++) {
      // Do shit to each element in array
      var catURL = data[i].url;
      catArray.push(catURL);
    }

    console.log(catArray);

    // image01.remove();
    image01.attr("src", catArray[0]);
    image02.attr("src", catArray[1]);
    image03.attr("src", catArray[2]);
    image04.attr("src", catArray[3]);
    image05.attr("src", catArray[4]);
    image06.attr("src", catArray[5]);
    image07.attr("src", catArray[6]);
    image08.attr("src", catArray[7]);
    image09.attr("src", catArray[8]);
    image10.attr("src", catArray[9]);
  });

// Template END //

// - EXAMPLES - //

// Declaring a variable - this is an example
var studentName;

// Uses assignment operator(=) to assign a value
var studentName = "Abdul";

// To re-assign a variable, use only the variable's name
studentName = "Tonya";

// To access a value stored in a variable, use the variable's name
console.log(studentName);

//To combine the message with a variable value use the concatenation operator(+)
//Logs "My name is "
console.log("My name is ");

// Logs "My name is Tonya"
console.log("My name is " + studentName);
