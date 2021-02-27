/*jshint esversion: 6 */
let card = []; // contain all the cards
let counter = 0;
let pairCards = [];
let firstClick = null;
let secondClick = null;
let firstPick, secondPick;

card.forEach((card)=>{ 
    card.state = 'unclicked';
    console.log();
});
//Creating a shuffle function
$(document).ready(function () {
    game();
    shuffle();
    time();

});
function matched () {
     if (firstPick.dataset.data-name === secondPick.dataset.data-name) {
        lockBoard = true
    }
    $(firstPick).addClass('unmatched-cards');
    $(secondPick).addClass('unmatched-cards');

}
function game() {
for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', ()=> {
        firstClick = true;
        
        if(card[i].state == 'unclicked') {
            card[i].style.transform = 'rotateY(180deg)';
            card[i].state = 'clicked';
            counter++;
            pairCards.push(card[i]);
            console.log(this)
        }
        else if (card[i].state == 'clicked') {
            card[i].style.transform = 'rotateY(0deg)';
            card[i].state = 'unclicked';
            counter--;
            pairCards = [];
        }
    });
}
//Creating a check function

function check() {
    if (counter==0) {
        console.log(counter);
        if (pairCards[0].querySelector('img')==pairCards[1].querySelector('img')) {
            console.log('img')
            matched();  
        } else {
            unmatched();
        }
        
    }
}

function unmatched (){
   $(firstPick).removeClass(".inner-card")
    $(secondPick).removeClass(".inner-card")
    lockBoard = false
}
//Creeating time function
function time(){
    let secs = 0;
    let mins = 0;
    let SS;
    let MM;
    setInterval(() => {
        secs++;
        if(secs==60){secs=0; mins++}

        secs<10?SS=`0${secs}`:SS=`${secs}`;
        mins<10?MM=`0${mins}`:SS=`${mins}`;

        document.querySelector('#time').innerHTML = `${MM}:${SS}`;
        
    }, 1000);

}

function addCards() {
  $(".inner-card").each(function () {
    cards.push(this);
  });
}

//Creating the shuffle function with the images
function shuffle() {
    let images = document.querySelectorAll('img');
    //let srcs = 'assets/images';
    for (let i = images.length-1; i>0; i--)  {
        let j = Math.floor(Math.random() * i);
        card[j].style.order = i;
        card[i] = j;
    }
    /*
    for (let i=0; i < images.length ; i++) {
        srcs[i] = 'assets/images/';
        console.log(images);    
    }*/
}
}
