/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/
 
// 1. Crea un array que almacene cinco animales
let animals = []
animals = ["Perro", "Gato", "Capibara", "Caballo", "Iguana"]
console.log(animals)

// 2. Añade dos más. Uno al principio y otro al final
animals.unshift("Pez")
animals.push("Loro")
console.log(animals)

// 3. Elimina el que se encuentra en tercera posición
animals.splice(2,2)
console.log(animals)

// 4. Crea un set que almacene cinco libros
let libros = new Set()
libros = new Set(["Libro1", "Libro2", "Libro3", "Libro4", "Libro5"])
console.log(libros)

// 5. Añade dos más. Uno de ellos repetido
libros.add("Libro3")
console.log(libros)

// 6. Elimina uno concreto a tu elección
libros.delete("Libro3")
console.log(libros)

// 7. Crea un mapa que asocie el número del mes a su nombre
let meses = new Map()
meses = new Map([
    ["mes 1","enero"],
    ["mes 2", "febrero"],
    ["mes 3","marzo"],
    ["mes 4", "abril"],
    ["mes 5","mayo"],
    ["mes 6", "junio"],
    ["mes 7","julio"],
    ["mes 8", "agosto"],
    ["mes 9","septiembre"],
    ["mes 10", "octubre"],
    ["mes 11","noviembre"],
    ["mes 12", "diciembre"]
])
console.log(meses)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(meses.has("mes 5"))
console.log(meses.get("mes 5"))

// 9. Añade al mapa una clave con un array que almacene los meses de verano
let verano = []
verano[0] = "Junio"
verano[1] = "Julio"
verano[2] = "Agosto"

meses.set("temporada verano",verano) // para agregar un array a un map se ocupa la palabra reservada set con minusculas
console.log(meses)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let myArray = []
myArray[0] = "Esto es primero un array, despues un set y al final se almacena en un map"
console.log(myArray)

let mySet = new Set(myArray)
console.log(mySet)

let arraySet = new Map()

arraySet.set("Array-Set", mySet)
console.log(arraySet)

