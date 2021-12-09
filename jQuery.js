var randomTitleInterval = setInterval(randomTextFromArray,2000)
// event listener pour stopper la génération
addEventListener("keyup", (e) =>{
    if (e.key == "z" || e.key == "Z") {
        clearInterval(randomTitleInterval);
    }
})
// event listener pour relancer la génération auto
addEventListener("keyup", (e) =>{
    if (e.key == "m" ||e.key == "M") {
        randomTitleInterval = setInterval(randomTextFromArray,1000);
    }
})
// tableau auto
const tab = Array.from({length: 50}, (_, i) => i + 1);
// ce tableau est temporaire
// let tab = ["0","1"," ","A"," Raihau "," Graffe ","","5"]
// fonctions
function randomTextFromArray(){
    // génération aléatoire du nombre de tour
    // let tour = Math.floor(Math.random() * 100);
    let tour = 5;
    let CodeToPrint = "";
    for (let i = 0; i < tour; i++) {
        let randomIndexFromTab = Math.floor(Math.random() * tab.length);
        // ajout de string dans le tableau a printer
        CodeToPrint += ` ${tab[randomIndexFromTab]} `;
    }
    let p = document.createElement("p");
    p.textContent = CodeToPrint;
    $(p).appendTo("#numbers");
}