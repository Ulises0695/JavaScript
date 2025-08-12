// Map (O un diccionario)

// Declaracion

let myMap = new Map()

console.log(myMap)

// Inicializacion
myMap = new Map([
    ["name","Luis"],
    ["email", "unidad7stp@gmail.com"],
    ["age", 30]
])

console.log(myMap)

// Metodos y propiedades

// Set (se usa para actualizar un elemento o agregarlo)

myMap.set("alias", "patotas")
myMap.set("name", "Lus Ulises")

console.log(myMap)

// get

console.log(myMap.get("name"))
console.log(myMap.get("lastname"))

// has esto se usa para saber si existe, si existe retorna un true y si no un false

console.log(myMap.has("lastname"))
console.log(myMap.has("age"))

//delete

myMap.delete("email")
console.log(myMap)

// Keys, values y enteries
console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

// Size

console.log(myMap.size)

// clear

myMap.clear()

console.log(myMap)

