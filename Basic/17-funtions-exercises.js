/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function sum(a, b){
    console.log(a+b)
}
sum(30,40)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

function numeroMayor(numeros) {
  return Math.max(...numeros);
}

let resultado = numeroMayor([15, 54, 30, 22]);

console.log(resultado);

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function contarVocales(texto) {
  let contador = 0;
  let vocales = "aeiouAEIOU";

  for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i])) {
      contador++;
    }
  }

  return contador;
}
console.log(contador)
// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado