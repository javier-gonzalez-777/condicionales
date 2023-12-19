// Elementos del dom
const img=document.querySelector('img');

// Variables
let state=false

// Funciones

function ponerBordes(){
//console.log("Has hecho un click")

if (state== false){
    img.style.border="2px solid red";
    state=true
}else{
    img.style.border="none";
    state=false
}
}
//Eventos
img.addEventListener("click", ponerBordes);



