function valida() {
    var marta = "chavez2727@gmail.com";
    var passmarta = "12345";
    var usuario = document.getElementById('user').value;
    var password = document.getElementById('pass').value;
    if (usuario == '') {
        alert("El usuario no puede estar vacio");
        return false;
    }
    if (password == '') {
        alert("El password no puede estar vacio");
        return false;
    }
    if (usuario != marta || password != passmarta) {
        alert("Usuario o contraseña no corresponden");
        return false;
    }

    alert("Credenciales correctas");
}