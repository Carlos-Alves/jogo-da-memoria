const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
let som = new Audio('./song/aplausos.mp3'); 
let tema = new Audio('./song/tema.mp3'); 
let errou = new Audio('./song/errou.mp3'); 

function flipCard(){   
    if(lockBoard) return;
    if(this === firstCard) return;
    this.classList.add('flip');
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;
    checkForMatch();
    
}

function checkForMatch(){
    if(firstCard.dataset.card === secondCard.dataset.card){        
        som.play();
        disableCards();
        return;       
    }
    errou.play()
    unflipCards();
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards(){
    lockBoard = true;
    // this.classList.add('tremer');
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        secondCard.classList.add('tremer');

        resetBoard();
    }, 1500);
}

function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}


(function shuffle(){    
    cards.forEach((card) => {
        let ramdomPosition = Math.floor(Math.random() * 12);
        card.style.order = ramdomPosition;        
    });
})();



cards.forEach((card) => {
    card.addEventListener('click', flipCard)
});