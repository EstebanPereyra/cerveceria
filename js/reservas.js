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

//Creo un objeto donde voy a guardar los nuevos objetos
let reservas = {};

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