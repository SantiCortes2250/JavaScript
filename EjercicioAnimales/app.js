// 1. Mostrar todos los animales cuya inicial sea la letra B
// 2. Mostrar todos los animales que tengan más de 5 años.
// 3. Mostrar todos los animales que sean de tipo ave y tengan más de 10 años.
// 4. Muestre un Array con los nombres de todos los animales mamíferos de color negro.
// 5. Muestre un Array donde se excluyan los animales de color blanco.
const main_card = document.getElementById('main-card')
const template_card = document.getElementById('template-card').content
const card = document.querySelector('.Card')
const name_card = document.querySelector('.name-card');
const type_card = document.querySelector('.type-card');
const age_card = document.querySelector('age.card');
const color_card = document.querySelector('.color-card');

const botonB = document.getElementById('butonInicialB')
const botonAños = document.getElementById('CincoAños')
const botonAves = document.getElementById('Ave')
const botonMamiferos = document.getElementById('MamiferosNegros')
const botonblancos = document.getElementById('ExcluirBlancos')


botonB.addEventListener('click', InicialB);
botonAños.addEventListener('click', cincoAños);
botonAves.addEventListener('click', Aves);
botonMamiferos.addEventListener('click', Mnegros);
botonblancos.addEventListener('click', ExcluirBlancos);





const fragment = document.createDocumentFragment()



const animales = [
    {name:"Lobo", type:"Mamifero", age:5,color:"Gris"},
    {name:"Zorro", type:"Mamifero", age:2,color:"Amarillo"},
    {name:"Gato", type:"Mamifero", age:7,color:"Negro"},
    {name:"Caballo", type:"Mamifero", age:3,color:"Café"},
    {name:"León", type:"Mamifero", age:12,color:"Café"},
    {name:"Elefante", type:"Mamifero", age:13,color:"Gris"},
    {name:"Jirafa", type:"Mamifero", age:9,color:"Amarillo"},
    {name:"Tigre", type:"Mamifero", age:5,color:"Amarillo"},
    {name:"Ballena", type:"Mamifero", age:3,color:"Azul"},  
    {name:"Búho", type:"Ave", age:13,color:"Café"},
    {name:"Gallina", type:"Ave", age:9,color:"Blanco"},
    {name:"Águila", type:"Ave", age:4,color:"Rojo"},
    {name:"Perro", type:"Mamifero", age:5,color:"Blanco"},
    {name:"Toro", type:"Mamifero", age:12,color:"Negro"},
    {name:"Oveja", type:"Mamifero", age:13,color:"Blanco"},
    {name:"Hombre", type:"Mamifero", age:9,color:"Piel"},
  ];



function recorrer_animales(){
    main_card.innerHTML= "";
    animales.forEach(animal =>{
        template_card.querySelector('.name-card').textContent=animal.name
        template_card.querySelector('.type-card').textContent=animal.type
        template_card.querySelector('.age-card').textContent=animal.age
        template_card.querySelector('.color-card').textContent=animal.color

        const clonar = template_card.cloneNode(true)
        fragment.appendChild(clonar)
        main_card.appendChild(fragment)

    })
}

recorrer_animales()


function InicialB(){
    main_card.innerHTML= "";
    animales.forEach(element =>{
        if(element.name[0] === "B"){
        template_card.querySelector('.name-card').textContent=element.name
        template_card.querySelector('.type-card').textContent=element.type
        template_card.querySelector('.age-card').textContent=element.age
        template_card.querySelector('.color-card').textContent=element.color

        const clonar = template_card.cloneNode(true)
        fragment.appendChild(clonar)
        main_card.appendChild(fragment)

        }
        

    })
}


function cincoAños(){
    main_card.innerHTML= "";
    animales.forEach(element =>{
        if(element.age > 5){
        template_card.querySelector('.name-card').textContent=element.name
        template_card.querySelector('.type-card').textContent=element.type
        template_card.querySelector('.age-card').textContent=element.age
        template_card.querySelector('.color-card').textContent=element.color

        const clonar = template_card.cloneNode(true)
        fragment.appendChild(clonar)
        main_card.appendChild(fragment)
        }
        
    })
}

function Aves(){
    main_card.innerHTML= "";
    animales.forEach(element =>{
        if(element.type === "Ave" && element.age > 10){
        template_card.querySelector('.name-card').textContent=element.name
        template_card.querySelector('.type-card').textContent=element.type
        template_card.querySelector('.age-card').textContent=element.age
        template_card.querySelector('.color-card').textContent=element.color


        const clonar = template_card.cloneNode(true)
        fragment.appendChild(clonar)
        main_card.appendChild(fragment)

        }

    })
}

function Mnegros(){
    main_card.innerHTML= "";
    animales.forEach(element =>{
        if(element.type === "Mamifero" && element.color === "Negro"){
        template_card.querySelector('.name-card').textContent=element.name
        template_card.querySelector('.type-card').textContent=element.type
        template_card.querySelector('.age-card').textContent=element.age
        template_card.querySelector('.color-card').textContent=element.color


        const clonar = template_card.cloneNode(true)
        fragment.appendChild(clonar)
        main_card.appendChild(fragment)
        const arrayMnegros = [element.name, element.type, element.age, element.color]
        console.log(arrayMnegros);

        }

    })
}

function ExcluirBlancos(){
    main_card.innerHTML= "";
    animales.forEach(element =>{
        if(element.color !== "Blanco"){
        template_card.querySelector('.name-card').textContent=element.name
        template_card.querySelector('.type-card').textContent=element.type
        template_card.querySelector('.age-card').textContent=element.age
        template_card.querySelector('.color-card').textContent=element.color


        const clonar = template_card.cloneNode(true)
        fragment.appendChild(clonar)
        main_card.appendChild(fragment)
        const ExcluirB = [element.name, element.type, element.age, element.color]
        console.log(ExcluirB);

        }

    })
}
















  


  
  
  
  
  

