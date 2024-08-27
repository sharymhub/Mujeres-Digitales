// Variables & condicionales
let Temperatura = 50
if (Temperatura > 30) {
    console.log("Hace Calor") 
} else { 
    console.log("Hace frio")
}

// Ciclos
for (let numero =1; numero <= 10; numero ++){
    console.log (numero)
}

// Arreglos
let colores =["Rosado", "Blanco","Negro"]
console.log (colores[0])

//Suma
const suma = function (a, b) {
    return a + b;
};

console.log(suma(7, 3));

// JSON
const libro = {
    "titulo": "Cien años de soledad",
    "autor" : "Gabriel Garcia Marquez",
    "Año" : 2012
}
console.log(typeof libro);
console.log (libro);

///Conversion a string
const libroJSON = JSON.stringify (libro);
console.log(typeof libroJSON);
console.log (libroJSON)

//Desafio final
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 114]

function NumerosPares(numeros){
    const pares = [];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0){
            pares.push(numeros[i]);
        }
    }
    return pares;
}

const numPares = NumerosPares(numeros);
const imprimir_pares = JSON.stringify (numPares)
console.log (imprimir_pares)





