
/*-----------------------------------------------------------------
 ||  Funcion addItem        
 -----------------------------------------------------------------*/
 
 function addItem(item){
    const itemHTML = 
    `
    <div class="card mb-3 vistaproducto" style="max-width: 800px;">
    <div class="row no-gutters">
      <div class="col-md-4 vistaproductoimg">
        <img src="${item.imagen}" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body cardvistaproducto">
          <h4 class="card-title">${item.nombre}<br> <span>Nombre del artesano</span></h4>
          <p class="card-tex"> Materiales: Cuerditas <br> Medidas: ${item.medida} cm <br> Categoría: ${item.categoria}</p>
          <p id="preciovistaProducto"> $ ${item.precio}</p>
          <div class="btn-vistaproducto">
            <button type="button" class="btn btn-secondary">¡Lo quiero!</button>
            <button type="button" class="btn btn-secondary">Contactar al artesano</button>
            </div>
        </div>
      </div>
    </div>
   </div> 
    `
   ;
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}//addItem


let productosJSON = localStorage.getItem("objetos"); //Lo tomamos del local
let productos = JSON.parse(productosJSON);

console.log(productos)

let url = window.location;
let idUrl = url.search.split('=')[1];

console.log(idUrl)


productos.forEach(element => {
    console.log(element.id)
    if(element.id == idUrl){
        console.log('si')
        addItem(element)
    }

});


