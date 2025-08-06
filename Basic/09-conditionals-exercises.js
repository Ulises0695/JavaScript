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

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7