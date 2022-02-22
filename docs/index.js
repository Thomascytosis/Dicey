function rollDice(){
    var randomDie1 = Math.floor(Math.random() * 6) + 1;
    var randomDie2 = Math.floor(Math.random() * 6) + 1;
    const diceFace = {
        1: "images/dice1.png",
        2: "images/dice2.png",
        3: "images/dice3.png",
        4: "images/dice4.png",
        5: "images/dice5.png",
        6: "images/dice6.png",
    };
    var changeImage1 = document.querySelector(".img1");
    var changeImage2 = document.querySelector(".img2");
    var randomImage1 = diceFace[randomDie1];
    var randomImage2 = diceFace[randomDie2];
    changeImage1.setAttribute("src", randomImage1);
    changeImage2.setAttribute("src", randomImage2);
    
    var winnerText = document.querySelector(".winLose");
    if (randomDie1 > randomDie2) {
        winnerText.innerText = ("🚩Player 1 Wins!")
    }
    if (randomDie1 < randomDie2) {
        winnerText.innerText = ("Player 2 Wins!🚩")
    }
    if (randomDie1 === randomDie2) {
        winnerText.innerText = ("Draw!")
    }
}



// my code sources
// https://stackoverflow.com/questions/48357622/html-js-change-img-src-path
// https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
// https://javascript.info/object