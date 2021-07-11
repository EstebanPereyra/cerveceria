const jsonLocal = './json/data.json';

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
        
        div.className = 'card'
        
        div.innerHTML = `<div>
                            <img src=${element.img} alt="testimonio">
                            <h3>${element.name}</h3>
                            <p>${element.mensaje}</p>
                        </div>`
        
    
        
        section.appendChild(div);
        
    }
    
}