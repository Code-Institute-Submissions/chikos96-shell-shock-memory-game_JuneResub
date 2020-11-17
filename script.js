/*jshint esversion: 6 */
let card = document.querySelectorAll('.inner-card');
let counter = 0;
let pairCards = [];
let firstClick = false;

card.forEach((card)=>{ 
    card.state = 'unclicked'
    console.log();
});
//Creating a shuffle function
shuffle ();

for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', ()=> {
        firstClick = true;
        

        if(card[i].state == 'unclicked') {
            card[i].style.transform = 'rotateY(180deg)';
            card[i].state = 'clicked';
            counter++;
            pairCards.push(card[i]);
            check();

        }

        else if (card[i].state == 'clicked') {
            card[i].style.transform = 'rotateY(0deg)';
            card[i].state = 'unclicked';
            counter--;
            pairCards = [];
        }
    });
    time();
}
//Creating a check function

function check() {
    if (counter==2) {
        if (pairCards[0].querySelector('img')==pairCards[1].querySelector('img')) {
            matched();  
        } else {
            unmatched();
        }
        console.log(pairCards[0]);
        console.log(pairCards[1]);
    
    }
}

//If cards match, then the player scores
function matched(){
    let ifMatch = pairCards[0].dataset.name === pairCards[1].dataset.name;
    
    ifMatch === true;

    counter = 0;
    pairCards = [];
    let score = document.querySelector('#score').innerHTML;
    score++;
     document.querySelector('#score').innerHTML = score;

}

//if cards do not match, the player tries again
function unmatched(){
    setTimeout(() => {
        let ifMatch = pairCards[0].dataset.name || pairCards[1].dataset.name;

        ifMatch = false;
       
    }, 850);

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

//Creating the shuffle function with the images
function shuffle() {
    let images = document.querySelectorAll('img');
    let srcs = 'assets/images'
    
    for (let i = images.length-1; i>0; i--)  {
        let j = Math.floor(Math.random() * i);
        let temp = srcs[i];
        srcs[i] = srcs[j];
        srcs[j] = temp;
    }
    for (let i=0; i < images.length ; i++) {
        srcs[i] = 'assets/images/';
        console.log(images);
           
    }


}
