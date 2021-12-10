// Creamos la constantas para despues llamarlas

//Metemos en una constante el link del api
const URL = 'https://rickandmortyapi.com/api/character/?page=7'


const main_card = document.getElementById('main-card')
// Al template-card se le pone el .content para traer el contenido
const template_card = document.getElementById('template-card').content

//Llamos al select el cual lo vendra con todos los personajes
// por defecto y con este escogeremos cada uno de los personajes
const select = document.querySelector('.select')


// Se crea el fragment vacio, dentro del cual un nodo del DOM puede ser 
//adicionado para construir un nuevo arbol DOM fuera de pantalla.
const fragment = document.createDocumentFragment()



//Creamos la funcion fetchApi la cual esta encargada de llamar los datos de la URL que contiene el API
const fetchAPI = ()=>{
    fetch(URL)
    .then(res => res.json())
    .then(data=>{
        //Se vacea el contenedor de la tarjetas
        main_card.innerHTML=""
        // Creamos una constante arreglo la cual le mandamos la data.results que son
        // los datos del api, en este caso algunos datos de los personajes
        const arreglo = data.results


        //Llamamos a seleccionar opcion para que el api nos traiga todas las tarjetas o las que deseamos    
        seleccionarOpcion(arreglo)
    })
    
}

fetchAPI()



//Llamamos a seleccionar opcion para que el api nos traiga todas las tarjetas o las que deseamos
const seleccionarOpcion= arreglo=>{
    //Con el forEach mediante el arreglo vamos a recorrer la data, que serian los datos del API
    arreglo.forEach(data=>{
        //Se crea la constante option mediante el document.createElement para elegir un personaje
        const option= document.createElement('option')
        //A la option se le da el atributo que es el nombre del personaje
        option.setAttribute('value', data.name)
         //Le damos una clase a la option
        option.classList.add('option')
        //El contenido de la opcion es igual al nombre del personaje
        option.textContent=data.name
        //Le pasamos la option al fragment mediante el appendChild
        fragment.appendChild(option)
    })
    //Al select le pasamos el fragment el cual contiene los nombres que serian las opciones
    select.appendChild(fragment)
    //El evento change dispara el select para que cuando se seleccione una opcion de personaje 
    //se renderice por medio del crearTarjeta que contiene el arreglo que lleva todos los personajes
    select.addEventListener('change', function (){
        crearCards(arreglo)
    })
        
}


//Creamos la constante a la cual le pasamos el arreglo el cual es una funcion de flecha 
const crearCards=arreglo=>{
    //Si se selecciona la opcion todos, la cual esta predeterminada me traera todas las tarjetas
    if(select.value=="todos"){
        //Se vacea todo el contenedro de las tarjetas
        main_card.innerHTML=""
        //recorremos las cards que estan en el arreglo mediante el forEach
            arreglo.forEach(arreglo =>{
                //A la imagen la llamamos mediante la etiqueta src
            template_card.querySelector('.img-card').src=arreglo.image
            template_card.querySelector('.nombre-card').textContent=arreglo.name
            template_card.querySelector('.genero-card').textContent=arreglo.gender
            template_card.querySelector('.especie-card').textContent=arreglo.species
            //Creamos la constante clonar a la cual le pasamos el template_card 
            //para que por medio de el cloneNode(true), se clonen las tarjetas
            const clonar = template_card.cloneNode(true)
            //al fragment le pasamos la constante clonar
            fragment.appendChild(clonar)
            //Al main card le pasamos todo el 
            //contenido de el fragment que seria la clonacionn de cada una de las tarjetas
            main_card.appendChild(fragment)
        })
        
        
    //Si no se cumple la condicion, la cual dice que si se selecciona la opcion todos, 
    //se va al el else el cual llama solo a una tarjeta
    }else { 
        //Vaciamos el contenido principal que seria el contenedor de las tarjetas
        main_card.innerHTML=""
        //Creamos la contante, arreglo2, la cual va a filtrar los nombres que estan en el arreglo, 
        //el cual por medio de una funcion de flecha va a seleccionar el nombre de cada 
        //tarjeta por medio de la opcion que elijamos
        const arreglo2 = arreglo.filter(arreglo => arreglo.name === select.value)
        //En este caso llamos al cada una de la etiquetas que estan en el 
        //arreglo2 el caul las traera en la posicion 0
            template_card.querySelector('.img-card').src=arreglo2[0].image
            template_card.querySelector('.nombre-card').textContent=arreglo2[0].name
            template_card.querySelector('.genero-card').textContent=arreglo2[0].gender
            template_card.querySelector('.especie-card').textContent=arreglo2[0].species
            //Creamos la constante clonar a la cual le pasamos el template_card 
            //para que por medio de el cloneNode(true), se clonen las tarjetas
            const clonar = template_card.cloneNode(true)
            //al fragment le pasamos la constante clonar
            fragment.appendChild(clonar)

            //Al main card le pasamos todo el 
            //contenido de el fragment que seria la clonacionn de cada una de las tarjetas
            main_card.appendChild(fragment)
    }

}



