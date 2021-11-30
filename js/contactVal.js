let nombre = document.getElementById("nombre");
let email = document.getElementById("correo");
let tel = document.getElementById("tel");
let mensaje = document.getElementById("mensaje");
let form = document.getElementById("form");
let alertas = document.getElementById("alerta");

form.addEventListener("submit", e=>{
 e.preventDefault()
  
 let valido = false
 let alerta = ""
 alertas.innerHTML = ""
 let temail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
 let tnombre = /^[a-zA-Z ]*$/
 let ttel =/^[0-9]*$/

  if(!tnombre.test(nombre.value) || nombre.value.length <= 2 || nombre.value.length == 0){
      alerta += `<h3> ¡Nombre no valido! </h3><br>`
      valido = true
  }
  if(!temail.test(email.value) || email.value.length==0 || email.value.length >= 320){
    
    alerta += `<h3>¡Correo electrónico no valido! </h3><br>`
    valido = true
  }

  if(!ttel.test(tel.value) || tel.value.length < 10 || tel.value.length == 0 || tel.value.length >= 12){

    alerta += `<h3>¡Teléfono no valido! </h3><br>`
    valido = true
  }

  if(mensaje.value.length >= 150 || mensaje.value.length == 0){

    alerta += `<h3>¡Mensaje no valido! </h3> <br>`
    valido = true

  }

  if(valido){

    alertas.innerHTML += `
    <div class="alert alert-danger" role="alert">
        ${alerta}
    </div>`;
  }

  if(!valido){

    alerta +=`¡Formulario Correcto!`
    alertas.innerHTML  += `
    <div class="alert alert-success" role="alert">
        <h3> ${alerta} </h3>
    </div>`;
    var dir = document.createElement("a");
    dir.href = `mailto:nav.attar.contact@gmail.com?&body=${nombre.value}%20%0D%0A %20%0D%0A${mensaje.value} %20%0D%0A %20%0D%0A %20%0D%0A Correo cliente: ${email.value} %20%0D%0A %20%0D%0A %20%0D%0A Teléfono cliente: ${tel.value}`;
    dir.click();
  }

  // var dir = document.createElement("a");
  // dir.href = `mailto:nav.attar.contact@gmail.com?subject=${asunto.value}&body=${nombre.value}%20%0D%0A %20%0D%0A${mensaje.value} %20%0D%0A %20%0D%0A %20%0D%0A Correo cliente: ${email.value}`;
  // dir.click();
})





