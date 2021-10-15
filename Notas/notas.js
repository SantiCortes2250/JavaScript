const nota1 = document.getElementById('nota1')
const nota2 = document.getElementById('nota2')

const calc = document.querySelector('#btn-calcular')

const nota = document.getElementById('nota')

const result = document.getElementById('result')

calc.addEventListener('click', calcular);

function calcular(){
    let n1 = parseFloat(nota1.value);
    let n2 = parseFloat(nota2.value);
    let oper = 0.25*n1 + 0.35*n2 / 0.4
    nota.textContent = `Usted requiere una nota minima de: ${oper.toFixed(1)}`
    nota.style.color = 'white';
    
}