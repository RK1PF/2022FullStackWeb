// const domDiv = document.querySelector('#jsOut');
// document.querySelector("input").addEventListener('select', (e)=>{
//     // domDiv.classList.toggle('dNone');
//     let selection = e.target.value.substring(e.target.selectionStart, e.target.selectionEnd);
//     console.log(selection);
//     domDiv.querySelector("h1").textContent = `${selection}`;
// });
// console.log(document.querySelector("h1"))

$(document).on("keydown", function (e) {
    if (!(e.key == "Control" || e.key == "Capslock" || e.key == "Tab" || e.key == "Shift" || e.key == "Backspace" || e.key == "Enter")) {
        if(e.key == "Delete"){
            $("#jsOut h1").text("");
        } else {
            $("#jsOut h1").text($("#jsOut h1").text() + e.key);
        }
    }
});