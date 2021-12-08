// Récup des composant dont j'ai besoin pour mon drumkit
const drums = document.getElementsByClassName("drums")
// Ajout des event listeners
Array.from(drums).forEach(element => {
    element.addEventListener('click', function () {
        playSound(this.textContent)
    }, false)
});
// les events listeners des touches
addEventListener('keydown', (e) => {
    console.log(e.key);
    playSound(e.key);
}, false)
// fonction click
function playSound(btn) {
    switch (btn) {
        case "A":
            let crashAudio = new Audio('./drumKitSrc/sounds/crash.mp3')
            crashAudio.play();
            break;
        case "Z":
            let kickAudio = new Audio('./drumKitSrc/sounds/kick-roomy.wav')
            kickAudio.play();
            break;
        case "E":
            let snareAudio = new Audio('./drumKitSrc/sounds/snare.mp3')
            snareAudio.play();
            break;
        case "R":
            let tom1Audio = new Audio('./drumKitSrc/sounds/tom-1.mp3')
            tom1Audio.play();
            break;
        case "T":
            let tom2Audio = new Audio('./drumKitSrc/sounds/tom-2.mp3')
            tom2Audio.play();
            break;
        case "Y":
            let tom3Audio = new Audio('./drumKitSrc/sounds/tom-3.mp3')
            tom3Audio.play();
            break;
        case "U":
            let tom4Audio = new Audio('./drumKitSrc/sounds/tom-4.mp3')
            tom4Audio.play();
            break;
        default:
            break;
    }
    if (btn === "A") {
    }
}
