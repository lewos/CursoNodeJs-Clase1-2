let a = 11
let b = 6
let c = a+b
console.log(c)

for(let i = 0; i<5; i++){
    console.log(i)
}
//console.log(i) esto no funciona pq let i esta fuera del scope

// function dobleDe(a){
//     return a*2
// }
//// const con una funcion anonima
// const dobleDe = function(a){
//     return a*2
// }
//// const con arrow function
const dobleDe = a => a*2
const SumaDe = (a,b) =>{
    imprimirMensaje(`suma de ${a} y ${b} es ${a+b}`)
    return a+b
}
const imprimirMensaje = mens => {
    console.log(mens)
}
const getPi = () => Math.PI

let numero = 6
console.log('el doble de '+ numero + ' es '+ +dobleDe(numero))
//`` con backsticks
console.log(`el doble de ${numero} es ${dobleDe(numero)}`)
console.log(`suma de ${SumaDe(13,56)}`)
imprimirMensaje(getPi())


