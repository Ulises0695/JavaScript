// 1. Escribe un comentario en una línea
//Esto es una prueba
// git status muestra el estatus del repositorio, si se han echo cambios

// el git pull origin master te trae los archivos modificados del repositorio

// git log --oneline muestra si te faltan por bajar commits 

// 2. Escribe un comentario en varias líneas
/*PASOS PARA REALIZAR UN COMMIT
    git add (nombre y extencion del archivo, esto solo sube el archivo seleccionado)
    git add . (sube todo el proyecto)
    git commit -m "Comentario" (ESTO ES MUY IMPORTANTE YA QUE ES EL COMENTARIO QUE SIEMPRE DEBE DE IR, 
    SI O SI DEBEN DE LLEVAR COMENTARIIOS LOS COMMIT)
    git push origin master o main (esto envia los cambios al repositorio)

*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let Myname =("Ulises Ramirez")
let Age =(30)
let isStudent =(true)
let UndefinedAga
let nullValue = null
let Año = Symbol("05 junio 1995")
let myBigInt = 132456789987654321123456789n

// 4. Imprime por consola el valor de todas las variables
console.log( Myname )
console.log( Age )
console.log( isStudent )
console.log( UndefinedAga )
console.log( nullValue )
console.log( Año )
console.log( myBigInt )

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof Myname)
console.log(typeof Age)
console.log(typeof isStudent)
console.log(typeof UndefinedAga)
console.log(typeof nullValue)
console.log(typeof Año)
console.log(typeof myBigInt)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
Myname = "Luis"
Age = 31
isStudent = false

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

// 9. A continuación, modifica los valores de las constantes

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse