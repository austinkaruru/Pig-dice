$(document).ready(function(event) {
    $("button#dice").click(function(event) {
        clearValues();
        Player1.newGame();
        Player2.newGame();
        $("#round-score-1").empty();
        $("#die-roll-1").empty();
        $("#round-score-2").empty();
        $("#die-roll-2").empty();
    });
    $("button#dice1").click(function(event) {
        dice1 = throwdice();
    })

    event.preventDefault;
});


var Player1 = "";
var Player2 = "";

var throwdice = function () {
    return Math.floor(6*Math.random())+1
}

function Player(turn) {
    this.roll = 0;
    this.tempscore = 0;
    this.roundscore = 0;
    this.turn = turn;
    this.playerName
}

Player.prototype.rollone = function() {
    if (this.roll === 1 ) {
        this.tempscore = 0;
        alert("Sorry " + this.playerName + ", you rolled a 1! Your turn is over!")
    } else {
        this.tempscore += this.roll;
    }
}

Player.prototype.hold = function () {
    this.roundscore += this.tempscore;
    this.tempscore = 0;
    alert(this.playerName + ", your turn is over. Next please.")
}




Player.prototype.winnerCheck = function () {
    if (this.roundscore >= 100) {
        alert(this.playerName + "You are the winner!!!!");
    }
}

Player.prototype.newGame = function () {
    this.roll = 0;
    this.tempscore = 0;
    this.roundscore = 0;
    this.playerName ="";
}

var clearValues = function(){
    $(".player1Name").val("");
    $(".player2Name").val("");
}