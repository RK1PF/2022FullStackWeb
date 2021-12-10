const animationTime = 100; //variable servant pour les temps d'animation
const btns = $(".btn"); // stockage des boutons
let patternToFollow = []; // tableau stockant la pattern en cours
let lvl = 0;
let gameStarted = false;
$(document).on("keydown", function (e) {
  //event listener sur les touches
  if (e.key == "0" || e.key == "Insert") {
    startGame();
  } else {
    gameOver();
  }
});
$(btns).on("mousedown", function () {
  //clique des boutons
  $(this).toggleClass("clicked");
  setTimeout(() => {
    $(this).toggleClass("clicked");
  }, animationTime);
});
function startGame() {
  //fonction regroupant les changements à opérer lors d'un début de partie
  if (!gameStarted && lvl == 0) {
    gameStarted = true; //le jeu a commencé et c'est la première partie
    lvl++;

    $("#level-title").text(`level ${lvl}`);

    $("#level-title").toggleClass("pressed");
    setTimeout(() => {
      $("#level-title").toggleClass("pressed");
    }, animationTime);
  }
  $("body")
    .fadeOut(animationTime, function () {
      $(this).toggleClass("game-over");
    })
    .fadeIn(animationTime, function () {
      $("#level-title").text(`level ${lvl}`);
    });
}
function gameOver() {
  //fonction regroupant tout les changements à opérer lors d'un game over
  if (gameStarted) {
    gameStarted = false;
    $("body")
      .fadeOut(animationTime, function () {
        $(this).toggleClass("game-over");
      })
      .fadeIn(animationTime, function () {
        $("#level-title").text("Game Over");
      });
  }
}
function randomBtn() {
  return btns[Math.floor(Math.random() * btns.length)]; // tire un numéro aléatoire allant de 0 à nb btns
}
