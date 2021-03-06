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

// Footer contact with radio button approval disapproval survey

// PSUEDO CODING END //

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
var startBtn = $("#startBtn");
var timer = $("#timer");
var submitBtn = $("#submitBtn");
var score = $("#score");

// global variables
var catArray = [];
var catArrayDuplicate = [];
var cards = [];

var cardsFlippedCat = [];
var cardsFlippedIndex = [];
var cardLogo = "./img/cat_200x200.jpg";
var nyanCat = "./img/nyanAnimatedGif.gif";
var matchCount = 0;

var startGame = $("#startGame");
var introImage = $("#introImage");

var gamePlayHappening = false;

var secondsLeft = 60;

var storageScore = localStorage.getItem("score");

var timerInterval;

console.log(storageScore);

score.text(storageScore);

// functions

// "x-api-key": "b69f0faf-4c12-4714-8998-743f7fb4546e",

function startTimer() {
  secondsLeft = 60;

  timerInterval = setInterval(function () {
    secondsLeft--;
    timer.text(secondsLeft + " seconds left!");
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      // secondsLeft = 10;
      // window.confirm("Times Up!");
      console.log(secondsLeft);
      localStorage.setItem("score", secondsLeft);
      gameEnded();
    }
  }, 1000);
}

function init() {
  gamePlayHappening = true;
  storageScore = localStorage.getItem("score");
  score.text(storageScore);

  //disbale button
  startGame.attr("disabled", "disabled");

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("x-api-key", "b69f0faf-4c12-4714-8998-743f7fb4546e");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    "https://api.thecatapi.com/v1/images/search?format=json&limit=4",
    requestOptions
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data);

      //Loop over the data to generate a table, each table row will have a link to the repo url
      for (var i = 0; i < data.length; i++) {
        // Do shit to each element in array
        var catURL = data[i].url;
        catArray.push(catURL);
      }

      //duplicate array and transfer value back to original array
      catArrayDuplicate = catArray;
      catArray = $.merge(catArray, catArrayDuplicate);

      //randomize array
      catArray.sort(() => 0.5 - Math.random());
      console.log(catArray);

      cards = [
        {
          front: "./img/cat_200x200.jpg",
          back: catArray[0],
          index: "cardOne",
        },
        {
          front: "./img/cat_200x200.jpg",
          back: catArray[1],
          index: "cardTwo",
        },
        {
          front: "./img/cat_200x200.jpg",
          back: catArray[2],
          index: "cardThree",
        },
        {
          front: "./img/cat_200x200.jpg",
          back: catArray[3],
          index: "cardFour",
        },
        {
          front: "./img/cat_200x200.jpg",
          back: catArray[4],
          index: "cardFive",
        },
        {
          front: "./img/cat_200x200.jpg",
          back: catArray[5],
          index: "cardSix",
        },
        {
          front: "./img/cat_200x200.jpg",
          back: catArray[6],
          index: "cardSeven",
        },
        {
          front: "./img/cat_200x200.jpg",
          back: catArray[7],
          index: "cardEight",
        },
      ];

      // console.log(cards);

      createMemoryBoard();

      // commented out to try IMG only tags
      // image01.attr("src", catArray[0]);
      // image02.attr("src", catArray[1]);
      // image03.attr("src", catArray[2]);
      // image04.attr("src", catArray[3]);
      // image05.attr("src", catArray[4]);
      // image06.attr("src", catArray[5]);
      // image07.attr("src", catArray[6]);
      // image08.attr("src", catArray[7]);
    });
}

//IMG tag method
function createMemoryBoard() {
  console.log("createMemoryBoard() entered"); // check progress

  for (var i = 0; i < cards.length; i++) {
    var front = cards[i].front;
    var back = cards[i].back;
    var index = cards[i].index;
    var img = $("<img>");
    img
      .attr("src", cards[i].front)
      .attr("id", cards[i].index)
      .click({ param1: back, param2: index }, function (event) {
        // console.log(event.data);
        if (cardsFlippedIndex.length < 2) {
          $(this).attr("src", event.data.param1);
          console.log("param1: " + event.data.param1);
          console.log("param2: " + event.data.param2);

          cardsFlippedCat.push(event.data.param1);
          cardsFlippedIndex.push(event.data.param2);
          countFlips();
        }
      })
      .appendTo(theCards);
  }
  // for (var i = 0; i < catArray.length; i++) {
  //   var img = $("<img>");
  //   img
  //     .attr("src", catArray[i])
  //     .click(function () {
  //       console.log("clicked");
  //       $(this).attr("src", catArray[4]);
  //     })
  //     .appendTo(theCards);
  // }
}

