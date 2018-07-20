$(document).ready(function(event) {
    $("button#dice").click(function(event) {
        clearValues();
        Player1.newGame();
        Player2.newGame();
        $("#round-score-1").empty();
        $("#die-roll-1").empty();
        $("#round-score-2").empty();
        $("#die-roll-2").empty();
    })
    event.preventDefault;
});


var Player1 = "";
var Player2 = "";