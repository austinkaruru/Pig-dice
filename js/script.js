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


$(document).ready(function (event) {

    $("button#start").click(function(event){
        Player1 = new Player(true);
        Player2 = new Player(false);
        $(".console").show();
        $(".start-menu").hide();

        var player1Name = $(".player1Name").val();
        $("#player1Name").text(player1Name);

        var player2Name = $(".player2Name");
        $("#player2Name").text(player2Name);

        Player1.playerName=player1Name;
        Player2.playerName=player2Name;

    });
    $("button#dice").click(function (event) {
        clearValues();
        Player1.newGame();
        Player2.newGame();
        $("#round-total-1").empty();
        $("#total-score-1").empty();
        $("#die-roll-1").empty();
        $("#round-total-2").empty();
        $("#total-score-2").empty();
        $("#die-roll-2").empty();
    });
    $("button#dice1").click(function (event) {
        dice1 = throwdice();
        $("#die-roll-1").text(Player1.roll);
        Player1.rollone();
        $("#round-total-1").text(Player1.tempscore);
    });

    $("button#dice3").click(function (event) {
        Player2.roll = throwdice();
        $("#die-roll-2").text(Player2.roll);
        Player2.rollone();
        $("#round-total-2").text(Player2.tempscore);
    });

    $("button#dice2").click(function (event) {
        Player1.hold();
        $("#total-score-1").text(Player1.totalscore);
        $("#round-total-1").empty();
        $("#die-roll-1").empty();
        Player1.winnerCheck();
    });

    $("button#dice4").click(function (event) {
        Player1.hold();
        $("#total-score-2").text(Player1.totalscore);
        $("#round-total-2").empty();
        $("#die-roll-2").empty();
        Player1.winnerCheck();
    });

    event.preventDefault;
});