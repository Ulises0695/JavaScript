// Set La palabra reservada (Set) siempre debe de llevar la S mayuscula
// Set arroja el deletreo de la cadenade texto que ingreses

// declaracion
let mySet = new Set()

//Inicializacion
mySet = new Set (["Ulises", "Ramirez", "Uli", 30, true])

console.log(mySet)

// Metodos comunes

//add (añade al final) y delete (elimina el elemento que nosotros le indiquemos en los parentesis, y si se imprime manda un boolean)

mySet.add("https://github.com/Ulises0695/JavaScript")

console.log(mySet)

mySet.add("https://github.com/Ulises0695/JavaScript")

console.log(mySet)

mySet.delete("https://github.com/Ulises0695/JavaScript")

console.log(mySet)

// Has manda un true si se encuentra el elemento, y manda un false si no se encuentra el elemento

console.log (mySet.has("Uli"))
console.log (mySet.has("Luis"))

// Size (Tamaño)
console.log(mySet.size)

//convertir un set a un array

let myArray = Array.from(mySet)
console.log(myArray)

mySet = new Set(myArray)
console.log(mySet)

mySet.add("Unidad7stp@gmail.com") // El Set No admite datos duplicados, lo que tiene que entrar debe de ser identico para que no lo admite, por que si cambia un bit se terminara insertando
mySet.add("Unidad7stp@gmail.com")

console.log(mySet)