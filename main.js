const domDiv = document.querySelector('#jsOut');
document.querySelector("input").addEventListener('select', (e)=>{
    // domDiv.classList.toggle('dNone');
    let selection = e.target.value.substring(e.target.selectionStart, e.target.selectionEnd);
    console.log(selection);
    domDiv.querySelector("h1").textContent = `${selection}`;
});
console.log(document.querySelector("h1"))
