
const Contenedor_Principal= document.querySelector('#contenedor_principal');
const contenedor_card = document.querySelector('#contenedor_card')
const footer=document.querySelector('.pie')
const PlantillaCarrito=document.getElementById('plantilla-carrito').content
const contenedorPrecio=document.getElementById('Contenedor-precio')
const contenedor_table=document.querySelector('#contenedorTable')



const comprarBoton = document.querySelector('.comprar-boton')
comprarBoton.addEventListener('click', ()=>{
    comprar()
})


const fragment = document.createDocumentFragment()


let productos=[
    {precio: 150000 , id: 1,  title: "Whey-Protein", img: "img/7.png"},
    {precio: 200000, id: 2, title: "Nitro-Tech", img: "img/protein3.png"},
    {precio: 195000, id: 3, title: "Protein-Platinum",  img: "img/platinum.png"},
    {precio: 130000, id: 4, title: "Protein-Whey", img: "img/protein2.png"},
    {precio: 100000, id: 5, title: "Protein-3 whey", img: "img/protein3.png"},
    {precio: 145000, id: 6,  title: "Pro-Gainer",  img: "img/platinum.png"}
]


Contenedor_Principal.addEventListener('click', e=>{
    addCarrito(e)
})

create_card();


    function create_card(){
        productos.forEach(producto =>{
            
            const card=document.createElement('div');
            const contenedor_img =document.createElement('div');
            const contenedor_info=document.createElement('div');
            const card_titulo=document.createElement('h2');
            const card_img=document.createElement('img');   
            const card_precio=document.createElement('p');
            const card_btn=document.createElement('button');

        
        card.classList.add('card');
        card.setAttribute('id','card');
        contenedor_img.classList.add('contenedor-img');
        contenedor_img.setAttribute('id', 'contenedor-img');
        contenedor_info.classList.add('contenedor-info');
        contenedor_info.setAttribute('id', 'contenedor-info')
        card_titulo.setAttribute('id','titulo');
        card_titulo.textContent=producto.title; 
        card_img.setAttribute('id', 'image')
        card_img.setAttribute('src', producto.img);
        card_precio.classList.add('precio')
        card_precio.textContent=`${producto.precio}`;
        card_btn.classList.add('btn-agregar')
        card_btn.setAttribute('id', 'btn')
        card_btn.dataset.id=producto.id
        card_btn.textContent="Añadir al Carrito";


        card.appendChild(contenedor_img);
        contenedor_img.appendChild(card_img);
        card.appendChild(contenedor_info);
        contenedor_info.appendChild(card_titulo);
        contenedor_info.appendChild(card_precio);
        contenedor_info.appendChild(card_btn);
        fragment.appendChild(card)
    })
        contenedor_card.appendChild(fragment)
        Contenedor_Principal.appendChild(contenedor_card);

}

const addCarrito = e=>{
    
    if(e.target.classList.contains('btn-agregar')){
        setCarrito(e)
    }
    e.stopPropagation() 
}


function setCarrito(e){
    const button = e.target 
    
    const item=button.closest('.card')
    
    const itemTitle = item.querySelector('h2').textContent 
    const itemPrecio= item.querySelector('.precio').textContent
    const itemImg = item.querySelector('img').src
    const itemId= item.querySelector('button').dataset.id
    addItem(itemImg, itemPrecio, itemTitle, itemId) 
}

function addItem(itemImg, itemPrecio, itemTitle, itemId){
    const elementoTitulo=footer.getElementsByClassName('titulo-td') 
    for (let i = 0; i < elementoTitulo.length; i++) { 
        if(elementoTitulo[i].innerText === itemTitle){
            let elementoCantidad=elementoTitulo[i].parentElement.querySelector('.cantidad')
           
            
            elementoCantidad.value++;

            actualizarPrecio()
           
            return
        }
        
    }

 
    const contenedor_table=document.createElement('div')
    contenedor_table.setAttribute('id', 'contenedorTable')
    
    PlantillaCarrito.querySelector('img').src = itemImg 
    PlantillaCarrito.querySelector('span').textContent=itemPrecio
    PlantillaCarrito.querySelectorAll('td')[2].textContent=itemTitle
    PlantillaCarrito.querySelectorAll('td')[0].textContent=itemId

    const clone = PlantillaCarrito.cloneNode(true)
   
    fragment.appendChild(clone)
    contenedor_table.appendChild(fragment)
    footer.appendChild(contenedor_table)

    
    contenedor_table.querySelector('.button-delete')
    .addEventListener('click',  eliminarItem) 
    
    contenedor_table.querySelector('.cantidad')
    .addEventListener('change', cambiarCantidad)
    
    actualizarPrecio()
}


function actualizarPrecio(){
    let total=0;


    const contenedor_Precio=contenedorPrecio.querySelector('p')
    const contenedorTable= document.querySelectorAll('#contenedorTable')

    contenedorTable.forEach(contenedorTable =>{

        

        const precioTable=contenedorTable.querySelector('span')

        
        const valorPrecio = Number(precioTable.textContent.replace('$', '')) 

       
        const cantidadTable=contenedorTable.querySelector('input')
        const valorCantidad=Number(cantidadTable.value)
        total = total + valorPrecio * valorCantidad
    })

    

    contenedor_Precio.innerHTML=`${total}$` 

    

    
}




function eliminarItem(event){ 
    const button = event.target 

    button.closest('#contenedorTable').remove()
    actualizarPrecio()
}




function cambiarCantidad(event){
    const input=event.target 
    if(input.value <=0){ 
        input.closest('#contenedorTable').remove()
        actualizarPrecio()
    }
    
    actualizarPrecio() 
}

//Funcion de comprar

function comprar(){

    
    const exito=document.querySelector('.exito')
    
    footer.innerHTML=""

    actualizarPrecio()

    
    exito.style.top = '50px'
    setTimeout(() => {
        exito.style.top = '-50px'
        
    }, 2000);
    
   

   
}


//Busqueda 
const input_buscar = document.querySelector("#buscar");
const caja_busqueda = document.querySelector("#caja-buscador");


// Filtro de busqueda 

document.addEventListener('keyup', input_buscar =>{
    buscador_interno(input_buscar)
})


function buscador_interno(){

    const filtro = input_buscar.value.toUpperCase();
    const li = caja_busqueda.getElementsByTagName("li");

    //Recorriendo elementos a filtrar mediante los li

    for (i = 0; i < li.length; i++) {
        
        const a = li[i].getElementsByTagName("a")[0];
        const textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filtro) > -1){

            li[i].style.display = "";
            caja_busqueda.style.display = "block";

            if (input_buscar.value === ""){
                caja_busqueda.style.display = "none";
            }

        }else{
            li[i].style.display = "none";
        }

        
    }


}

// Funcion para mostrar caja de busqueda 






