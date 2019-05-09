console.log("hello world")
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
        name: 'Jin Kazama',
        image: 'images/Jin.jpg',
    },
    {
        name: 'Heihachi Kazama',
        image: 'images/Heihachi.jpg',
    },
    {
        name: 'Anna Williams',
        image: 'images/Anna,jpg', 
    }
   
]

var cardsInPlay = []; 

var createBoard = function () {
    for (var i = 0; i < cardsList.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', "images/tekkenlogo.jpg");
        cardElement.setAttribute('data-id', i);
        cardElement.setAttribute('class', 'col-sm')
        cardElement.addEventListener('click', flipCard);
        document.getElementsByClassName('container')[1].appendChild(cardElement);
    }
}

var flipCard = function(){
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cardsList[cardId].name);
	this.setAttribute('src', cardsList[cardId].image)
	if (cardsInPlay.length === 2){
		checkForMatch()
	}
}

// This is the function that checks to see if the cards match when you click them 
var checkForMatch = function () {
    if (cardsInPlay[0] === cardsInPlay[1]) { alert("You found a match!"); }
    else { alert("Sorry, try again."); }
}



//Timer Functions
var someTime = setInterval(myTimer, 1000);
var myTime = 0;
var myScore = 0; 
function myTimer() {
    myTime += 1;
    var t = myTime;
    document.getElementById("timer").innerHTML = t;
}
function myStopFunction() {
    clearInterval(someTime);
}



createBoard();

