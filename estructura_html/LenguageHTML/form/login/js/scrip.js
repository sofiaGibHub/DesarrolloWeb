function validarUsuario(event){

    event.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const contrasenia = document.getElementById('contrasenia').value;

    if (usuario==='sofia' && contrasenia==='flores'){
        alert ('inicio de sesion exitoso');
        window.location.href = 'home.html';
    }else {
        alert ('usuario o contrasenia mal');

    }
}   