let card = document.querySelectorAll;
let moves = 0;
let time = 0;
let cardsMatched =0;
let cardsUnMatched =0;
let cardsClicked = [];
let cardsFlipped = false;
let shellBoard = false;
let cardShellOne, cardShellTwo

function gameReset() {
    moves = 0;
    time = 0;
    cardsMatched = 0;
    cardsUnMatches = 0;
    cardsClicked = [];
}

function cardsFlipped() {
    if (shellBoard) return; {
        if (this === cardShellOne) return;

        this.classList.add('flip')
    }
    cardShellTwo = this
    cardsMatched()
}

function cardsMatched () {
    this.cardsMatched.push(cardShellOne);
    this.cardsMatched.push(cardShellTwo);
    cardShellOne.classList.add('matched')
    cardShellTwo.classList.add('matched')
}

function cardsUnMatched () {
    this.cardsUnMatched.push(cardShellOne);
    this.cardsUnMatched.push(cardShellTwo);
    cardShellOne.classList.add('not matched')
    cardShellTwo.classList.add('not matched')
}

function cardShuffle () {
    cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
}

function cardsUnFlipped () {
     shellBoard = true;

  setTimeout(() => {
    cardShellOne.classList.remove('flip');
    cardShellTwo.classList.remove('flip');

  }, 1500);
}



 

