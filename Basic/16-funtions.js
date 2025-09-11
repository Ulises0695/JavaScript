// Funciones

//Simplw
function myFunc(){
    console.log("¡Hola, Funcion!")
}

for (let i = 0; i < 5; i++){
    myFunc()
}


//Con parametros

function myFuncWhitParams(name){
    console.log(`¡Hola, ${name}`)
}

myFuncWhitParams("Ulises")

//Funciones anonimas

const myFunc2 = function(name){
    console.log(`¡Hola, ${name}`)
}

myFunc2("Luis Ulises")

// Arrow funtions

 const myFunc3 = (name) => {
    console.log(`¡Hola, ${name}`)
 }

 myFunc3("JOse Luis")

 const myFunc4 = (name) => console.log(`¡Hola, ${name}!`)

 myFunc4("Concepcion")

 // Parametros

 function sum(a, b){
    console.log(a+b)
 }
 sum(5, 10)
sum(5)
sum()

 function defaulSum(a = 0, b  = 0){
    console.log(a+b)
 }

 // Por defecto
 defaulSum()
 defaulSum(10)
 defaulSum(5, 10)
 defaulSum(b = 5)

 //Retorno de valores

 function mult(a, b){
    return a * b
 }
let result = mult(5, 9)
console.log(result)
console.log(mult(5, 10))

// Funciones anudadas

function extern(){
    console.log("Funcion externa")
    function intern(){
        console.log("Funcion interna")
    }
    intern()
}

extern()
// inter () Error: fuera del scope = fuera del rango de las llaves ({})

//Funciones de orden superior

/*function applyFunc(func, param){
    func(param)
}

applyFunc(myFunc4("Funcion de orden superior"))*/

// forEach

const myArray = [1, 2, 3, 4]

const mySet = new Set(["Luis", "Ulises", "Patotas", 30, true, "ulisesutsem@gmail.com"])

const myMap = new Map([
    ["name", "Luis"],
    ["email", "ulisesutsem@gmail.com"],
    ["age", 30]
])

myArray.forEach(function (value) {
    console.log(value)
})

myArray.forEach((value) => console.log(value))

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))