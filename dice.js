// recupération des éléments dont j'aurais besoin
const btn = document.querySelector('#refreshBtn');
const winsMsg = document.querySelector('h2');
const diceOne = document.querySelector('.one img');
const diceTwo = document.querySelector('.two img');
// console.log(diceTwo);
// ajout d'un event listener sur le bouton
addEventListener('click', e => {
    if (throwDiceOne() > throwDiceTwo()){
        winsMsg.textContent = "Player One Wins";
    } else if (throwDiceOne() === throwDiceTwo()){
        winsMsg.textContent = "Draw ! throw again!";
    } else {
        winsMsg.textContent = "Player Two Wins";
    }
}, false)

function random() {
    return Math.floor(Math.random() * 5);
}
function throwDiceOne() {
    let r = random();
    // console.log("dice one :",r);
    switch (r) {
        case 0:
            diceOne.setAttribute("src", "/diceGameSrc/dice1.png");
            return r + 1;
        case 1:
            diceOne.setAttribute("src", "/diceGameSrc/dice2.png");
            return r + 1;
            case 2:
            diceOne.setAttribute("src", "/diceGameSrc/dice3.png");
            return r +1;
            case 3:
            diceOne.setAttribute("src", "/diceGameSrc/dice4.png");
            return r +1;
            case 4:
            diceOne.setAttribute("src", "/diceGameSrc/dice5.png");
            return r +1;
            case 5:
            diceOne.setAttribute("src", "/diceGameSrc/dice6.png");
            return r +1;
        default:
            console.log("erreur de throw dice one");
            break;
    }
}
function throwDiceTwo() {
    let r = random();
    // console.log("dice two :",r);
    switch (r) {
        case 0:
            diceTwo.setAttribute("src", "/diceGameSrc/dice1.png");
            return r + 1;
        case 1:
            diceTwo.setAttribute("src", "/diceGameSrc/dice2.png");
            return r + 1;
            case 2:
            diceTwo.setAttribute("src", "/diceGameSrc/dice3.png");
            return r +1;
            case 3:
            diceTwo.setAttribute("src", "/diceGameSrc/dice4.png");
            return r +1;
            case 4:
            diceTwo.setAttribute("src", "/diceGameSrc/dice5.png");
            return r +1;
            case 5:
            diceTwo.setAttribute("src", "/diceGameSrc/dice6.png");
            return r +1;
        default:
            console.log("erreur de throw dice two");
            break;
    }
}
