// Array de productos
const productos = [{ id: 1,
                     img: 'img/productos/1.jpg',  
                     producto: 'Rubia clásica', 
                     descripcion: 'Lorem Lorem',
                     precio: 150,
                     },
                  {  id: 2,  
                    img: 'img/productos/2.jpg',
                    producto: "Chop clásico artesanal", 
                    descripcion: 'Lorem Lorem',
                    precio: 350 },
                  {  id: 3,  
                    img: 'img/productos/3.jpg',
                    producto: "Refrezcante playa", 
                    descripcion: 'Lorem Lorem',
                    precio: 500},
                  {  id: 4,
                    img: 'img/productos/4.jpg',  
                    producto: "Rubia Premium" , 
                    descripcion: 'Lorem Lorem',
                    precio: 450},
                  { id: 5,  
                    img: 'img/productos/5.jpg',
                    producto: "Colorada Premium", 
                    descripcion: 'Lorem Lorem',
                    precio: 220 },
                  {  id: 6,  
                    img: 'img/productos/6.jpg',
                    producto: "Beer Limon", 
                    descripcion: 'Lorem Lorem',
                    precio: 350 },
                  {  id: 7,  
                    img: 'img/productos/7.jpg',
                    producto: "Colorada clásica",
                    descripcion: 'Lorem Lorem',
                    precio: 300},
                  {  id: 8,
                    img: 'img/productos/8.jpg',
                    producto: "Sout premium",
                    descripcion: 'Lorem Lorem',
                    precio: 475}];

// Nos ubicamos en el elemento del DOM donde vamos a crear más elemtos                    
let galeria = document.getElementById('galeria');

// Creamos elementos dentro del DOM

for(let element of productos) {
    //Creamos el elemento div
    let div = document.createElement('div');
    //Agregar clase al div creado
    div.className = 'galeria__cerveza';
    // Agregamos HTML dentro del elemento div creado
    div.innerHTML = `<img src='${element.img}' class='galeria__img'>
                    <h3 class="galeria__title">${element.producto}</h3>
                    <p class="galeria__descripcion">${element.descripcion}</p>
                    <div class="galeria__precio">
                        <a href="#" class="galeria__link">$${element.precio}</a>
                    </div>`
    // Agregamos el elemento div creado (con el contenido html) dentro del contenedor con clase galeria
    galeria.appendChild(div);
};