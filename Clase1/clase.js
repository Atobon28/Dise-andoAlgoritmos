let i = 0;
while (i < 10) {
    console.log (i) ;
    i++;
}


function saludar (mensajito, nombre, apellido, edad) {
    console.log (mensajito + " " + nombre + " " + apellido);
}

saludar ("Hola mundooooo", "Kevin", "Ruiz");


let p2 = "Pedos"
console.log (`Holaaa ${p2}`)

console.log ([1,2,3,4,5] .concat ([6,7,8,9,10]))

const resultado = 1 === 1 ? "Es verdad" : "Es falso"
//TERNARIO
console.log (resultado)

switch (1) {
    case 1: 
        console.log ("Es uno")
        break
    default: 
        console.log ("No es uno")
        break
}