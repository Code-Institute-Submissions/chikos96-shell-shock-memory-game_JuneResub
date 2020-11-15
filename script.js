let card = document.querySelectorAll('.inner-card');
let counter = 0;
let pairCards = []
let firstClick = false;

card.forEach((card)=>{
    card.state = "unclicked"
}) //  for each state of the card are assigned with a value "unclicked" because they are not clicked.

//Creating a shuffle function
shuffle ()

for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', ()=> {
        if(!firstClick){time()}
        firstClick = true

        if(card[i].state == 'unclicked') {
            card[i].style.transform = 'rotateY(180deg)'
            card[i].state = 'clicked'
            counter++
            pairCards.push(card[i])
            check()

        }

        else if (card[i].state == 'clicked') {
            card[i].style.transform = 'rotateY(0deg)'
            card[i].state = 'unclicked'
            counter--
            pairCards = []
        }
    })

}
//Creating a check function

function check() {
    if (counter==2) {
        if (pairCards[0].querySelector('img').srcs==pairCards[1].querySelector('img').srcs) {
            matched()  
        } else {
            unmatched(pairCards[0], pairCards[1])
        }
        
    }
}

//If cards match, then the player scores
function matched(){
    pairCards[0].state = 'blocked'
    pairCards[1].state = 'blocked'
    counter = 0;
    pairCards = [];
    let score = document.querySelector('#score').innerHTML
    score++;
     document.querySelector('#score').innerHTML = score
}

//if cards do not match, the player tries again
function unmatched(){
    setTimeout(() => {
        x.style.transform = 'rotateY(0deg)'
        y.style.transform = 'rotateY(0deg)'
        
    }, 850);

    pairCards[0].state = 'unclicked'
    pairCards[1].state = 'unclicked'
    counter = 0
    pairCards = []
}

//Creeating time function
function time(){
    let secs = 0;
    let SS;
    setInterval(() => {
        secs++
        if(secs==60)

        secs<10?SS=`0${secs}`:SS=`0${secs}`

        document.querySelectorAll('#time').innerHTML = `${SS}`;
    }, 1000);

}
//Creating the shuffle function with the images
function shuffle(){
    let images = document.querySelectorAll('img')
    let srcs = ['donatello.jpg','leonardo.png','raphael.jpg','shredder.jpg','splinter.jpg','michelangelo.png','shell-shock.jpg']

    for (let i = srcs.length-1; i>0; i--)  {
        console.log("loaded");
        let j = Math.floor(Math.random() * i);
        let temp = srcs[i];
        srcs[i] = srcs[j];
        srcs[j] = temp;
    }
    for (let i=0; i < images.length ; i++) {
        images[i].src = "assets/images/" + srcs[1];
        
    }


}
