//Crear un objeto con función constructora
function Reserva(nombre, invitados, fecha) {
    this.nombre = nombre;
    this.invitados   = invitados;
    this.fecha  = fecha;
    this.estado = 'pendiente';
    //Metodo para cambiar el estado
    this.cambioEstado = (estado) => {
        this.estado = estado;
        return alert('Ha cambiado su reserva existosamente a: ' + this.estado);
    // Metodo cambio de fecha de reserva
    this.cambioFecha = (fechaNueva) => {
        this.fecha = fechaNueva;
        return alert('Ha cambiado su fecha de reserva existosamente a: ' + this.fechaNueva);    }
    };
};

// Crear funcion que pida los datos necesarios para la reserva

function hacerReserva () {
    let nombre = prompt('Ingrese su Nombre y Apellido');
    let invitados = parseInt(prompt('Ingrese el número de invitados'));
    let fecha = prompt('Ingrese la fecha de su reserva');

    //con estos datos creo un nuevo objeto y lo devuelvo

    let obj = new Reserva (nombre, invitados, fecha);
    return obj;
};

//Cantidad de reservas
let cantidadReservas = parseInt(prompt('Ingrese la cantidad de reservas en una noche'));

//Creo un array donde voy a guardar los nuevos objetos
let reservas = [];

//Creo un bucle donde en cada vuelta creo un nuevo objeto y lo agrego a mi objeto cantidadReservas
for(let i = 0; i < cantidadReservas; i++) {
    let aux = hacerReserva(i);
    reservas[i] = aux;
};

//Con este bucle puedo recorrer cada propiedad del objeto

for(let prop in reservas) {
    //Puedo ver los objetos que se crearon y guardaron
    console.log(reservas[prop]);
    //Puedo cambiar el estado de todos los objetos creados
    reservas[prop].cambioEstado('Reservado');
};

// CONSIGNA 2:Modificar etiquetas existentes en función del resultado de operaciones

// Nos ubicamos dentro del elemento del DOM donde voy a crear más elementos

let contenedor = document.getElementById('reserva');

//Creamos un bucle donde mostramos todas las reservas realizadas a través del DOOM
for(let element of reservas) {
    //Creamos el elemento div en el DOM
    let div = document.createElement('div');
    //Agregamos HTML dentro del elemento creado
    div.innerHTML = `<h2>¡Hola ${element.nombre}!</h2>
                    <p>Tu reserva para el día <b> ${element.fecha} </b>fue realizada con éxito</p>
                    <p>¡Te esperamos a vos y a tus <b> ${element.invitados} </b>invitados. Nos esforzaremos
                    para que pasen un momento inolvidable!</p>
                    <hr>`
    // Incorporamos lo que creamos dentro de nuestra estructura HTML
    contenedor.appendChild(div);
}