function countFlips() {
  if (cardsFlippedCat.length === 2) {
    if (cardsFlippedIndex[0] === cardsFlippedIndex[1]) {
      console.log("same card");
      // remove second item in both arrays
      cardsFlippedIndex.length = 1;
      console.log(cardsFlippedIndex);
      cardsFlippedCat.length = 1;
      console.log(cardsFlippedCat);
    } else {
      console.log(cardsFlippedCat);
      compareFlips();
    }
  } else {
    console.log("not 2");
  }
}

function compareFlips() {
  console.log("comparing flips");
  if (cardsFlippedCat[0] === cardsFlippedCat[1]) {
    console.log("match!");
    // alert("It's a match!");
    //set attributes for outlined card
    for (var i = 0; i < cardsFlippedCat.length; i++) {
      console.log("outline card");
      console.log($(this));
      //change this to outline correct flips
      setTimeout(outlineFlips, 100);
    }
    matchCount++;
    if (matchCount === 4) {
      console.log("This game is over");
      setTimeout(gameEnded, 2000);
    }
  } else {
    console.log("not a match");
    // alert("Not a match:/");
    for (var i = 0; i < cardsFlippedCat.length; i++) {
      console.log("flip card back over");
      console.log($(this));
      //change this to flip cards back over
      setTimeout(returnFlips, 1000);
    }
    //flip both of the cards back over
  }
}

const allRanges = document.querySelectorAll(".range-wrap");
allRanges.forEach((wrap) => {
  const range = wrap.querySelector(".range");
  const bubble = wrap.querySelector(".bubble");

  range.addEventListener("input", () => {
    setBubble(range, bubble);
  });
  setBubble(range, bubble);
});

function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val;

  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}

submitBtn.click(getUserRating);

function getUserRating() {
  var range = document.getElementById("range");
  var currentVal = range.value;
  var emailInput = document.getElementById("email");
  var userEmail = emailInput.value;
  console.log(currentVal);
  localStorage.setItem(userEmail, currentVal);
}

function outlineFlips() {
  console.log("outlineFlips () entered");
  //go through array and outline both indexes in array
  for (var i = 0; i < cardsFlippedIndex.length; i++) {
    console.log(cardsFlippedIndex[i]);
    // theCards.find(cardsFlippedIndex[i]).addClass("greenOutline");
    theCards.find("#" + cardsFlippedIndex[i]).addClass("greenOutline");
  }
  if (matchCount <= 3) {
    cardsFlippedCat = [];
    cardsFlippedIndex = [];
  }
}

function returnFlips() {
  console.log("returnFlips () entered");
  //go through array and flip back over both indexes in array
  for (var i = 0; i < cardsFlippedIndex.length; i++) {
    console.log(cardsFlippedIndex[i]);
    // theCards.find(cardsFlippedIndex[i]).attr("src", "./img/cat_200x200.jpg");
    theCards.find("#" + cardsFlippedIndex[i]).attr("src", cardLogo);
  }
  cardsFlippedCat = [];
  cardsFlippedIndex = [];
}

function gameEnded() {
  theCards.children().remove();
  introImage.attr("src", nyanCat);
  gamePlayHappening = false;

  clearInterval(timerInterval);
  localStorage.setItem("score", secondsLeft);

  //disbale button
  startGame.removeAttr("disabled", "disabled");
  // $("main").attr("src", nyanCat).appendTo($(this));
}

// theCards

startGame.click(function () {
  if (gamePlayHappening === false) {
    console.log("clicked");
    introImage.attr("src", "");
    cardsFlippedIndex = [];
    theCards.children().remove();
    catArray = [];
    catArrayDuplicate = [];
    cards = [];
    cardsFlippedCat = [];
    cardsFlippedIndex = [];
    startTimer();
    matchCount = 0;
    init();
  } else {
    console.log("Game is currently being played.");
  }
});

// Template END //

// - EXAMPLES - //

// Declaring a variable - this is an example
// var studentName;

// Uses assignment operator(=) to assign a value
// var studentName = "Abdul";

// To re-assign a variable, use only the variable's name
// studentName = "Tonya";

// To access a value stored in a variable, use the variable's name
// console.log(studentName);

//To combine the message with a variable value use the concatenation operator(+)
//Logs "My name is "
// console.log("My name is ");

// Logs "My name is Tonya"
// console.log("My name is " + studentName);
