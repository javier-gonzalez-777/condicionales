//Elementos del DOM
const btn=document.querySelector("button")
console.log(btn)
const objselect1=document.getElementById("select1")
const objselect2=document.getElementById("select2")
const objselect3=document.getElementById("select3")
const msg=document.querySelector('#mensaje')

//Variable

//Funciones
function Contrasena(){
console.log("haz hecho un click en el boton")
let valor1=objselect1.value
let valor2=objselect2.value
let valor3=objselect3.value
let pass= valor1+valor2+valor3
console.log(pass)
if (pass == '911'){
   msg.innerHTML="Password 1 correcto"
} else if (pass=='714'){
   msg.innerHTML="Password 2 correcto"
} else {
   msg.innerHTML="Password es incorrecto"
}
//console.log(valor1)
//console.log(valor2)
//console.log(valor3)
}

//Eventos
btn.addEventListener("click", Contrasena)


