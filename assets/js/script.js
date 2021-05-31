/*jshint esversion: 6 */
let card = [];
let pairCards = [];
let lockBoard = false;
let firstClick, secondClick;
let cardRotated = false;

$(document).ready(function () {
    $(".inner-card").each(function () {
        card.push(this);
    });
    shuffle();
    time();
    game();
});

function game() {
    $(".inner-card").off('click').on("click", function () {
        if (lockBoard === false) {
            if (this === firstClick) {
                // to not click the same card twice
            } else {
                this.style.transform = 'rotateY(180deg)';
            }
        }

        if (cardRotated === false) { //first click
            cardRotated = true;
            firstClick = this;
        } else { // second click
            cardRotated = false;
            secondClick = this;
            // check if these 2 first clicks are matched
            matched();
        };
    });
}

function matched() {
    if (firstClick.dataset.name === secondClick.dataset.name) {
        lockBoard = true
        setTimeout(function () {
            lockBoard = false;
        }, 500);
        disableClick();
        pairCards.push(firstClick, secondClick)
        endGame();
    } else {
        unmatched();
    }
}


function unmatched() {
    cardRotated = false;
    lockBoard = true;
    setTimeout(function () {
        firstClick.style.transform = 'rotateY(0deg)'; //rotate back to the back-shell
        secondClick.style.transform = 'rotateY(0deg)'; //rotate back to the back-shell
        lockBoard = false;
    }, 1000);
}

//Creating a shuffle function

function disableClick() {
    $(this.firstClick).off("click");
    $(this.secondClick).off("click");
}

function resetBoard() {
    pairCards = [];
    firstClick = null;
    secondClick = null;
    cardRotated = false;
    $(".inner-card").each(function (){
        this.style.transform = 'rotateY(0deg)'; // rotate back to the back-shell
    });
}

function endGame() {
    if (pairCards.length === 14) {
        setTimeout(function () {
            alert('Congratulations');
        }, 800);
        setTimeout(function () {
            resetBoard();
        }, 750);
    }
}

//Creeating time function
function time() {
    let secs = 0;
    let mins = 0;
    let SS;
    let MM;
    setInterval(() => {
        secs++;
        if (secs == 60) { secs = 0; mins++ }

        secs < 10 ? SS = `0${secs}` : SS = `${secs}`;
        mins < 10 ? MM = `0${mins}` : SS = `${mins}`;

        document.querySelector('#time').innerHTML = `${MM}:${SS}`;

    }, 1000);

}

//Creating the shuffle function with the images
function shuffle() {
    let images = document.querySelectorAll('img');
    //let srcs = 'assets/images';
    for (let i = images.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        card[j].style.order = i;
        card[i] = j;
    }
}
        /*
for (let i=0; i < images.length ; i++) {
srcs[i] = 'assets/images/';
console.log(images);
}
*/