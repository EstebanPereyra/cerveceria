//Recogo los datos del formulario
let nombre = document.getElementById('nombre').value;
let invitados = document.getElementById('cantidad').value;
let fechaReserva = document.getElementById('fecha').value;

// Seleccionar elementos del DOM que se manipulana a través de JavaScript
let abrir = document.getElementsByClassName("reservar");
let modalC = document.getElementById('modalContainer');

//Tomar elementos del formulario
modalC.innerHTML = `<div class="modalContenedor__modal modalContenedor__modalClose" id="modal">
                    <p class="modalContenedor__close" id="cerrar">X</p>
                    <img class="modalContenedor__img" src="img/confirmation.png" alt="confirmation">
                    <h2 class='modal__title'>¡Hola <b id="name">${nombre}</b></h2>
                    <p class='modal__parrafo'>Tu reserva para el día <b id="diaReserva"> ${fechaReserva} </b>fue realizada con éxito</p>
                    <p class='modal__parrafo'>¡Te esperamos a vos y a tus <b id="invitados"> ${invitados} </b>invitados. Nos esforzaremos
                    para que pasen un momento inolvidable!</p>
                    </div>`;

//Seleccionar nuevos elementos del DOM creados a través de JavaScript
let cerrar = document.getElementById('cerrar');
let modal = document.getElementById('modal');

//// Crear MODAL

//Bucle que elimina el evento por defecto al hacer click en los botones reservar

for (i = 0; i < abrir.length; i++) {
    abrir[i].addEventListener("click", function (e) {
        e.preventDefault();
    });
};

//Bucle que, al escuchar la función click en los botones reservar, muestra modal

for (x = 0; x < abrir.length; x++) {
    abrir[x].addEventListener("click", MostrarModal);

    function MostrarModal() {
        // Cambiar estilos de modal
        modalC.style.opacity = '1';
        modalC.style.visibility = 'visible';
        modal.classList.toggle('modalContenedor__modalClose');
    }
};

//Cierra modal al hacer click en el boton cerrar
cerrar.addEventListener('click', CerrarModal);
function CerrarModal() {
    modal.classList.toggle('modalContenedor__modalClose');
    setTimeout(function () {
        modalC.style.opacity = '0';
        modalC.style.visibility = 'hidden';
    }, 900);
};

//Cierra modal al hacer click en cualquier lugar fuera de modal
window.addEventListener('click', function (e) {
    console.log(e.target)
    if (e.target == modalC) {
        modal.classList.toggle('modalContenedor__modalClose');

        setTimeout(function () {
            modalC.style.opacity = '0';
            modalC.style.visibility = 'hidden';
        }, 900)
    }
})