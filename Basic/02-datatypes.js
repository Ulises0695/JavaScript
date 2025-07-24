//TIPO DE DATOS PRIMITIVOS

// (cadena de texto) String 
let Myname = "Ulises"
let alias = "Huawei"
let email = "unidad7stp@gmail.com"

// Numeros (number)
let age = 30 // Entero
let height = 1.74 // Decimal

//Boleanos (boolean) (verdadero o falsos)
let isTeacher = false
let isStudent = true

// Undefined (No definidos)
let UndefinedValue
console.log(UndefinedValue)

//Null (Nulos Ausencias de valor)
let nullValue = null

//Symbol (Valores unicos)
let MySymbol = Symbol("mySymbol")

/*BigInt (Numeros ENTEROS Grandes , se usan para representar numeros grandes, 
que estan fuera de rango de los number)*/

let myBigInt = (1234567899876543210)
let myBigInt2 = 123456789n

//Mostramos los tipos de datos
console.log(typeof Myname)
console.log(typeof alias)
console.log(typeof email)

console.log(typeof age)
console.log(typeof height)

console.log(typeof isTeacher)
console.log(typeof isStudent)

console.log(typeof UndefinedValue)

console.log(typeof nullValue)

console.log(typeof MySymbol)

console.log(typeof myBigInt)
console.log(typeof myBigInt2)