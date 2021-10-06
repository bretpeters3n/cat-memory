$(document).ready(async () => {
  const apiData = await getCatImages(5);
  const cardArray = [...apiData, ...apiData];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = $(".grid");
  const resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  //board

  const rowCount = 2;
  const colCount = 5;

  function createBoard() {
    //              | should Create row?
    // rowNumber: 0 | true        | rowNumber < rowCount | true
    // rowNumber: 1 | true        |                      | true
    // rowNumber: 2 | false       |                      | false
    // .

    let i = 0;
    for (let rowNumber = 0; rowNumber < rowCount; rowNumber++) {
      let row = $("<div>", {
        class: "row",
      });

      grid.append(row);

      for (let colNumber = 0; colNumber < colCount; colNumber++) {
        let col = $("<div>", {
          class: "col",
        });
        let card = $("<div>", {
          class: "card",
        });
        let image = $("<img>", {
          src: "./img/playingcard.jpg",
          "data-id": i,
          on: { click: flipCard },
        });
        row.append(col);
        col.append(card);
        card.append(image);

        i++;
      }
    }

    // for (let i = 0; i < cardArray.length; i++) {
    //   let card = $("<img>", {
    //     src: "./img/devJordan.jpg",
    //     "data-id": i,
    //     on: { click: flipCard },
    //   });
    //   //   var card = document.createElement("img");
    //   //   card.setAttribute("src", "./img/devJordan.jpg");
    //   //   card.setAttribute("data-id", i);
    //   //   card.addEventListener("click", flipCard);
    //   grid.append(card);
    // }
  }

  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert("Match!");
      cards[optionOneId].setAttribute("src", "./img/whitebox.jpg");
      cards[optionTwoId].setAttribute("src", "./img/whitebox.jpg");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "./img/playingCard.jpg");
      cards[optionTwoId].setAttribute("src", "./img/playingCard.jpg");
      alert("Nope");
    }
    cardsChosen = [];
    cardsChosenId = [];
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
      setTimeout(checkForMatch, 1000);
    }
  }

  createBoard();
});
