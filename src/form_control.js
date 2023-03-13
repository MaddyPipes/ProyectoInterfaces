//Script que validará el formulario de la vista registroUsuario usando la librería de validación de jQuery

$(document).ready(function () {

    $('#register_form').validate({

        //Establecemos clases que se añadan al input en caso de validación positiva o negativa (Para darle estilos)

        errorClass: "error fail-alert",
        validClass: "valid success-alert",

        //Establecemos las reglas que deberán seguir los campos

        rules: {
            name: {
                required: true,
                pattern: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/
            },
            number: {
                required: true
            },
            model: {
                required: true,
                pattern: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/
            },
            description: {
                required: true
            }
        },

        //Establecemos los mensajes que aparecerán en caso de que se incumplan las reglas establecidas

        messages: {
            name: {
                required: "Este campo no puede quedar vacío.",
                pattern: "¡No están permitidos los carácteres especiales!"
            },
            number: {
                required: "Este campo no puede quedar vacío."
            },
            model: {
                required: "Este campo no puede quedar vacío.",
                pattern: "¡No están permitidos los carácteres especiales!"
            },
            description: {
                required: "Este campo no puede quedar vacío."
            }
        }
    });

    //Fuera del validador añadimos métodos adicionales para el formato de la contraseña

    $.validator.addMethod('containsUppercase', function(value) {
        return /[A-Z]/.test(value);
      }, 'La contraseña debe contener al menos una letra en mayúscula.');
    
      $.validator.addMethod('containsNumber', function(value) {
        return /[0-9]/.test(value);
      }, 'La contraseña debe contener al menos un número.');
});
