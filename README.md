# cerveceria
El sitio "cerveceria se devide en cinco (5) secciones": Inicio (index.html), nosotros (nosotros.html), productos(productos.html), reserva (reservas.html), 
contacto(contacto.html) y testimoniales (testimoniales.html).

Para desarrollar el sitio he utilizado las siguientes tecnologías: HTML, CSS, Bootstrap (para algunos estilos específicos), SASS (Para compilar CSS), Javascript y Jquery.
- En la sección productos el sitio cuenta con un simulador de carrito de compras que fue logrado mediante Javascript puro.
- En la sección reservas cuenta con la posibilidad de simular reservas mediante un formulario. La validación se realizó con Javascript. 
Para enviar el formulario, todos los campos deben ser completados, además, no permite ingresar más personas que las permitidas por la mesa, como tampoco permite ingresar 
una fecha anterior a la actual. Una vez completado todos los campos del formulario, se habilita el botón "Reservar" y permite mostrar una pantalla modal con los datos de la persona
que efectuó la reserva, el día y la cantidad de invitados. La simulación se logro con javascript.
- En la sección contacto existe un formulario, donde se validan los campos con Jquery. No permite utilizar el botón de "Contacto" hasta tanto se completen todos los campos.
- La sección testimoniales utiliza JSON estático para traer los datos de las testimoniales. El archivo JSON se encuentra en la siguiente ruta "js/json/..."
