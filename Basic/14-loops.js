// loops o bucles, es una estructura de control que permite repetir algo

// for

for (let i = 0; i < 5; i++) {
    console.log(`Hola ${i}`)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

for (let i = 0; i < numbers.length; i++) {
    console.log(`Elemento: ${numbers[i]}`)
}

// while

let i = 0
while (i < 5){
    console.log(`Hola ${i}`)
    i++
}

// bucle infinito
/*while (true){

}*/

// do while

i = 0
do{
    console.log(`Hola ${i}`)
    i++
} while(i < 5)

// for of  recorre algo que sea iterable (estructura de datos)
myArray = [1, 2, 3, 4,]

mySet = new Set (["Ulises", "Ramirez", "Uli", 30, true])

myMap = new Map([
    ["name","Luis"],
    ["email", "unidad7stp@gmail.com"],
    ["age", 30]
])

myString = "¡Hola, JavaScript!"

for (let valor of myArray) {
    console.log(valor)
}

for (let valor of mySet) {
    console.log(valor)
}

for (let valor of myArray) {
    console.log(valor)
}

for (let valor of myString) {
    console.log(valor)
}

// NO crear un bucle infinito
// Buenas practicas
// break y continue

for (let i = 0; i < 10; i++) {
    if  (i == 5){
        continue
    } else if (i == 6){
        break
    }
    console.log(`Hola ${i}`)
}