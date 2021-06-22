//Formulario 1
let formulario1 = document.getElementById("formulario");
formulario1.addEventListener("submit", mostrarModal);

function mostrarModal(e){
    //Cancelamos el comportamiento del evento
    e.preventDefault();
    //Recogo los datos del formulario
    let nombre = document.getElementById('nombre').value;
    let invitados = document.getElementById('cantidad').value;
    let fechaReserva = document.getElementById('fecha').value;
    //Selecciono elemento del DOM donde voy a insertar html
    let modalC = document.getElementById('modalContainer');
    //Tomar elementos del formulario
    modalC.innerHTML =`<div class="modalContenedor__modal modalContenedor__modalClose" id="modal">
                    <p class="modalContenedor__close" id="cerrar">X</p>
                    <img class="modalContenedor__img" src="img/confirmation.png" alt="confirmation">
                    <h2 class='modal__title'>¡Hola <b id="name">${nombre}!</b></h2>
                    <p class='modalContenedor__parrafo'>Tu reserva para el día <b id="diaReserva"> ${fechaReserva} </b>fue realizada con éxito</p>
                    <p class='modalContenedor__parrafo'>¡Te esperamos a vos y a tus <b id="invitados"> ${invitados} </b>invitados. Nos esforzaremos
                    para que pasen un momento inolvidable!</p>
                    </div>`;
    modalC.style.opacity = '1';
    modalC.style.visibility = 'visible';
    modalC.style.transition = '0.8s';                
    modal.classList.toggle('modalContenedor__modalClose');
    
    //Cierra modal al hacer click en el boton cerrar
    cerrar.addEventListener('click', CerrarModal);
    function CerrarModal() {
    modal.classList.toggle('modalContenedor__modalClose');
    setTimeout(function () {
        modalC.style.opacity = '0';
        modalC.style.visibility = 'hidden';
    }, 900);
};}

//Formulario 2
let formulario2 = document.getElementById("formulario-2");
formulario2.addEventListener("submit", mostrarModal2);

function mostrarModal2(e){
    //Cancelamos el comportamiento del evento
    e.preventDefault();
    //Recogo los datos del formulario
    let nombre2 = document.getElementById('nombre-2').value;
    let invitados2 = document.getElementById('cantidad-2').value;
    let fechaReserva2 = document.getElementById('fecha-2').value;
    //Selecciono elemento del DOM donde voy a insertar html
    let modalC = document.getElementById('modalContainer');
    //Tomar elementos del formulario
    modalC.innerHTML =`<div class="modalContenedor__modal modalContenedor__modalClose" id="modal">
                    <p class="modalContenedor__close" id="cerrar">X</p>
                    <img class="modalContenedor__img" src="img/confirmation.png" alt="confirmation">
                    <h2 class='modal__title'>¡Hola <b id="name">${nombre2}!</b></h2>
                    <p class='modalContenedor__parrafo'>Tu reserva para el día <b id="diaReserva"> ${fechaReserva2} </b>fue realizada con éxito</p>
                    <p class='modalContenedor__parrafo'>¡Te esperamos a vos y a tus <b id="invitados"> ${invitados2} </b>invitados. Nos esforzaremos
                    para que pasen un momento inolvidable!</p>
                    </div>`;
    modalC.style.opacity = '1';
    modalC.style.visibility = 'visible';
    modalC.style.transition = '0.8s';                
    modal.classList.toggle('modalContenedor__modalClose');
    
    //Cierra modal al hacer click en el boton cerrar
    cerrar.addEventListener('click', CerrarModal);
    function CerrarModal() {
    modal.classList.toggle('modalContenedor__modalClose');
    setTimeout(function () {
        modalC.style.opacity = '0';
        modalC.style.visibility = 'hidden';
    }, 900);
};}

//Formulario 3
let formulario3 = document.getElementById("formulario-3");
formulario3.addEventListener("submit", mostrarModal3);

function mostrarModal3(e){
    //Cancelamos el comportamiento del evento
    e.preventDefault();
    //Recogo los datos del formulario
    let nombre3 = document.getElementById('nombre-3').value;
    let invitados3 = document.getElementById('cantidad-3').value;
    let fechaReserva3 = document.getElementById('fecha-3').value;
    //Selecciono elemento del DOM donde voy a insertar html
    let modalC = document.getElementById('modalContainer');
    //Tomar elementos del formulario
    modalC.innerHTML =`<div class="modalContenedor__modal modalContenedor__modalClose" id="modal">
                    <p class="modalContenedor__close" id="cerrar">X</p>
                    <img class="modalContenedor__img" src="img/confirmation.png" alt="confirmation">
                    <h2 class='modal__title'>¡Hola <b id="name">${nombre3}!</b></h2>
                    <p class='modalContenedor__parrafo'>Tu reserva para el día <b id="diaReserva"> ${fechaReserva3} </b>fue realizada con éxito</p>
                    <p class='modalContenedor__parrafo'>¡Te esperamos a vos y a tus <b id="invitados"> ${invitados3} </b>invitados. Nos esforzaremos
                    para que pasen un momento inolvidable!</p>
                    </div>`;
    modalC.style.opacity = '1';
    modalC.style.visibility = 'visible';
    modalC.style.transition = '0.8s';                
    modal.classList.toggle('modalContenedor__modalClose');
    
    //Cierra modal al hacer click en el boton cerrar
    cerrar.addEventListener('click', CerrarModal);
    function CerrarModal() {
    modal.classList.toggle('modalContenedor__modalClose');
    setTimeout(function () {
        modalC.style.opacity = '0';
        modalC.style.visibility = 'hidden';
    }, 900);
};}