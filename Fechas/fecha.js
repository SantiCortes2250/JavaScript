const nombre = document.getElementById('nombre')
const fecha = document.getElementById('fecha')

const calc = document.querySelector('#btn-calcular')

const result = document.getElementById('result')
const Edad = document.getElementById('edad')


calc.addEventListener('click', calcular);


function calcular(){

let names = nombre.value;
let birthday_user = fecha.value;
let birthday = birthday_user.split('-');
let current_year = new Date(birthday)
let year = current_year.getFullYear();
let month = current_year.getMonth() + 1  ;
let day = current_year.getDate();

let today = new Date()
let year1 = today.getFullYear();
let month1 = today.getMonth() + 1  ;
let day1 = today.getDate();

let años = (year1 - year)
let mes = (month1 - month)
let dias = (day1 - day)

result.textContent = `${names} usted tiene ${años} años`

if ((años >= 18 && mes >= 0 && dias >= 0) || (años >= 18 && mes >= 0 )){
    Edad.textContent = `Usted es mayor de Edad`
    Edad.style.color = 'mediumturquoise';
}
else {
    Edad.textContent = `Usted es menor de Edad`
    Edad.style.color = 'red';
}


}