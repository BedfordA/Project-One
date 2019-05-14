console.log("hello world") // It's advisable to remove this console logs before you ship your code
const cardsList = [
    {
        name: 'Jin Kazama',
        image: 'images/Jin.jpg',
    },
    {
        name: 'Heihachi Kazama',
        image: 'images/Heihachi.jpg',
    },
    {
        name: 'Anna Williams',
        image: 'images/Anna.jpg',
    },
    {
        name: 'Paul',
        image: 'images/Paul.jpg',
    },

    {
        name: 'Heihachi Kazama',
        image: 'images/Heihachi.jpg',
    },
    {
        name: 'Anna Williams',
        image: 'images/Anna.jpg',
    },
    {
        name: 'Paul',
        image: 'images/Paul.jpg',
    },
    {
        name: 'Jin Kazama',
        image: 'images/Jin.jpg',
    },


]

var cardsInPlay = [

];

var createBoard = function () {
    for (var i = 0; i < cardsList.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', "images/tekkenlogo.jpg");
        cardElement.setAttribute('data-id', i);
        cardElement.setAttribute('class', 'col-sm')
        cardElement.addEventListener('click', flipCard);
        document.getElementsByClassName('row')[1].appendChild(cardElement);

    }
}

var flipCard = function () {
    var cardId = this.getAttribute('data-id');
    cardsInPlay.push(cardsList[cardId].name);
    this.setAttribute('src', cardsList[cardId].image)
    if (cardsInPlay.length === 2) {
        checkForMatch()
    }
}

// This is the function that checks to see if the cards match when you click them 
var checkForMatch = function () {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        myScore += 1;
        console.log(myScore);
        cardsInPlay.pop();
        cardsInPlay.pop();
        console.log(cardsInPlay);

        /*
         * It's advisable to remove console logs ^lines(69 - 72) 
         * before you ship your code
         */
    }
    else { alert("Sorry, try again. Press ok then, CMD+R or CTRL + R to restart game."); }
}



//Timer Functions
var someTime = setInterval(myTimer, 1000);
//this holds your time
var myTime = 0;
//this holds your score 
var myScore = 0;
function myTimer() {
    myTime += 1;
    var t = myTime;
    document.getElementById("timer").innerHTML = t;
    var s = myScore;
    document.getElementById("score").innerHTML = s;
    if (myTime === 30 && myScore != 4) {
        clearInterval(someTime);
        alert('Your time is up!! Game Over!!');
    } else if (myScore === 4) {
        clearInterval(someTime);
        alert('You Win!!! Good Job')
    }
}


function myStopFunction() {
    clearInterval(someTime);
}



createBoard();

