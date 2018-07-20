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
    this.playerName;
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
    this.totalscore += this.tempscore;
    this.tempscore = 0;
    alert(this.playerName + ", your turn is over. Next please.")
}




Player.prototype.winnerCheck = function () {
    if (this.totalscore >= 100) {
        alert(this.playerName + "You are the winner!!!!");
    }
}

Player.prototype.newGame = function () {
    this.roll = 0;
    this.tempscore = 0;
    this.totalscore = 0;
    this.playerName ="";
}

var clearValues = function(){
    $(".Player1Name").val("");
    $(".player2Name").val("");
}


$(document).ready(function() {

    $("button#start").click(function(event){
        Player1 = new Player(true);
        Player2 = new Player(false);
        $(".console").show();
        $(".start-menu").hide();

        var Player1Name = $(".Player1Name").val();
        $("#Player1Name").text(Player1Name);

        var Player2Name = $(".Player2Name").val();
        $("#Player2Name").text(Player2Name);

        Player1.playerName=Player1Name;
        Player2.playerName=Player2Name;

    });
    $("button#new").click(function(event) {
        $(".console").hide();
        clearValues();
        Player1.newGame();
        Player2.newGame();
        $("#round-total-1").empty();
        $("#total-score-1").empty();
        $("#die-roll-1").empty();
        $("#round-total-2").empty();
        $("#total-score-2").empty();
        $("#die-roll-2").empty();

        $(".start-menu").show();
    });

    $("button#dice").click(function (event) {
        Player1.roll = throwdice();
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

    $("button#dice4").click(function(event) {
        Player2.hold();
        $("#total-score-2").text(Player2.totalscore);
        $("#round-total-2").empty();
        $("#die-roll-2").empty();
        Player2.winnerCheck();
    });

});
