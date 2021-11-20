
/*-----------------------------------------------------------------
 ||  Funcion addItem        
 -----------------------------------------------------------------*/
function addItem(item){
    const itemHTML = 
    `
    <div class=" col-sm-12 col-md-6 col-lg-4 col-xl-4">
      <div class="card tamañoCartProducto" >
          <a href="./vistaProducto.html">
            <img src="${item.img}" class="card-img-top" alt="image">
          </a>
          <div class="card-body elementosCardProducto">
              <a href="./vistaProducto.html"><h2 class="card-title">${item.name}</h2></a>
              <div class="cardPrecio">
                <a href="./vistaProducto.html"><h3 class="card-title">$${item.price} MXN</h3></a>
                <h3 >${item.size}</h3>
              </div>
              <h3>${item.category} </h3>
              <p class="card-text">${item.description}</p>
              <a href="./vistaProducto.html" class="btn elementosCardProducto_btn" id="btnComprar"> ¡ Comprar ! </a>
          </div>
      </div>
      </div> `
    
   ;

    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}//addItem


/*-----------------------------------------------------------------
 ||  Funcion addItem        
 -----------------------------------------------------------------*/
function filtrado(productos,filtro){
    const itemsContainer = document.getElementById("list-items");
        
    if( filtro === 'Todos'){
        itemsContainer.innerHTML = '';
        productos.forEach(objeto => {
            addItem(objeto);
        });
    }
    else{
        itemsContainer.innerHTML = '';
        productos.forEach(objeto => {
            if (objeto.category === filtro) {
                addItem(objeto);
            }//if
        });//forEach
    }

}//filtrado

/*-----------------------------------------------------------------
 ||  Funcion menu de cuadro        
 -----------------------------------------------------------------*/
function cuadro(){
    let div = document.getElementById('contenedorCategorias');
    div.innerHTML = '';
    div.innerHTML = `
    <div id="menuCambio" class="card " style="width: 20em;">
        <div class="card-header" id="menuCategorias"><h3>Categorías</h3></div>
        <ul class="list-group list-group-flush ">
            
            <li class="listaCategorias"><button type="button" class="btn categoria">Todos</button></li>
            <li class="listaCategorias"><button type="button" class="btn categoria">Caricaturas</button></li>
            <li class="listaCategorias"><button type="button" class="btn categoria">Celebridades</button></li>
            <li class="listaCategorias"><button type="button" class="btn categoria">Mascotas</button></li>
            <li class="listaCategorias"><button type="button" class="btn categoria">Personajes</button></li>
            <li class="listaCategorias"><button type="button" class="btn categoria">Personalizados</button></li>
            <li class="listaCategorias"><button type="button" class="btn categoria">Superhéroes</button></li>
            
            
        </ul>
    </div><!---->`;
    
    
    const menu = document.querySelectorAll('.categoria');
    
    menu.forEach(function(categoria){
    categoria.addEventListener('click', (e) =>{
        let seleccion = e.currentTarget.innerHTML; 
        seleccion = seleccion.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
        filtrado(productos,seleccion);
    })
    });

}//menuCuadro

/*-----------------------------------------------------------------
 ||  Funcion menu de dropdown        
 -----------------------------------------------------------------*/
function lista(){
    let div = document.getElementById('contenedorCategorias');
    div.innerHTML = '';
    div.innerHTML = `
    <div class="dropdown listaCategoriasDrop ">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
            Categorías
        </button>
        <div class="dropdown-menu menuListaCategorias" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item elementoMenuListaCategorias" href="#">Todos</a>
            <a class="dropdown-item elementoMenuListaCategorias" href="#">Caricaturas</a>
            <a class="dropdown-item elementoMenuListaCategorias" href="#">Celebridades</a>
            <a class="dropdown-item elementoMenuListaCategorias" href="#">Mascotas</a>
            <a class="dropdown-item elementoMenuListaCategorias" href="#">Personajes</a>
            <a class="dropdown-item elementoMenuListaCategorias" href="#">Personalizados</a>
            <a class="dropdown-item elementoMenuListaCategorias" href="#">Superhéroes</a>
        </div>
    </div>`;

    const lista = document.querySelectorAll('.elementoMenuListaCategorias');

    lista.forEach(function(categoria){
        categoria.addEventListener('click', (e) =>{
            let seleccion = e.currentTarget.innerHTML; 
            filtrado(productos,seleccion);
        })
    });
}//menuLista

//dependiendo la pantalla se muestra un elemento
function elementoCategoria(){
    let pantallaw = screen.width;
    let pantallah = screen.height;    
    
    if (pantallaw < 481){
        lista();
    }else if( pantallaw < 769){
        lista();
    }else if(pantallaw < 1025){
        cuadro();        
    }else if(pantallaw < 1281){
        cuadro();
    }else{
        cuadro();
    }
}//elementoCategoria

/*-----------------------------------------------------------------
 ||  Lista de objetos         
 -----------------------------------------------------------------*/
/**
 * objetosTexto: datos duros de productos
 * objetosJSON: datos de productos en JSON
 * productosJSON: datos de producto en JSON desde el local
 * productos: datos de producto en array 
*/

