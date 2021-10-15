// Palabras reservadas para crear variables
/*
let num1, num2
let operation;
let result;
*/

//getElementById pide por Id
const number1 = document.getElementById('number1')
const number2 = document.getElementById('number2')

//querySelector para buscar cualquier etiqueta que no sea Id

const rest = document.querySelector('#btn-rest')
const mult = document.querySelector('#btn-mult')
const div = document.querySelector('#btn-div')

const result = document.getElementById('result')

sum.addEventListener('click', sumar);

function sumar(){
    let num1 = parseFloat(number1.value);
    let num2 = parseFloat(number2.value);
    result.textContent = `Su resultado es: ${num1+num2}`;
    result.style.color = 'red';
    
}

rest.addEventListener('click', restar);

function restar(){
    let num1 = parseFloat(number1.value);
    let num2 = parseFloat(number2.value);
    result.textContent = `Su resultado es: ${num1-num2}`;
    result.style.color = 'red';
    

}

mult.addEventListener('click', multi);

function multi(){
    let num1 = parseFloat(number1.value);
    let num2 = parseFloat(number2.value);
    result.textContent = `Su resultado es: ${num1*num2}`;
    result.style.color = 'red';
    

}

div.addEventListener('click', dividir);

function dividir(){
    let num1 = parseFloat(number1.value);
    let num2 = parseFloat(number2.value);
    if (num2 == 0){
        result.textContent = `No se puede dividir por 0`;
        result.style.color = 'red';
    }
    else {
    result.textContent = `Su resultado es: ${num1/num2}`;
    result.style.color = 'blue';
    }
    

}

/*
console.log(calculate(5,8,1));

function calculate(n1,n2,operation) {
    switch (operation) {
        case 1: return sum();
        case 2: return substract();
        case 3: return multiply();
        case 4:  return division();
        default:
            break;
    }
}


function sum(n1, n2) {
    return n1 + n2

}
function substract(n1, n2) {
    return n1 - n2

}
function multiply(n1, n2) {
    return n1 * n2

}
function division(n1, n2) {
    return n1 / n2

}

console.log(sum(5,2));
console.log(substract(10,2));
console.log(multiply(8,2));
console.log(division(5,4));
*/