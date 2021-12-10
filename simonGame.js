const animationTime = 100; //variable servant pour les temps d'animation
const btns = $(".btn"); // stockage des boutons du game
let patternToFollow = []; // tableau stockant la pattern en cours
let nextPattern = [];
let lvl = 0;
let clickActivated = false;
let tour = 0;
$(document).on("keydown", function (e) {
  //event listener sur les touches
  if (e.key == "a" && lvl === 0) {
    startGame();
  }
  if (e.key == "0") {
    patternAdd();
  }
});
//clique des boutons (fired at every click on any of btns)
$(btns).on("mousedown", function () {
  // assignation du bouton appuyé à la variable btn
  let btn = $(this).attr("id");
  comparePattern(patternToFollow, btn)
  console.log(tour);

  // animation du clique
  $(this).toggleClass("clicked");
  setTimeout(() => {
    $(this).toggleClass("clicked");
  }, animationTime);

});
function startGame() {
  //fonction regroupant les changements à opérer lors d'un début de partie
  // lvl 1
  lvl++;
  animationLvl();
  // lancement du pattern
  patternAdd();
}
function gameOver() {
  //fonction regroupant tout les changements à opérer lors d'un game over
  animationGameOver();
}

/*FIXME:debug en cours*/

function randomBtn() {
  let r = btns[Math.floor(Math.random() * btns.length)].getAttribute("id");
  console.log(r);
  return r; // retourne l'id d'un bouton aléatoirement
}
function patternAdd() {
  let result = patternToFollow.push(randomBtn());
  console.log(patternToFollow);
}

/*FIXME:Debug en cours sur la comparaison*/

function comparePattern(patternToFollow, playersInput) {

  if (patternToFollow[tour] === playersInput) {
    tour++;
    console.log("Bon");
    // play du son attribué au btn
    playBtnSound(playersInput)
  } else {
    gameOver();
    tour = 0;
    playBtnSound("wrong");
  }
  if (tour >= patternToFollow.length) {
    tour = 0;
    lvl++;
    patternAdd();
    animationLvl();
  }
}
function playBtnSound(btn) {
  switch (btn) {
    case "green":
      (new Audio("./SimonGame/sounds/green.mp3")).play();
      break;
    case "red":
      (new Audio("./SimonGame/sounds/red.mp3")).play();
      break;
    case "yellow":
      (new Audio("./SimonGame/sounds/yellow.mp3")).play();
      break;
    case "blue":
      (new Audio("./SimonGame/sounds/blue.mp3")).play();
      break;
    case "wrong":
      (new Audio("./SimonGame/sounds/wrong.mp3")).play();
      break;
    default:
      break;
  }
}
function animationLvl() {
  // changement du texte du titre et son css (animation)
  $("#level-title").text(`level ${lvl}`);
  $("#level-title").toggleClass("pressed");
  setTimeout(() => {
    $("#level-title").toggleClass("pressed");
    if (lvl <= 1) {
      // animation du body
      $("#full").toggleClass("expand");
      setTimeout(() => {
        $("#full").toggleClass("expand");
      }, animationTime * 2);
    }
  }, animationTime);
}
function animationGameOver() {
  $("body")
    .fadeOut(animationTime, function () {
      $(this).toggleClass("game-over");
    })
    .fadeIn(animationTime, function () {
      $("#level-title").text("Game Over");
    });
}