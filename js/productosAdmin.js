
/*-----------------------------------------------------------------
 ||  Funcion addItem        
 -----------------------------------------------------------------*/
 
 function addItem(item){
    const itemHTML = 
    `
    <div class="cardcom">
                                        
    <div class="pIndividual1">
      <img src="${item.imagen}" class="card-img-top" alt="image" id="imago">
    </div><!--pIndividual-->
        <div class="cardInfo">
          <h5 class="card-title">Nombre: ${item.nombre}</h5>
          <h5 class="card-title">Medida: ${item.medida}cm</h5>
          <h5 class="card-title">Categoría: ${item.categoria}</h5>
          <h5 class="card-title">Precio: $${item.precio}</h5>
        </div><!--cardInfo-->
        <div class="ap">
          <!-- <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"> -->
          <div class="eliminar">
          <a href="#" class="btn"><img src="./../img/iconos/social/Eliminar-btn.jpg" id="eliminar-btn" alt=""></a>
          </div><!--Eliminar-->
          <div class="descript">
          <p class="card-text">${item.descripcion}</p>
        </div><!--descript-->
        <!-- </div> -->
        </div><!--ap-->
        <!-- <div id="list-items">
    
        </div> -->
    </div><!--cardcom-->
    `
   ;
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}//addItem




/*-----------------------------------------------------------------
 ||  Lista de objetos         
 -----------------------------------------------------------------*/
/**
 * objetosTexto: datos duros de productos
 * objetosJSON: datos de productos en JSON
 * productosJSON: datos de producto en JSON desde el local
 * productos: datos de producto en array 
*/

 let objetosTexto = [
    {
        'id':'1',
        "nombre":"Batman",
        'imagen':'../img/muñequitos/batman.jpg',
        'medida':'25',
        'categoria':'Superhéroes',
        'precio':'200.00',
        'descripcion':'Batman es un superheroe que te acompañara en todas tus aventuras, recuerda que puedes personalizarlo a tu gusto'},
    {
        'id':'2',
        'nombre':'Baby Yoda',
        'imagen':'../img/muñequitos/bby.jpg',
        'medida':'20',
        'categoria':'Superhéroes',
        'precio':'350.00',
        'descripcion':'Si cool quieres ser, Baby Yoda debes tener, recuerda que puedes personalizarlo a tu gusto'},
    { 
        'id':'3',
        'nombre':'Carlitos',
        'imagen':'../img/muñequitos/carlitos.jpg',
        'medida':'20',
        'categoria':'Caricaturas',
        'precio':'350.00',
        'descripcion':'¿Recuerdas los momentos en familia cuando veian juntos los Rugrats? Como olvidar al adorable Carlitos, recuerda que puedes personalizarlo a tu gusto'},
    {
        'id':'4',
        'nombre':'Coraline',
        'imagen':'../img/muñequitos/carol.jpg',
        'medida':'22',
        'categoria':'Caricaturas',
        'precio':'420.00',
        'descripcion':'Muñequito de Coraline tejido, recuerda que puedes personalizarlo a tu gusto'},
    {
        'id':'5',
        'nombre':'Homero',
        'imagen':'../img/muñequitos/homero.jpg',
        'medida':'15',
        'categoria':'Personajes',
        'precio':'120.00',
        'descripcion':'Desde Sprinfield hasta tus manos, este llavero te hara decir "WooHoo".'},
    {
        'id':'6',
        'nombre':'Harry Potter Team',
        'imagen':'../img/muñequitos/hp.jpg',
        'medida':'20',
        'categoria':'Personajes',
        'precio':'600.00',
        'descripcion':'Este trio de amigos magicos te van a encantar.'},
    {
        'id':'7',
        'nombre':'Perrito',
        'imagen':'../img/muñequitos/dog2.jpg',
        'medida':'25',
        'categoria':'Mascotas',
        'precio':'420.00',
        'descripcion':'Una forma mas de recordar y llevar contigo a tu mascota a donde sea.'},
    {
        'id':'8',
        'nombre':'Erizo',
        'imagen':'../img/muñequitos/erizo.jpg',
        'medida':'20',
        'categoria':'Mascotas',
        'precio':'130.00',
        'descripcion':'Recordemos a nuestras mascotas con algo pequeñito pero con mucho amor, recuerda que puedes personalizarlo a tu gusto'},
    {
        'id':'9',
        'nombre':'Arnols y Helga',
        'imagen':'../img/muñequitos/heyh.jpg',
        'medida':'25',
        'categoria':'Caricaturas',
        'precio':'380.00',
        'descripcion':'¿Alguna vez amaste a alguien en secreto como Helga? No hay mejor presente que Arnold y Helga, los muñecos se venden por separado, recuerda que puedes personalizarlo a tu gusto'},
    {
        'id':'10',
        'nombre':'Iron Maiden',
        'imagen':'../img/muñequitos/iron.jpg',
        'medida':'20',
        'categoria':'Celebridades',
        'precio':'420.00',
        'descripcion':'El regalo perfecto para los Iron Maiden Lover 💕, recuerda que puedes personalizarlo a tu gusto'},
    {
        'id':'11',
        'nombre':'Friend',
        'imagen':'../img/muñequitos/friend.jpg',
        'medida':'18',
        'categoria':'Personalizados',
        'precio':'200.00',
        'descripcion':'Regala algo a tus seres queridos, recuerda que puedes personalizarlo a tu gusto'},
    {
        'id':'12',
        'nombre':'Muñequita de Chinos',
        'imagen':'../img/muñequitos/chinos.jpg',
        'medida':'20',
        'categoria':'Personalizados',
        'precio':'600.00',
        'descripcion':'Muñequita con mejillas sonrojadas y cabello chino, recuerda que puedes personalizarlo a tu gusto'},
];


// let objetosJSON = JSON.stringify(objetosTexto); //produtos a JSON
// localStorage.setItem("objetos", objetosJSON); //En localStorage


let productosJSON = localStorage.getItem("objetos"); //Lo tomamos del local
let productos = JSON.parse(productosJSON);


let nuevo = productos[productos.length - 1];

addItem(nuevo);

