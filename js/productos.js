//Declaramos un array de productos para almacenar objetos
const productos = [];

//Crear clase constructora de mi producto
class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        return (this.precio*21/100) + this.precio;
    }
}

do {
    let nombre = prompt('Ingrese el nombre del producto');
    let precio = prompt('Ingrese el precio');
    let cervezas = new Producto(nombre, precio);
    productos.push(cervezas);
    console.log(cervezas.sumaIva());
    condicion = confirm('¿Quieres seguir cargando productos?')
} while (condicion != false);

console.log(productos);


/*productos.push(new Producto("Rubia clásica",'150'));
productos.push(new Producto("Chop clásico artesanal", "350"));
productos.push(new Producto("Refrezcante playa", "500"));
productos.push(new Producto("Rubia Premium", "450"));
productos.push(new Producto("Colorada Premium", "220"));
productos.push(new Producto("Beer Limon", "350"));
productos.push(new Producto("Colorada clásica", "300"));
productos.push(new Producto("Sout premium", "475"));*/

//Iteramos el array con for...of para modificarlos a todos
/*for (const producto of productos) {
    producto.sumaIva();}

    console.log(Producto([0]));*/


// Array de productos    
/*
const productos = [{ id: 1,  producto: "Rubia clásica", precio: 150 },
                  {  id: 2,  producto: "Chop clásico artesanal", precio: 350 },
                  {  id: 3,  producto: "Refrezcante playa"  , precio: 500},
                  {  id: 4,  producto: "Rubia Premium" , precio: 450},
                  { id: 5,  producto: "Colorada Premium", precio: 220 },
                  {  id: 6,  producto: "Beer Limon", precio: 350 },
                  {  id: 7,  producto: "Colorada clásica"  , precio: 300},
                  {  id: 8,  producto: "Sout premium" , precio: 475}];*/
