// Récup des composant dont j'ai besoin pour mon drumkit
const drums = document.getElementsByClassName("drums");
// Ajout des event listeners
Array.from(drums).forEach((element) => {

  element.addEventListener(
    "click",
    function () {
    },
    false
    );
    
    element.addEventListener("mousedown", function(){
    playSound(this.textContent.toLowerCase());
    document.querySelector(`.${this.textContent.toLowerCase()}`).classList.toggle("clicked");
  }, false)
  element.addEventListener("mouseup", function(){
    document.querySelector(`.${this.textContent.toLowerCase()}`).classList.toggle("clicked");
  }, false)
});

// les events listeners des touches
addEventListener("keydown", (e) => {
  // conversion en minuscule
  let classBtn = e.key.toLowerCase();
  if (document.querySelector(`.${classBtn}`)) {
    document.querySelector(`.${classBtn}`).classList.toggle("clicked");
  }
  playSound(classBtn);
});
// event listener du keyup des touches
addEventListener("keyup", (e) => {
  let classBtn = e.key.toLowerCase();
  if (document.querySelector(`.${classBtn}`)) {
    document.querySelector(`.${classBtn}`).classList.toggle("clicked");
  }
});
// fonction click
function playSound(btn) {
  switch (btn) {
    case "a":
      // document.querySelector(`.${btn}`).classList.toggle("clicked");
      let crashAudio = new Audio("./drumKitSrc/sounds/crash.mp3");
      crashAudio.play();
      break;
    case "z":
      // document.querySelector(`.${btn}`).classList.toggle("clicked");
      let kickAudio = new Audio("./drumKitSrc/sounds/kick-roomy.wav");
      kickAudio.play();
      break;
    case "e":
      // document.querySelector(`.${btn}`).classList.toggle("clicked");
      let snareAudio = new Audio("./drumKitSrc/sounds/snare.mp3");
      snareAudio.play();
      break;
    case "r":
      // document.querySelector(`.${btn}`).classList.toggle("clicked");
      let tom1Audio = new Audio("./drumKitSrc/sounds/tom-1.mp3");
      tom1Audio.play();
      break;
    case "t":
      // document.querySelector(`.${btn}`).classList.toggle("clicked");
      let tom2Audio = new Audio("./drumKitSrc/sounds/tom-2.mp3");
      tom2Audio.play();
      break;
    case "y":
      // document.querySelector(`.${btn}`).classList.toggle("clicked");
      let tom3Audio = new Audio("./drumKitSrc/sounds/tom-3.mp3");
      tom3Audio.play();
      break;
    case "u":
      // document.querySelector(`.${btn}`).classList.toggle("clicked");
      let tom4Audio = new Audio("./drumKitSrc/sounds/tom-4.mp3");
      tom4Audio.play();
      break;
    default:
      break;
  }
}
