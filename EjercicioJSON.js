// Se creo el objeto
const libro = {
    "titulo": "Cien años de soledad",
    "autor" : "Gabriel Garcia Marquez",
    "Año" : 2012
}

// consulta pra verifica rel tipo de texto
console.log(typeof libro);

// Se convierte a JSON y se comprueba 
const libroJSON = JSON.stringify (libro);
console.log(typeof libroJSON);

// Se sube al local storage 
localStorage.setItem('libro', libroJSON);

//Se baja del local storage 
const libroguardado = localStorage.getItem('libro');

//Se convierte a objeto
const libroobjeto = JSON.parse(libroguardado);

//se muesta el resultado
console.log(libroobjeto);