//  let objetosTexto = [
//     {
//         'id': 1,
//         'name':'Batman',
//         'img':'../img/muñequitos/batman.jpg',
//         'size':'25 cm',
//         'category':'Superheroes',
//         'price':'200.00',
//         'description':'Batman es un superheroe que te acompañara en todas tus aventuras, recuerda que puedes personalizarlo a tu gusto'},
//     {
//         'id': 2,
//         'name':'Baby Yoda',
//         'img':'../img/muñequitos/bby.jpg',
//         'size':'20 cm',
//         'category':'Superheroes',
//         'price':'350.00',
//         'description':'Si cool quieres ser, Baby Yoda debes tener, desde una galaxia lejana, recuerda que puedes personalizarlo a tu gusto'},
//     { 
//         'id': 3,
//         'name':'Carlitos',
//         'img':'../img/muñequitos/carlitos.jpg',
//         'size':'20 cm',
//         'category':'Caricaturas',
//         'price':'350.00',
//         'description':'¿Recuerdas los momentos en familia al mirar los Rugrats? Como olvidar al adorable Carlitos, recuerda que puedes personalizarlo a tu gusto'},
//     {
//         'id': 4,
//         'name':'Coraline',
//         'img':'../img/muñequitos/carol.jpg',
//         'size':'22 cm',
//         'category':'Caricaturas',
//         'price':'420.00',
//         'description':'¿Y podré llevar guantes de color verde fosforecente y botas de agua amarillas? recuerda que puedes personalizarlo a tu gusto'},
//     {
//         'id': 5,
//         'name':'Homero',
//         'img':'../img/muñequitos/homero.jpg',
//         'size':'15 cm',
//         'category':'Personajes',
//         'price':'120.00',
//         'description':'Desde Sprinfield hasta tus manos, el icónico personaje amarillo,  este llavero te hara decir "WooHoo".'},
//     {
//         'id': 6,
//         'name':'Harry Potter Team',
//         'img':'../img/muñequitos/hp.jpg',
//         'size':'20 cm',
//         'category':'Personajes',
//         'price':'600.00',
//         'description':'¿Por qué siempre que pasa algo están ustedes tres? Este trio de amigos magicos te van a encantar.'},
//     {
//         'id': 7,
//         'name':'Perrito',
//         'img':'../img/muñequitos/dog2.jpg',
//         'size':'25 cm',
//         'category':'Mascotas',
//         'price':'420.00',
//         'description':'Una mejor forma de recordar y llevar contigo no solo a tu mascota, sino a tu amigo de cuatro patas a donde sea.'},
//     {
//         'id': 8,
//         'name':'Erizo',
//         'img':'../img/muñequitos/erizo.jpg',
//         'size':'20 cm',
//         'category':'Mascotas',
//         'price':'130.00',
//         'description':'Recordemos a nuestras mascotas con algo pequeñito pero con mucho amor, recuerda que puedes personalizarlo a tu gusto'},
//     {
//         'id': 9,
//         'name':'Arnols y Helga',
//         'img':'../img/muñequitos/heyh.jpg',
//         'size':'25 cm',
//         'category':'Caricaturas',
//         'price':'380.00',
//         'description':'¿Alguna vez amaste a alguien en secreto como Helga? No hay mejor presente que Arnold y Helga, recuerda que puedes personalizarlo a tu gusto'},
//     {
//         'id': 10,
//         'name':'Iron Maiden',
//         'img':'../img/muñequitos/iron.jpg',
//         'size':'20 cm',
//         'category':'Celebridades',
//         'price':'420.00',
//         'description':'El regalo perfecto para los verdaderos Iron Maiden Lover 💕, recuerda que puedes personalizarlo a tu gusto'},
//     {
//         'id': 11,
//         'name':'Friend',
//         'img':'../img/muñequitos/friend.jpg',
//         'size':'18 cm',
//         'category':'Personalizados',
//         'price':'200.00',
//         'description':'Un regalo de totalmente diferente para tus seres queridos, recuerda que puedes personalizarlo a tu gusto'},
//     {
//         'id': 12,
//         'name':'Muñequita de Chinos',
//         'img':'../img/muñequitos/chinos.jpg',
//         'size':'20 cm',
//         'category':'Personalizados',
//         'price':'600.00',
//         'description':'Muñequita con mejillas sonrojadas y cabello chino, recuerda que puedes personalizarlo a tu gusto'},
// ];

// let objetosJSON = JSON.stringify(objetosTexto); //produtos a JSON
// localStorage.setItem("objetos", objetosJSON); //En localStorage

let productosJSON = localStorage.getItem("objetos"); //Lo tomamos del local
let productos = JSON.parse(productosJSON);



/*-----------------------------------------------------------------
 ||  Mandar a imprimir en pag cada elemento        
 -----------------------------------------------------------------*/
   
let url = window.location;
let catUrl = url.search.split('=')[1];

filtrado(productos,catUrl);

/*-----------------------------------------------------------------
 ||  Saber que elemento pongo, cuadro o lista       
 -----------------------------------------------------------------*/
elementoCategoria();


/*-----------------------------------------------------------------
 ||  redimension de panalla   
 -----------------------------------------------------------------*/

window.addEventListener("resize", function(e){
    elementoCategoria();
});


