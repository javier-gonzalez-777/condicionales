// Elemnetos del DOM
const input1= document.querySelector("#caja1")
const input2= document.querySelector("#caja2")
const input3= document.querySelector("#caja3")
const resultado=document.querySelector(".result")
const btn=document.querySelector("#btn")
// Variables

//Funciones

function sumarCajas(){
    //const valor1=Number(input1.innerHTML)
    const valor1=input1.value
    const valor2=input2.value
    const valor3=input3.value
    const total =Number(valor1)+ Number(valor2)+ Number(valor3)
    if (total <=10){
        resultado.innerHTML="Llevas:"+ total

    }else{
        resultado.innerHTML="Llevas demasiados stickers"
    }
}


    


//Eventos
btn.addEventListener("click", sumarCajas)
