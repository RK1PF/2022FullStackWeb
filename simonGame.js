const animationTime = 100; //variable servant pour les temps d'animation
const btns = $(".btn"); // stockage des boutons du game
let patternToFollow = []; // tableau stockant la pattern en cours
let nextPattern = [];
let lvl = 0;
let clickActivated = false;
let tour = 0;
$("#hider").on("mousedown", function () {
  //event listener sur les touches
    startGame();
});
//clique des boutons (fired at every click on any of btns)
$(btns).on("mousedown", function () {
  // assignation du bouton appuyé à la variable btn
  let btn = $(this).attr("id");
  comparePattern(patternToFollow, btn)

  // animation du clique
  $(this).toggleClass("clicked");
  setTimeout(() => {
    $(this).toggleClass("clicked");
  }, animationTime);

});
function startGame() {
  //fonction regroupant les changements à opérer lors d'un début de partie
  // lvl 1
  if (lvl >= 1) {
    animationReset();
    patternToFollow = [];
  }
  lvl = 1;
  animationLvl();
  // lancement du pattern
  patternAdd();
  $("#hider").toggle();
  setTimeout(animationPattern,animationTime * 10);
}
function gameOver() {
  $("#hider").toggle();
  //fonction regroupant tout les changements à opérer lors d'un game over
  animationGameOver();
}
function randomBtn() {
  return btns[Math.floor(Math.random() * btns.length)].getAttribute("id"); // retourne l'id d'un bouton aléatoirement
}
function patternAdd() {
  patternToFollow.push(randomBtn());
}

function comparePattern(patternToFollow, playersInput) {

  if (patternToFollow[tour] === playersInput) {
    tour++;
    // play du son attribué au btn
    playBtnSound(playersInput)
  } else {
    gameOver();
    playBtnSound("wrong");
    tour = 0;
  }
  if (tour >= patternToFollow.length) {
    tour = 0;
    lvl++;
    patternAdd();
    animationLvl();
    setTimeout(animationPattern, animationTime * 10)
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
function animationReset() {
  $("body")
    .fadeOut(animationTime, function () {
      $(this).toggleClass("game-over");
    })
    .fadeIn(animationTime, function () {
      $("#level-title");
    });
}
function animationPattern() {
  $("#hiderAnimation").toggle();
  patternToFollow.forEach((e,i) => {
    setTimeout(()=>{
      animationBtn(e);
      playBtnSound(e);
      if (i+1 === patternToFollow.length) {
        $("#hiderAnimation").toggle();
      }
    }, i * animationTime * 10)
  });
}
function animationBtn(btn){
    // animation du clique
    $(`#${btn}`).toggleClass("pressed");
    setTimeout(() => {
      $(`#${btn}`).toggleClass("pressed");
    }, animationTime * 2);
}