
let form = document.getElementById('form');
let correo = document.getElementById("correo");
let pass = document.getElementById('pass');
let alertaLogin = document.getElementById('alertaLogin');



form.addEventListener('submit', e => {
    e.preventDefault();
    
    let valido = false;
    let erroneo = true;
    let alerta = "";
    alertaLogin.innerHTML = "";
    

    if(correo.value == ''){
        alerta += `<h3>Introduzca una dirrección de correo</h3> <br>`;
        valido = true;
    }

    if(pass.value == ''){
        alerta += `<h3>Introducir una contraseña</h3> <br>`;
        valido = true;
    }


    
    if(!valido){
        
        /**Consolta del arreglo y checamos elemento por elemento si conicide*/
        let usuarios = obtener();
        
        usuarios.forEach(usuario => {
            if(usuario.correo == correo.value && usuario.contrasena == encriptar(pass.value)){
                console.log('Lo encontramos');
                alertaLogin.innerHTML += `
                    <div class="alert alert-success" role="alert">
                        <h3>Bienvenid@ ${usuario.nombre}</h3> <br>
                    </div>`;
                erroneo = false;
                window.setTimeout(() => {window.location.href = './../index.html';}, 2000);  
                
            }else{

            }

        });

        if(erroneo){
            alerta = `<h3>No pudimos encontrar tu cuenta o </h3> <br>
                      <h3>la contraseña es incorrecta. Vuelve a intentarlo</h3> <br>
                      <h3>o haz clic en "¿Olvidaste tu contraseña?"</h3> <br>`
            valido = true;    
        }
    }

   
   
    if(valido){
        alertaLogin.innerHTML += `
        <div class="alert alert-danger" role="alert">
            ${alerta}
        </div>`;
        pass.value = '';
    
    }


});


function obtener(){
    let objetosJSON = localStorage.getItem("usuarios");
    let usuarios = JSON.parse(objetosJSON);
    
    return usuarios;
}

function encriptar(palabra){
    return btoa(palabra);
}
