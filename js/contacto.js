//Variables y constantes

const enviarBtn = $('#enviar');
//Expresión para validar un correo electrónico
const expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

$( document ).ready(function() 
{
    enviarBtn.click(function(){
        const nombre = $('#nombre').val();
        const telefono = $('#telefono').val();
        const correo = $('#correo').val();
        const consulta = $('#consulta').val();
        if(nombre == ""){
        //Si campo nombre está vacío muestra el mensaje
             $("#mensajeNombre").fadeIn("slow");
                return false;
        } //en otro caso, el mensaje no se muestra
        else{
            $("#mensajeNombre").fadeOut();}
        if(telefono == ""){
        //Si campo teléfono está vacío muestra el mensaje
            $("#mensajeTelefono").fadeIn("slow");
            return false;
        } //en otro caso, el mensaje no se muestra
        else{
            $("#mensajeTelefono").fadeOut();}
        //Si el campo correo está vacío muestra el mensaje o no tiene formato de correo
        if(correo == "" || !expr.test(correo)){
            $("#mensajeCorreo").fadeIn("slow");
            return false;
            }
        else{
          $("#mensajeCorreo").fadeOut();}
        //Si el campo consulta está vacío muestra el mensaje
        if(consulta == ""){
            $("#mensajeConsulta").fadeIn("slow");
            return false;
            }
        else{
          $("#mensajeConsulta").fadeOut();}
    });

});
