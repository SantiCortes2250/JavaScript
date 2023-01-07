//Variable globales

const formularioUI = document.querySelector('#formulario');
const listaActividadesUI = document.querySelector('#listaActividades');


let Actividades = [];


//Funciones

const crearItem = (actividad) =>{
    let item = {
        actividad : actividad,
        estado: "sin terminar"
    }

    Actividades.push(item);

    return item;
    


}


const guardarDb = () =>{

    localStorage.setItem('rutina', JSON.stringify(Actividades));
    PintarDB();

}

const PintarDB = () =>{

    listaActividadesUI.innerHTML = '';

    Actividades = JSON.parse(localStorage.getItem('rutina'));

    if(Actividades === null){
        Actividades = [];
    }else{
        Actividades.forEach(element => {

            if(element.estado === "terminado"){
            listaActividadesUI.innerHTML += `<div class="alert alert-success"
             role="alert"><span class="material-icons">account_circle</span><b>${element.actividad}</b> - ${element.estado}
            <span class="float-right"><span class="material-icons">done</span>
            <span class="material-icons">delete</span></span> </div>` 

            }else{
            listaActividadesUI.innerHTML += `<div class="alert alert-danger"
             role="alert"><span class="material-icons">account_circle</span><b>${element.actividad}</b> - ${element.estado}
            <span class="float-right"><span class="material-icons">done</span>
            <span class="material-icons">delete</span></span> </div>` 

            }
            
        });
    }

}


const eliminarDB = (actividad) =>{
    let indexActividades;
    Actividades.forEach((element, index) =>{
        if(element.actividad == actividad){
            indexActividades = index;
        }



    });

    Actividades.splice(indexActividades, 1);
    guardarDb();

}

const editarDB = (actividad) =>{

    let index = Actividades.findIndex((element) => element.actividad === actividad);

    Actividades[index].estado = "terminado";

    guardarDb();

}

//Eventos

formularioUI.addEventListener('submit', (e) =>{
    e.preventDefault();
    let actividadUI = document.querySelector('#actividad').value;


    
    crearItem(actividadUI);
    guardarDb();

    formularioUI.reset();
   
})


document.addEventListener('DOMContentLoaded', PintarDB);


listaActividadesUI.addEventListener('click', (e) =>{
    e.preventDefault();

    

    if(e.target.innerHTML === 'done' || e.target.innerHTML === 'delete'){
        let texto = (e.path[2].childNodes[1].innerHTML);
        if(e.target.innerHTML === 'delete'){
            eliminarDB(texto);

        }
        if(e.target.innerHTML === 'done'){
            editarDB(texto);
        }
    }
})
