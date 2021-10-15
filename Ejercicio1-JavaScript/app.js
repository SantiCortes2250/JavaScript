//Console.log es para imprimir por consola
//console.log('hola');
//alert es para mandar una alerta
//alert('hola mundo');

//DOM es Document objects model


//Escribir texto en la pagina
//document.write('hello world');

//Variables con palabra reservada let

let name = 'kevin';
let age = 4;
let status = true;
//Arreglo
let array = [1, 2, 3];
//Object es lo mismo que un diccionario
let object = {
    color: 'blue',
    language: 'spanish'
}

//typeof sirve para saber el tipo de dato de una variable
console.log(typeof age);

//el parse sirve para convertir un tipo de dato a otro en una variable

//Con el queryselector se pone el # en el id para que sepa que es un id
const title = document.querySelector
('#h1-title');

//En getelementbyid reconoce automaticamente el id y no es necesario poner el #
//const title1 = document.getElementById
//('h1-title');

//Al imprimir la variable completa imprime toda la etiqueta
//console.log(title);

//Se debe poner textContent para que imprima el contenido de la variable
console.log(title.textContent);
//Poner color a la variable title
title.style.color = 'blue';
// Todo elemento del DOM se tiene que convertir en una variable