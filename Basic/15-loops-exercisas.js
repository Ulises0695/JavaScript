/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let num = 1; num <= 20; num++){
    console.log(`Valor de num: ${num}`)

}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado 5050

let Resultado = 0   // inicializamos una variable donde guardaremos la suma.
for (let Sum = 1; Sum <= 100; Sum++){   // el bucle empieza en 1 y se repite hasta llegar a 100.
 
    Resultado += Sum // en cada iteración se agrega el valor de Sum a Resultado.
} 
console.log(`Sumatoria: ${Resultado}`)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
let par
for (let Sum = 1; Sum < 51; Sum++){

        if (Sum % 2 === 0){ // verifica si el resto de dividir Sum entre 2 es cero (número par). Si es par, se imprime.

            console.log(`Sumatoria: ${Sum}`)
    }
}
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres = ["Jose Luis", "Salvador Leonel", "Concepcion Avila", "Luis Ulises"]
/*nombres[0] = "Jose Luis"
nombres[1] = "Salvador Leonel"
nombres[2] = "Concepcion Avila"
nombres[3] = "Luis Ulises"*/

for (let valor of nombres){
    console.log(valor)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let texto = "Hola Ulises, ¿cómo estás?"
let contador = 0
let vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ"
let i = 0

/*for (let i = 0; i < texto.length; i++){
    if (volcales.includes(texto[i])){
        contador++
    }
}*/

while (i < texto.length) {
    if (vocales.includes(texto[i])) {
        contador++;
    }
    i++;
}

console.log("NUMERO DE VOCALES:", contador)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
myArray = [2, 3, 4, 5]
let producto = 1

for (let i = 0; i < myArray.length; i++){
    producto *= myArray[i]
}

console.log("El producto de todos los numeros es:", producto)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
//let resultado
let num = 5

for (let i = 1; i <= 10; i++){
    //resultado = num *= i
    console.log(`${num} x ${i} = ${num * i}`)
}    

    /*resultado = num *= i
    console.log("El resultado es:", resultado)*/

// 8. Usa un bucle para invertir una cadena de texto
let texto1 = "Ulises"
let invertido = ""

for (let i = texto1.length - 1; i >= 0; i--) {
    invertido += texto1[i]
}

console.log("Texto original:", texto1)
console.log("Texto invertido:", invertido)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let n1 = 0;
let n2 = 1;
let siguiente;
let limite = 10;

console.log("Secuencia de Fibonacci:");

for (let i = 1; i <= limite; i++) {
    console.log(n1);
    siguiente = n1 + n2; // suma los dos anteriores
    n1 = n2;             // avanzamos un paso
    n2 = siguiente;
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let numeros = [3, 7, 12, 5, 18, 25, 9]
let mayoresQueDiez = []

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 10) {
        mayoresQueDiez.push(numeros[i])
    }
}

console.log("Array original:", numeros)
console.log("Números mayores que 10:", mayoresQueDiez)