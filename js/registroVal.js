
let form = document.getElementById('form');
let nombre = document.getElementById("nombre");
let telefono = document.getElementById('telefono');
let correo = document.getElementById('correo');
let pass = document.getElementById('pass');
let confpass = document.getElementById('confpass');
let alertaDiv = document.getElementById('alertaRegistro');


let usuarios = [];
let usuariosJSON = JSON.stringify(usuarios); //produtos a JSON
localStorage.setItem("usuarios", usuariosJSON); //En localStorage



form.addEventListener('submit', e => {
    e.preventDefault();

    let valido = false;
    let alerta = "";
    alertaDiv.innerHTML = "";
    
    let regexpNombre = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
    let regexpTel =/^[0-9]*$/
    let regexpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(!regexpNombre.test(nombre.value) || nombre.value.length <= 2 || nombre.value.length == 0 || nombre.value.length > 20){
        alerta += `<h3>¡Nombre no valido!</h3> <br>`;
        valido = true;
    }

    if(!regexpTel.test(telefono.value)  || telefono.value.length < 10 || telefono.value.length >= 12){
        alerta += `<h3>¡Número no valido! </h3><br>`;
        valido = true;
    }

    if(!regexpEmail.test(correo.value) || correo.value.length == 0 || correo.value.length >= 200){
        alerta += `<h3>¡Correo electrónico no valido!</h3> <br>`;
        valido = true;
    }

    if(!regexPass.test(pass.value) || pass.value.length == 0 || pass.value.length > 20){
        alerta += `<h3>¡Contraseña no valida! </h3><br>`;
        valido = true;
    }

    if(pass.value != confpass.value ){
        alerta += `<h3> ¡Las contraseñas no coinciden!</h3>`;
        valido = true;    
    }



    if(valido){
        alertaDiv.innerHTML += `
        <div class="alert alert-danger" role="alert">
            ${alerta}
        </div>`;
    
    }

    if(!valido){
        alertaDiv.innerHTML += `
        <div class="alert alert-success" role="alert">
            <h3> ¡Tu registro ha sido exitoso! </h3>
        </div>`;
        guardarRegistro();
    }


})


function guardarRegistro(){
    

    let usuario = {
        'nombre': nombre.value,
        'telefono': telefono.value,
        'correo': correo.value,
        'contrasena': encriptar(pass.value)
    };
    
    let usuarios = obtener();

    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    nombre.value = '';
    telefono.value = '';
    correo.value = '';
    pass.value = '';
    confpass.value = '';
}

  
function obtener(){
    
    let objetosJSON = localStorage.getItem("usuarios");      
    let usuarios = JSON.parse(objetosJSON);
   
    return usuarios;
}

function encriptar(palabra){
    return btoa(palabra);
}
