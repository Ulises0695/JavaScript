/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = 30

if (nombre == 30){
    console.log("Ulises Ramirez")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let password = 12345678

if (password == 123456789){
    console.log("Contraseña valida")
} else {
    console.log("Credenciales incorrectas")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = -1

if (numero > 0){
    console.log("Positivo")
} else if(numero == 0){
    console.log("Es igual a 0")
} else if(numero < 0){
    console.log("Es negativo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 15
 if ( edad >= 18){
    console.log("Es mayor de edad")
 } else if (edad < 18){
    console.log(`Es menor de edad, te faltan:`, 18 - edad, "años")
    //console.log( 18 - edad, "años")
 }

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let age = 17
const mensaje = age >= 18 ? "Ya es adulto" : "Es menor"
console.log(mensaje)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let estacion = 11

if (estacion == 12 || estacion == 1 || estacion == 2){
    console.log("Invierno")
} else if (estacion == 3 || estacion == 4 || estacion == 5){
    console.log("Primavera")
} else if (estacion == 6 || estacion == 7 || estacion == 8){
    console.log("verano")
} else if (estacion == 9 || estacion == 10 || estacion == 11){
    console.log("Otoño")
}
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = 0
let saludo
switch (idioma){
    case 0:
        saludo = "HOLA"
        break
    case 1: 
        saludo = "HELLO"
        break
    case 2: 
        saludo = "BONJOUR"
        break
}
console.log(saludo)

// 9. Usa un switch para hacer de nuevo el ejercicio 6
let mes = 1
let estation

switch(mes){
    case 1:
        estation = "Invierno"
        break
    case 2:
        estation = "Invierno"
        break
    case 3:
        estation = "Primavera"
        break
    case 4:
        estation = "Primavera"
        break
    case 5:
        estation = "Primavera"
        break
    case 6:
        estation = "Verano"
        break
    case 7:
        estation = "Verano"
        break
    case 8:
        estation = "Verano"
        break
    case 9:
        estation = "Otoño"
        break
    case 10:
        estation = "Otoño"
        break
    case 11:
        estation = "Otoño"
        break
    case 12:
        estation = "Invierno"
        break
}
console.log(estation)

// 10. Usa un switch para hacer de nuevo el ejercicio 7
let mes2 = 6
let dias

switch(mes2){
    case 1:
        dias = "31"
        break
    case 2:
        dias = "28"
        break
    case 3:
        dias = "31"
        break
    case 4:
        dias = "30"
        break
    case 5:
        dias = "31"
        break
    case 6:
        dias = "30"
        break
    case 7:
        dias = "31"
        break
    case 8:
        dias = "31"
        break
    case 9:
        dias = "30"
        break
    case 10:
        dias = "31"
        break
    case 11:
        dias = "30"
        break
    case 12:
        dias = "31"
        break
}
console.log("Tienes",dias,"dias")