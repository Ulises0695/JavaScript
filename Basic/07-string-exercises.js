/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let Name = "Ulises"
let Lastname = Name + " " + "Ramirez" + "!"
console.log(Lastname)

// 2. Muestra la longitud de una cadena de texto
console.log(Name.length)

// 3. Muestra el primer y último carácter de un string
console.log(Name [0])
console.log(Name [5])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(Name.toUpperCase())
console.log(Lastname.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let Practica = `La verdad...
Se pasaron de lanza
ya no tendre con quien echar desmadre 01/08/2025`

console.log(Practica)

// 6. Interpola el valor de una variable en un string
let benja = "Negro"

console.log( `Carnal, ${benja} se pasaron de lanza!` )

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let guiones = "L U R A"
console.log( guiones.replace (/\s+/g, "-") )

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log( Name.includes ("Luis") )

// 9. Comprueba si dos strings son iguales
let NAme2 = "Ulises"

console.log( Name === NAme2 )

// 10. Comprueba si dos strings tienen la misma longitud
console.log(Name.length)
console.log(NAme2.length)