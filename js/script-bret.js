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
