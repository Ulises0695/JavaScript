/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let a = 1
let b = 2
let c = 3
let d = 4
let e = 5
let f = 6

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let myVariable = 3

myVariable += 3
myVariable -= 3
myVariable *= 3
myVariable /= 3
myVariable %= 3
myVariable **= 3

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log( a < b )
console.log( f > b )
console.log( a == 1 )
console.log( 6 == f )
console.log( a <= 6 )

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log( a > b )
console.log( f < b )
console.log( a == c )
console.log( a >= f )
console.log( a = false )

// 5. Utiliza el operador lógico and
console.log ( 20 < 25 && 7 < 15)

// 6. Utiliza el operador lógico or
console.log( 5 < 10 || 15 > 20)

// 7. Combina ambos operadores lógicos
console.log( 18 < 20 && 21 > 20 || 7 < 9)

// 8. Añade alguna negación
console.log(!false)
console.log( !(5 > 10 && 15 > 20))

// 9. Utiliza el operador ternario
const estaSoliado = true
estaSoliado ? console.log ( "Hace calor !") : console.log("Esta lloviendo")

// 10. Combina operadores aritméticos, de comparáción y lógicas
let valor1 = 10
let valor2 = 5

let valor3 = valor1 + valor2
let valor4 = valor3 > valor2 - valor1 && valor1 < valor3 

console.log(valor4)