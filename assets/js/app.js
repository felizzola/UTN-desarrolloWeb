// Formulario de contacto (validaciones):

(function(){
    let formulario = document.getElementById('formulario');
    let nombre = formulario.nombre;
    let tel = formulario.tel;
    let email = formulario.email;
    let mensaje = formulario.mensaje;
    var error = document.getElementById('error');
    
    function validarNombre(e){
        let expresion = /^[a-zA-ZÀ-ÿ\s]{2,40}$/;
        if(nombre.value == '' || nombre.value == null || !nombre.value.match(expresion)){
            error.style.display = 'block';
            error.innerHTML += '<li>Por favor, complete el nombre</li>';
            e.preventDefault();
        } else {
            error.style.display = 'none';
        }
    }
    
    function validarTel(e){
        let valores = /^[0-9]+$/;
        if(tel.value == '' || tel.value == null || !tel.value.match(valores)){
            error.style.display = 'block';
            error.innerHTML += '<li>Por favor, ingrese correctamente su teléfono.</li>';
            e.preventDefault();
        } else {
            error.style.display = 'none';
        }
    }
    
    function validarEmail(e){
        let validarEmail = /^[a-zA-z0-9_.+-]+@[a-zA-Z]+\.[a-zA-Z]+$/;
        let valorEmail = email.value;
        if(valorEmail == '' || valorEmail == null || !valorEmail.match(validarEmail)){
            error.style.display = 'block';
            error.innerHTML += '<li>Por favor, ingrese correctamente el email.</li>';
            e.preventDefault();
        } else {
            error.style.display = 'none';
        }
    }
    
    function validarMensaje(e){
        if(mensaje.value == '' || mensaje.value == null){
            error.style.display = 'block';
            error.innerHTML += '<li>Por favor, ingrese un mensaje.</li>';
            e.preventDefault();
        } 
    }
    
    function validarFormulario(e){
        error.innerHTML = '';
        validarNombre(e);
        validarTel(e);
        validarEmail(e);
        validarMensaje(e);
    }
    
    formulario.addEventListener('submit', validarFormulario);
    }())
    
    
    

