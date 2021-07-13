const jsonLocal = '.json/data.json';

let misDatos = [];
$.getJSON(jsonLocal,function(data,status){
   let misDatos = data;

   pintarCards(misDatos);
})



/////////////////////////////// FUNCTION PARA PINTAR CARDS////////////////////////////////////////////////

const section = document.querySelector('.contenedor');

function pintarCards(array){

    for(let element of array){
        
        let div = document.createElement('div');
        
        div.className = 'testimoniales'
        
        div.innerHTML = `<div class="testimoniales__caja">
                            <img class="testimoniales__img" src=${element.img} alt="testimonio">
                            <div class="class="testimoniales__body">
                            <h5 class="testimoniales__title">${element.name}</h5>
                            <p class="testimoniales__msj"">${element.mensaje}</p>
                            </div>
                        </div>`
        
    
        
        section.appendChild(div);
        
    }
    
}