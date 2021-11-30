let nombre = document.getElementById("Nombre_prod"); //input
let medida = document.getElementById("Medida_prod"); //input
let categoria = document.getElementById("Categoria_prod"); //select
let precio = document.getElementById("Precio_prod"); //input
let imagen = document.getElementById("Imagen_prod"); //select
let descripcion = document.getElementById("Descripcion_prod"); //input
let alertas = document.getElementById("alerta"); //div

function SubirNuevo(){
  
//----------------------------Expresiones regulares
  let validar = false;
  let nuevaAlerta = "";
  alertas.innerHTML = "";

  let tnombre = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
  let tdescripcion = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
  let tPrecio =/^[0-9]*$/;


  //--------------------------Campo Nombre
  if(!tnombre.test(nombre.value) || nombre.value.length <= 2 || nombre.value.length == 0){
    nuevaAlerta += ('<h3>¡Nombre no válido!</h3>  <br>');
    validar = true;
  }

  //--------------------------Campo Medida
  if(!tPrecio.test(medida.value) || medida.value < 5 || medida.value.length == 0 || medida.value >= 40){
    nuevaAlerta += ('<h3>¡Especifica una medida!</h3> <br>');
    validar = true;
  }
  
  //--------------------------Campo Categoria
  if(categoria.value=="Categoria:"||categoria.value==""){
    nuevaAlerta += ('<h3>¡Elige una categoría!</h3> <br>');
    validar = true;
  }

  //--------------------------Campo Precio
  if(!tPrecio.test(precio.value) || precio.value <= 50 || precio.value.length == 0 || precio.value >= 500){
    nuevaAlerta += ('<h3>¡Especifica precio!</h3> <br>');
    validar = true;
  }

  //---------------------------------------Campo Imagen
  
  if(imagen.value == "0"){
    nuevaAlerta += ('<h3>¡Selecciona una imagen!</h3> <br>');
    validar = true;
  }
  

  //--------------------------Campo Descripcion
  if(!tdescripcion.test(descripcion.value) || descripcion.value.length == 0 || descripcion.value.length > 200){
    nuevaAlerta += ('<h3> ¡Agrega una descripción!</h3>  <br>');
    validar = true;
  }
  
  //------------------------------Validacion de formulario correcto

  if(validar){
    alertas.innerHTML += `
        <div class="alert alert-danger" role="alert">
            ${nuevaAlerta}
        </div>`;
    
  }
  if(!validar){
    alertas.innerHTML += `
        <div class="alert alert-success" role="alert">
            <h3> ¡Formulario Correcto! </h3>
        </div>`;
        
    
    datos = obtener();
    
    let nuevoProducto = {
     
      'id': (datos.length + 1),
      'nombre': nombre.value,
      'imagen': imagen.value,
      'medida': medida.value,
      'categoria': categoria.value,
      'precio':precio.value + '.00',
      'descripcion': descripcion.value
      
    };

    guardar(datos,nuevoProducto);
        
        
    nombre.value = "";
    medida.value = "";
    categoria.value = "";
    precio.value = "";
    imagen.value = "";
    descripcion.value = "";
        
    location.reload();
  }
}


function obtener(){
    
  let objetosJSON = localStorage.getItem("objetos");      
  let productos = JSON.parse(objetosJSON);
 
  return productos;

}

function guardar(productos,nuevoProducto){

  productos.push(nuevoProducto);
  
  let productosJSON = JSON.stringify(productos); //produtos a JSON
  localStorage.setItem("objetos", productosJSON);
}
