const nombre = document.getElementById('nombre')
const edad = document.getElementById('edad')
const result = document.getElementById('result');
const div = document.querySelector('#btn-ingresar')

div.addEventListener('click', ingresarDatos);

function ingresarDatos(){
    let names = nombre.value;
    let ages = edad.value;

    if (ages >= 18){
        result.textContent = `${names} Usted puede votar`;

    }
    else {
    result.textContent = `${names} usted es menor de edad, por lo tanto no puede votar`;

    }
    

}