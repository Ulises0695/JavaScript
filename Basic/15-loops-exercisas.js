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
const string = "Luis Ulises Ramirez Avila"
let contador = 0

while (contador < string.length){
    if (string.includes(texto[contador])){
        contador ++
    }

}

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

// 8. Usa un bucle para invertir una cadena de texto

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10