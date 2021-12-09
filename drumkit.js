$(".drums").on("mousedown", function () { //event listener en JQUERY pour l'event "mousedown" sur tout les éléments de la class "drums"
  playSound(this.textContent.toLowerCase());
  document.querySelector(`.${this.textContent.toLowerCase()}`).classList.toggle("clicked");
});
$(".drums").on("mouseup", function () { //event listener en JQUERY pour l'event "mouseup" sur tout les éléments de la class "drums"
  document.querySelector(`.${this.textContent.toLowerCase()}`).classList.toggle("clicked");
});
$(document).on("keydown", function (e) { //event listener en JQUERY pour l'event "keydown"
  let classBtn = e.key.toLowerCase(); // conversion en minuscule
  if (document.querySelector(`.${classBtn}`)) {
    document.querySelector(`.${classBtn}`).classList.toggle("clicked");
  }
  playSound(classBtn);
});
$(document).on("keyup", function (e) { //event listener en JQUERY pour l'event "keyup"
  let classBtn = e.key.toLowerCase(); // conversion en minuscule
  if (document.querySelector(`.${classBtn}`)) {
    document.querySelector(`.${classBtn}`).classList.toggle("clicked");
  }
});

function playSound(btn) {
  switch (btn) {
    case "a":
      let crashAudio = new Audio("./drumKitSrc/sounds/crash.mp3");
      crashAudio.play();
      break;
    case "z":
      let kickAudio = new Audio("./drumKitSrc/sounds/kick-roomy.wav");
      kickAudio.play();
      break;
    case "e":
      let snareAudio = new Audio("./drumKitSrc/sounds/snare.mp3");
      snareAudio.play();
      break;
    case "r":
      let tom1Audio = new Audio("./drumKitSrc/sounds/tom-1.mp3");
      tom1Audio.play();
      break;
    case "t":
      let tom2Audio = new Audio("./drumKitSrc/sounds/tom-2.mp3");
      tom2Audio.play();
      break;
    case "y":
      let tom3Audio = new Audio("./drumKitSrc/sounds/tom-3.mp3");
      tom3Audio.play();
      break;
    case "u":
      let tom4Audio = new Audio("./drumKitSrc/sounds/tom-4.mp3");
      tom4Audio.play();
      break;
    default:
      break;
  }
}
