//variables y costantes
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaProductos = document.querySelector('#lista-productos');
let articulosCarrito = [];

cargarEventsListeners();

function cargarEventsListeners() {
    //Agregar al carrito un producto
    listaProductos.addEventListener('click', agregarProducto);
    // Elimina cursos del carrito
    carrito.addEventListener('click', eliminarProducto);

    // Muestras los productos del LocalStorage
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
        carritoHTML();
    });

    //Vaciar carrito
    vaciarCarritoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        articulosCarrito = [];
        limpiarHtml(); // Elimina todo el HTML
    });

}

//Funciones

function agregarProducto(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const productoSeleccionado = e.target.parentElement.parentElement;
        leerDatosProducto(productoSeleccionado);
    }
}


// Elimina productos del carrito
function eliminarProducto(e) {
    if(e.target.classList.contains('borrar-producto')) {
    const productoID = e.target.getAttribute('data-id');
    //Elimina del array
    articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoID);
    // console.log(articulosCarrito);
    carritoHTML(); //Iterar sobre el carrito y mostrar HTML
        }
           }

// Lee el contenido del producto al que le dimos click y extrae su contenido

function leerDatosProducto(producto) {
    console.log(producto);

    //Objeto con el contenido del producto
    const infoProducto = {
        imagen: producto.querySelector('img').src,
        nombre: producto.querySelector('h5').textContent,
        precio: producto.querySelector('#precio span').textContent,
        id : producto.querySelector('button').getAttribute('data-id'),
        cantidad: 1,
    }

    //Revisa si un elemento ya existe en el carrito

    const existe = articulosCarrito.some(producto => producto.id === infoProducto.id);
    if(existe) {
        //Actualizamos la cantidad
        const productos = articulosCarrito.map(producto => {
            if(producto.id === infoProducto.id) {
                producto.cantidad++;
                return producto; // retorna el objeto actualizado
            } else {
                return producto; // retorna el objeto que no esta aún en el carrito
            }
        });
        articulosCarrito = [...productos];

    } else {
        //Agregamos el producto al carrito
        articulosCarrito = [...articulosCarrito, infoProducto];
    }
    
    carritoHTML();
}

    //Muestra el carrito de compras en el HTML

    function carritoHTML() {
        //Limpia el HTML
        limpiarHtml();

        //Recorre el carrito y agrega el HTML
        articulosCarrito.forEach(producto => {
            const row = document.createElement('tr');
            row.innerHTML = `<td> <img src="${producto.imagen}" width='100'></td>
                             <td class="tablePersonalizada">${producto.nombre}</td>
                            <td class="tablePersonalizada">$${producto.precio}</td>
                            <td class="tablePersonalizada">${producto.cantidad}</td>
                            <td class="tablePersonalizada"><a href="#" class="borrar-producto btn btn-dark" data-id="${producto.id}">X</a></td>`;
        
        //Agrega el HTML del Carrito en el tag <tbody>
        contenedorCarrito.appendChild(row);
        })
         //Sincronizar con Storage
         sincronizarStorage();
    }

    function sincronizarStorage() {
        localStorage.setItem('carrito', JSON.stringify(articulosCarrito));

    };

   
    //Eliminar los productos del <tbody>

    function limpiarHtml() {
        while(contenedorCarrito.firstChild){
            contenedorCarrito.removeChild(contenedorCarrito.firstChild)
        }
    };