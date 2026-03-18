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

function convertirMayusculas(arreglo) {
  return arreglo.map(function(texto) {
    return texto.toUpperCase();
  })
}

// Ejemplo
console.log(convertirMayusculas(["hola", "mundo", "javascript"]))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function esPrimo(numero) {
  if (numero <= 1) return false; // 0 y 1 no son primos

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false; // tiene un divisor, no es primo
    }
  }

  return true; // no se encontraron divisores
}

// Ejemplos
console.log(esPrimo(7));  // true
console.log(esPrimo(10)); // false

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

function elementosComunes(arr1, arr2) {
  return arr1.filter(elemento => arr2.includes(elemento));
}

// Ejemplo
console.log(elementosComunes([1, 2, 3, 4], [3, 4, 5, 6]));
// [3, 4]

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

function sumaPares(numeros) {
  return numeros
    .filter(num => num % 2 === 0)
    .reduce((suma, num) => suma + num, 0);
}

// Ejemplo
console.log(sumaPares([1, 2, 3, 4, 5, 6])); // 12

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado