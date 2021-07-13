//Formulario Nº 1

//CÓDIGO PARA VALIDACIÓN DE FORMULARIO Nº 1

//Variables y constantes
const formulario1 = document.getElementById("formulario");
const ReservarBtn = document.getElementById('reservar');
const nombreApellido = document.getElementById('nombre');
const invitadosReserva = document.getElementById('cantidad');
const fechaReserva_1 = document.getElementById('fecha');

// Fecha validar input tipo date - Formulario 1
$(function () { 
    //var dateToday = new Date(); 
    
    $('#fecha').datepicker().datepicker();
    $('#fecha').datepicker('option', 'minDate', mdate());
  
    function mdate(){
        // If current date is 1st or 15th & after 12:00pm disable current date
        var startDate = new Date(), 
        returnVal = 0,
        dateToday = new Date(), 
        getDate = dateToday.getDate(),
        getHour = dateToday.getHours();      
        if(getHour >= 12 && getDate == 1) {
            startDate.setDate(dateToday.getDate() + 14)
        } else if (getHour >= 12 && getDate == 15) {
            startDate.setMonth(dateToday.getMonth() + 1, 1);
        } else if (getHour < 12 && getDate == 13) {
          	startDate.setMonth(dateToday.getMonth() + 1, 1);
        } else {
					
				} 
        return startDate;
    }
});

//Evento 

//Validar formulario
eventListeners();

function eventListeners() {
    //Cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);

    //Campos del formulario
    nombreApellido.addEventListener('blur', validarFormulario);
    invitadosReserva.addEventListener('blur', validarFormulario);
    fechaReserva_1.addEventListener('blur', validarFormulario);
    // fechaReserva_1.addEventListener('blur', validarFecha);

}

function iniciarApp() {
    ReservarBtn.disabled = true;
    ReservarBtn.classList.add('reservar');
}

//validar Fecha
// function validarFecha() {
//     if(fechaReserva_1.value <= nuevoToday) {
//         console.log('fecha reserva anterior a la actual')
//     }
// }

// Valida el formulario
function validarFormulario(e) {
    if(e.target.value.length > 0) {
        const error = document.querySelector('h3.error');
        if(error) {
        error.remove();}
        e.target.style.borderBottomColor = 'black';

    } else {
        e.target.style.borderBottomColor = 'rgb(204, 138, 15)';
        mostrarError();
    }

    if(nombreApellido.value !== '' && invitadosReserva.value !== '' && fechaReserva_1.value !== '') {
        ReservarBtn.disabled = false;
        ReservarBtn.classList.remove('reservar');
    } else {
        console.log('Hay campos por validar');
    }
}

//Mesaje de error

function mostrarError() {
    const mensajeError = document.createElement('h3');
    mensajeError.textContent = 'Todos los campos son obligatorios';
    mensajeError.classList.add('error');

    const errores = document.querySelectorAll('.error');
    if(errores.length === 0) {
        formulario1.appendChild(mensajeError);
    }
}

//CÓDIGO PARA MOSTRAR VENTANA MODAL

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

//FORMULARIO Nª 2

//CÓDIGO PARA VALIDACIÓN DE FORMULARIO Nº 2


//Variables y constantes
const formulario2 = document.getElementById("formulario-2");
const ReservarBtn2 = document.getElementById('reservar-2');
const nombreApellido2 = document.getElementById('nombre-2');
const invitadosReserva2 = document.getElementById('cantidad-2');
const fechaReserva_2 = document.getElementById('fecha-2');

// Fecha validar input tipo date - Formulario 2
$(function () { 
    //var dateToday = new Date(); 
    
    $('#fecha-2').datepicker().datepicker();
    $('#fecha-2').datepicker('option', 'minDate', mdate());
  
    function mdate(){
        // If current date is 1st or 15th & after 12:00pm disable current date
        var startDate = new Date(), 
        returnVal = 0,
        dateToday = new Date(), 
        getDate = dateToday.getDate(),
        getHour = dateToday.getHours();      
        if(getHour >= 12 && getDate == 1) {
            startDate.setDate(dateToday.getDate() + 14)
        } else if (getHour >= 12 && getDate == 15) {
            startDate.setMonth(dateToday.getMonth() + 1, 1);
        } else if (getHour < 12 && getDate == 13) {
          	startDate.setMonth(dateToday.getMonth() + 1, 1);
        } else {
					
				} 
        return startDate;
    }
});



