$(document).on("keydown", function (e) { //event listener sur les touches
    if (e.key == "0") {
        startGame();
    } else {
        gameOver();
    }
});

function startGame() {
    $("body").fadeOut(50, function () {
        $(this).toggleClass("game-over");
    }).fadeIn(50, function () {
    $("#level-title").text("Game Started");
    });
}
function gameOver() {
    $("body").fadeOut(50, function () {
        $(this).toggleClass("game-over");
    }).fadeIn(50, function () {
    $("#level-title").text("Game Over");
    });
    
}