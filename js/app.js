console.log("hello world")
const cardList = [
    {
        name: 'Jin Kazama',
        image: 'https://vignette.wikia.nocookie.net/tekken/images/3/3d/Jin_T7.jpg/revision/latest/scale-to-width-down/310?cb=20170408104150&path-prefix=en',
    }
   
]
var gameTimer = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("timer").innerHTML = t;
}

function myStopFunction() {
    clearInterval(gameTimer);
}

