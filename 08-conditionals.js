// Estructuras de control
// if, else if, else

// if (si)
let age = 30

if ( age == 30 ){
    //Bloque
    console.log("La edad es 30")
}

// else (si no)
if ( age == 30 ){
    //Bloque
    console.log("La edad es 30")
}
else {
    console.log("La edad no es 30")
}

// else if (si no, si) si se quiere meter condiciones entre el if y el else, debe de llevar else if siempre
let age2 = 17

if ( age2 == 30 ){
    //Bloque
    console.log("La edad es 30")
} else if(age2 < 18){
    console.log("Es menor de edad")
}
else {
    console.log("La edad no es 30 ni menor de edad")
}

// OPeradores ternarios, son como los if y else pero mas cortos (if simple)

const message = age == 30 ? "La edad es 30" : "La edad no es 30"
// if        si se cumple       si no se cumple
console.log(message)

// Switch, despues de cada case lleva un break

let day = 3
let dayName

switch (day){
    case 0:
        dayName = "Lunes"
        break // Un break es romper la ejecucion del bloque
    case 1:
        dayName = "Martes"
        reak
    case 2:
        dayName = "Miercoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sabado"
        break
    case 6:
        dayName = "Domingo"
        break
    default:
        dayName = "Numero de dia incorrecto"
}
console.log(dayName)