//Evento 

//Validar formulario
eventListeners2();

function eventListeners2() {
    //Cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp2);

    //Campos del formulario
    nombreApellido2.addEventListener('blur', validarFormulario2);
    invitadosReserva2.addEventListener('blur', validarFormulario2);
    fechaReserva_2.addEventListener('blur', validarFormulario2);
    // fechaReserva_1.addEventListener('blur', validarFecha);

}

function iniciarApp2() {
    ReservarBtn2.disabled = true;
    ReservarBtn2.classList.add('reservar');
}

// Valida el formulario
function validarFormulario2(e) {
    if(e.target.value.length > 0) {
        const error = document.querySelector('h3.error');
        if(error) {
        error.remove();}
        e.target.style.borderBottomColor = 'black';

    } else {
        e.target.style.borderBottomColor = 'rgb(204, 138, 15)';
        mostrarError2();
    }

    if(nombreApellido2.value !== '' && invitadosReserva2.value !== '' && fechaReserva_2.value !== '') {
        ReservarBtn2.disabled = false;
        ReservarBtn2.classList.remove('reservar');
    } else {
        console.log('Hay campos por validar');
    }
}

//Mesaje de error

function mostrarError2() {
    const mensajeError = document.createElement('h3');
    mensajeError.textContent = 'Todos los campos son obligatorios';
    mensajeError.classList.add('error');

    const errores = document.querySelectorAll('.error');
    if(errores.length === 0) {
        formulario2.appendChild(mensajeError);
    }
}


// Mostrar MODAL

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

//FORMULARIO Nª 3

//CÓDIGO PARA VALIDACIÓN DE FORMULARIO Nº 3

//Variables y constantes
const formulario3 = document.getElementById("formulario-3");
const ReservarBtn3 = document.getElementById('reservar-3');
const nombreApellido3 = document.getElementById('nombre-3');
const invitadosReserva3 = document.getElementById('cantidad-3');
const fechaReserva_3 = document.getElementById('fecha-3');


// Fecha validar input tipo date - Formulario 3
$(function () { 
    //var dateToday = new Date(); 
    
    $('#fecha-3').datepicker().datepicker();
    $('#fecha-3').datepicker('option', 'minDate', mdate());
  
    function mdate(){
        // If current date is 1st or 15th & after 12:00pm disable current date
        var startDate = new Date(), 
        returnVal = 0,
        dateToday = new Date(), 
        getDate = dateToday.getDate(),
        getHour = dateToday.getHours();      
        if(getHour >= 12 && getDate == 1) {
            startDate.setDate(dateToday.getDate() + 14)
        } else if (getHour >= 12 && getDate == 15) {
            startDate.setMonth(dateToday.getMonth() + 1, 1);
        } else if (getHour < 12 && getDate == 13) {
          	startDate.setMonth(dateToday.getMonth() + 1, 1);
        } else {
					
				} 
        return startDate;
    }
});

//Evento 

//Validar formulario
eventListeners3();

function eventListeners3() {
    //Cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp3);

    //Campos del formulario
    nombreApellido3.addEventListener('blur', validarFormulario3);
    invitadosReserva3.addEventListener('blur', validarFormulario3);
    fechaReserva_3.addEventListener('blur', validarFormulario3);
    // fechaReserva_1.addEventListener('blur', validarFecha);

}

function iniciarApp3() {
    ReservarBtn3.disabled = true;
    ReservarBtn3.classList.add('reservar');
}

// Valida el formulario
function validarFormulario3(e) {
    if(e.target.value.length > 0) {
        const error = document.querySelector('h3.error');
        if(error) {
        error.remove();}
        e.target.style.borderBottomColor = 'black';

    } else {
        e.target.style.borderBottomColor = 'rgb(204, 138, 15)';
        mostrarError3();
    }

    if(nombreApellido3.value !== '' && invitadosReserva3.value !== '' && fechaReserva_3.value !== '') {
        ReservarBtn3.disabled = false;
        ReservarBtn3.classList.remove('reservar');
    } else {
        console.log('Hay campos por validar');
    }
}

//Mesaje de error

function mostrarError3() {
    const mensajeError = document.createElement('h3');
    mensajeError.textContent = 'Todos los campos son obligatorios';
    mensajeError.classList.add('error');

    const errores = document.querySelectorAll('.error');
    if(errores.length === 0) {
        formulario3.appendChild(mensajeError);
    }
}

// Mostrar MODAL
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