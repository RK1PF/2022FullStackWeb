var randomTitleInterval=null;addEventListener("keyup",(e)=>{if(e.key=="z"||e.key=="Z"){clearInterval(randomTitleInterval)}})
addEventListener("keyup",(e)=>{if(e.key=="m"||e.key=="M"){randomTitleInterval=setInterval(randomTextFromArray,50)}})
$('#go').on("click",function(e){e.preventDefault();randomTitleInterval=randomTitleInterval==null?setInterval(randomTextFromArray,50):reset()});const tab=Array.from({length:50},(_,i)=>i+1);var flash=1;function randomTextFromArray(){if(flash<10){flash++}else{reset();flash=1}
let tour=5;let CodeToPrint="";let precedant=0;let randomIndexFromTab=0;for(let i=0;i<tour;i++){while(precedant==randomIndexFromTab){randomIndexFromTab=Math.floor(Math.random()*tab.length)}
CodeToPrint+=` ${tab[randomIndexFromTab]} `;precedant=randomIndexFromTab}
let p=document.createElement("p");p.textContent=CodeToPrint;$(p).appendTo("#numbers");console.log('bop')}
function reset(){clearInterval(randomTitleInterval);randomTitleInterval=null}