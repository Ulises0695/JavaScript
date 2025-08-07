// array (estructuras de datos)

// Declaracion
let myArray = []
let myArray2 = new Array()
let myArray3 = new Array()

console.log (myArray)
console.log (myArray2)

// Inicializacion
myArray = [1]
myArray2 = new Array(1)
myArray3 = new Array(1, 2, 3) // array mas puro

console.log (myArray)
console.log (myArray2)
console.log (myArray3)

myArray =[1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log (myArray)
console.log (myArray2)

myArray =["Ulises", "Ramirez", "Uli", 30, true]
myArray2 = new Array("Ulises", "Ramirez", "Uli", 30, true)

console.log (myArray)
console.log (myArray2)

myArray2 = new Array(3)
myArray2[0] = "Luis"
myArray2[1] = "Ulises"
myArray2[2] = "Ramirez"

console.log(myArray2)

// Metodos comunes
myArray = []

// push y pop
myArray.push("Luis") // el push agrega un elemento al ultimo array (agrega un lugar extra)
myArray.push("Ulises")
myArray.push("Ramirez")
myArray.push("30")

console.log(myArray)

myArray.pop() // el elemnto pop elimina el ultimo elemento del array
console.log(myArray)

// Shift y Unshift

myArray.shift() // shift borra el primer elemento del array 
console.log(myArray)

myArray.unshift("Avila") // unshift agrega uno o mas elementos al principio del array
console.log(myArray)

// Length (Es una propiedad) Arroja la magnitud del array o cuanto mide

console.log(myArray.length)

//clear

myArray = []
myArray.length = 0 // alternativa que no se debe de usar
console.log(myArray)

// Slice retorna solo las casillas del array que le indicamos con el rango

myArray.push("Luis","Ramirez","Avila","30")
let myNewArray = myArray.slice (1,3)
console.log(myNewArray)

// Splice elimina los elementos que se encuentran en el rango que le indicamos

myArray.splice(1,3)
console.log(myArray)