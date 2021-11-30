const URL = 'https://rickandmortyapi.com/api/character/'

const main_card = document.getElementById('main-card')
const template_card = document.getElementById('template-card').content
const select = document.querySelector('.select')

const fragment = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', ()=>{
    fetchAPI()
})

const fetchAPI = ()=>{
    fetch(URL)
    .then(res => res.json())
    .then(producto=>{
        main_card.innerHTML=""
        const arreglo = producto.results

        selectOption(arreglo)
    })
}

const selectOption= arreglo=>{
    arreglo.forEach(data=>{
        const option= document.createElement('option')
        option.setAttribute('value', data.name)
        option.classList.add('option')
        option.textContent=data.name
        fragment.appendChild(option)
    })
    select.appendChild(fragment)
    createCard(arreglo)
    select.addEventListener('change', function (){
        createCard(arreglo)
    })
        
}



const createCard=arreglo=>{
    if(select.value=="todos"){
        main_card.innerHTML=""
            arreglo.forEach(arreglo =>{
            template_card.querySelector('.name-card').textContent=arreglo.name
            template_card.querySelector('.img-card').src=arreglo.image
            template_card.querySelector('.gender-card').textContent=arreglo.gender
            template_card.querySelector('.species-card').textContent=arreglo.species
            const clone = template_card.cloneNode(true)
            fragment.appendChild(clone)
            main_card.appendChild(fragment)
        })
        
        
        
    }else { 
        main_card.innerHTML=""
        const arreglo2 = arreglo.filter(arreglo => arreglo.name === select.value)
            template_card.querySelector('.name-card').textContent=arreglo2[0].name
            template_card.querySelector('.img-card').src=arreglo2[0].image
            template_card.querySelector('.gender-card').textContent=arreglo2[0].gender
            template_card.querySelector('.species-card').textContent=arreglo2[0].species
            const clone = template_card.cloneNode(true)
            fragment.appendChild(clone)
            main_card.appendChild(fragment)
    }

}



