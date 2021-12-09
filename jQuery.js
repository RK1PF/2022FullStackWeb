var randomTitleInterval = null;
addEventListener("keyup", (e) => { // event listener pour stopper la génération
    if (e.key == "z" || e.key == "Z") {
        clearInterval(randomTitleInterval);
    }
})
addEventListener("keyup", (e) => { // event listener pour lancer la génération auto avec la touche "M"
    if (e.key == "m" || e.key == "M") {
        randomTitleInterval = setInterval(randomTextFromArray, 50);
    }
})
$('#go').on("click",function (e) { 
    e.preventDefault();
    randomTitleInterval = randomTitleInterval == null ? setInterval(randomTextFromArray, 50) : reset();
});

// addEventListener("click", (e) => { // event listener pour lancer la génération auto avec le click
//     randomTitleInterval = randomTitleInterval == null ? setInterval(randomTextFromArray, 50) : reset();
// })

const tab = Array.from({ length: 50 }, (_, i) => i + 1); // tableau auto
var flash = 1; //compteur de grille
function randomTextFromArray() {

    if (flash < 10) { //controle du nb du grille tirées
        flash++;
    } else {
        reset();
        flash = 1; //réinitialisation du compteur de grilles
    }
    /*
    génération aléatoire du nombre de tour
    let tour = Math.floor(Math.random() * 100);
    */
    let tour = 5;
    let CodeToPrint = "";
    let precedant = 0;
    let randomIndexFromTab = 0;
    for (let i = 0; i < tour; i++) {
        while (precedant == randomIndexFromTab) {
            randomIndexFromTab = Math.floor(Math.random() * tab.length);
        }
        CodeToPrint += ` ${tab[randomIndexFromTab]} `; // ajout de string dans le tableau a printer
        precedant = randomIndexFromTab; // récupération du dernier element sorti
    }
    let p = document.createElement("p");
    p.textContent = CodeToPrint;
    $(p).appendTo("#numbers");
    console.log('bop');
}
function reset() {
    clearInterval(randomTitleInterval); //arrêt du générateur
    randomTitleInterval = null; //important pour que le click fonctionne correctement
}