
/**
 * Nosotros crearemos los accesos para los artesanos daremos una contraseña 
 * provicional dado que hay que controlar sus cards de presentación.
 * 
 */

let form = document.getElementById('formArtesano');
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
         
        let artesanos = obtener();
        
        artesanos.forEach(artesanos => {
            if(artesanos.correo == correo.value && artesanos.contrasena == encriptar(pass.value)){
                console.log('Lo encontramos');
                alertaLogin.innerHTML += `
                    <div class="alert alert-success" role="alert">
                        <h3>Bienvenid@ ${artesanos.nombre}</h3> <br>
                    </div>`;
                erroneo = false;
                window.setTimeout(() => {window.location.href = './../pages/artesanoAdmin.html';}, 2000);                 
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
     let objetosJSON = localStorage.getItem("artesanos");
     let artesanos = JSON.parse(objetosJSON);
     
     return artesanos;
}

function encriptar(palabra){
    return btoa(palabra);
}


let artesanos = [
    {
        'id' : 1,
        "nombre" : "Fabi",
        "telefono" : "5566775544",
        "correo" : "fabiArtesano@hotmail.com",
        "contrasena" : encriptar("Fabiola78943!")}
];


/**Descomentar lineas para poner en el local el arrego de los artesanos */
// let artesanosJSON = JSON.stringify(artesanos); //artesano a JSON
// localStorage.setItem("artesanos", artesanosJSON); //a localStorage

