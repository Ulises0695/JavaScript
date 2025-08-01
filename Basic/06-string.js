// Strings Cadenas de texto

// Concatenacion de cadenas

let myName = "Ulises"
let greeting = "Hola," + myName + "!"
console.log(typeof greeting)

// Longitud (con lapalabra length obtenemos la longitud de la cadena de texto)
console.log(greeting.length)

// Acceso a caracteres (con corchetes [] podemos obetener el caracter que este ocupando el espacio que queremos saber alt + 91)
console.log(greeting [0])
console.log(greeting [1])

// Metodos comunes
console.log(greeting.toUpperCase()) // Conbierte toda la cadena de texto a mayusculas
console.log(greeting.toLowerCase()) //Conbierte toda la cadena de texto en mayusculas
console.log(greeting.indexOf("Ulises")) //Muestra el inicio de la palabra que pongamos en el parentesis
console.log(greeting.includes("Luis")) // Muestra si exite el texto y manda un true si existe o un false si no existe
console.log(greeting.includes("Ulises"))
console.log(greeting.slice(0, 8)) // Muestra hasta el rango de caracteres que indicamos con numeros
console.log(greeting.replace("Ulises", "Luis")) // reemplaza la palabra que le indicamos por otra, la reescribe

// Template literals (plantillas literales) para sacar acento invertido es alt + 94

/*let menssage =  ´Hola, este es mi
curso de JavaScript faltan los acentos invertidos*/