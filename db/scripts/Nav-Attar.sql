CREATE DATABASE nav_attar;
USE nav_attar;

CREATE TABLE `categoría` (
  `IDcategoría` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`IDcategoría`)
);

CREATE TABLE `ubicación` (
  `IDubicación` int NOT NULL AUTO_INCREMENT,
  `estado` varchar(45) NOT NULL,
  `municipio` varchar(45) NOT NULL,
  `CP` varchar(45) DEFAULT NULL,
  `colonia` varchar(45) NOT NULL,
  `calle` varchar(45) NOT NULL,
  `no_interior` varchar(45) DEFAULT NULL,
  `no_exterior` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`IDubicación`)
);

CREATE TABLE `artesano` (
  `IDartesano` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `correo_electronico` varchar(100) NOT NULL,
  `Ubicación_IDubicación` int NOT NULL,
  `teléfono` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`IDartesano`),
  KEY `fk_Artesano_Ubicación1_idx` (`Ubicación_IDubicación`),
  CONSTRAINT `fk_Artesano_Ubicación1` FOREIGN KEY (`Ubicación_IDubicación`) REFERENCES `ubicación` (`IDubicación`)
);

CREATE TABLE `cliente` (
  `IDusuario` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `correo_electronico` varchar(100) NOT NULL,
  `contraseña` varchar(50) NOT NULL,
  `Ubicación_IDubicación` int NOT NULL,
  `teléfono` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`IDusuario`),
  KEY `fk_Cliente_Ubicación1_idx` (`Ubicación_IDubicación`),
  CONSTRAINT `fk_Cliente_Ubicación1` FOREIGN KEY (`Ubicación_IDubicación`) REFERENCES `ubicación` (`IDubicación`)
);

CREATE TABLE `productos` (
  `IDproducto` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `precio` decimal(5,2) NOT NULL,
  `medida` int DEFAULT NULL,
  `descripción` varchar(500) DEFAULT NULL,
  `imagen` varchar(300) NOT NULL,
  `existencia` tinyint NOT NULL,
  `Categoría_IDcategoría` int NOT NULL,
  `Artesano_IDartesano` int NOT NULL,
  PRIMARY KEY (`IDproducto`),
  KEY `fk_Productos_Categoría_idx` (`Categoría_IDcategoría`),
  KEY `fk_Productos_Artesano1_idx` (`Artesano_IDartesano`),
  CONSTRAINT `fk_Productos_Artesano1` FOREIGN KEY (`Artesano_IDartesano`) REFERENCES `artesano` (`IDartesano`),
  CONSTRAINT `fk_Productos_Categoría` FOREIGN KEY (`Categoría_IDcategoría`) REFERENCES `categoría` (`IDcategoría`)
);

CREATE TABLE `pedido` (
  `IDpedido` int NOT NULL AUTO_INCREMENT,
  `fecha_pedido` date NOT NULL,
  `fecha_entrega` date NOT NULL,
  `Cliente_IDusuario` int NOT NULL,
  `estado_pedido` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`IDpedido`),
  KEY `fk_Pedido_Cliente1_idx` (`Cliente_IDusuario`),
  CONSTRAINT `fk_Pedido_Cliente1` FOREIGN KEY (`Cliente_IDusuario`) REFERENCES `cliente` (`IDusuario`)
);

CREATE TABLE `carrito` (
  `IDcarrito` int NOT NULL AUTO_INCREMENT,
  `precio_total` decimal(7,2) DEFAULT NULL,
  `cantidad_producto` int DEFAULT NULL,
  `Productos_IDproducto` int DEFAULT NULL,
  `Pedido_IDpedido` int DEFAULT NULL,
  `subtotal` decimal(7,2) NOT NULL,
  PRIMARY KEY (`IDcarrito`),
  KEY `fk_Detalle_pedido_Productos1_idx` (`Productos_IDproducto`),
  KEY `fk_Detalle_pedido_Pedido1_idx` (`Pedido_IDpedido`),
  CONSTRAINT `fk_Detalle_pedido_Pedido1` FOREIGN KEY (`Pedido_IDpedido`) REFERENCES `pedido` (`IDpedido`),
  CONSTRAINT `fk_Detalle_pedido_Productos1` FOREIGN KEY (`Productos_IDproducto`) REFERENCES `productos` (`IDproducto`)
);


INSERT INTO `categoría`(nombre) VALUES ("Caricaturas"), 
("Celebridades"), ("Mascotas"), ("Personajes"), 
("Personalizados"), ("Superhéroes");


INSERT INTO `ubicación`(estado, municipio, CP, colonia, calle, no_interior, no_exterior)
VALUES 
("EDOMEX", "Ecatepec de Morelos", "55010", "Guadalupe Victoria", "Francisco Villa", "S/N", "lote 3"),
("EDOMEX", "Ecatepec de Morelos", "55210", "Valle de Anahuac", "Ignacio Zaragoza", "S/N", "66A"),
("EDOMEX", "Huixquilucan", "52766", "Santiago Yancuitlalpan", "Avenida 16 de septiembre", "N/A","30"),
("CDMX", "Tlalpan", "14000", "Tlalpan Centro", "Calle 11 Mártires", "80","105"),
("EDOMEX", "Coacalco Berriozabal", "55720", "Parque recidencial", "Avenida del parque", "23", "5"),
("CDMX", "Xochimilco", "16720", "Del Carmen", "Justo Sierra", "S/N", "S/N"),
("CDMX", "Milpa Alta", "12900", "Santa Ana Tlacotenco", "Francisco I. Madero", "S/N", "43"),
("EDOMEX", "Ecatepec de Morelos", "55029", "luis donaldo colosio", "Calle Encinos", "S/N", "#34"),
("MICHOACAN", "Morelia", "58049", "Jardines del Toreo", "Ganadería Valparaíso", "00", "#28"),
("MICHOACAN", "Morelia", "58000", "Centro", "Plan de Ayala", "00", "#173");




INSERT INTO artesano (nombre, apellido, correo_electronico, teléfono, Ubicación_IDubicación) 
VALUES
("Paola", "Quiroz", "paola.rod.quiroz@gmail.com","5512345678", 3), 
("Alejandro", "Rodriguez", "ale.rodriguez@gmail.com", "5578654321",4), 
("Erik", "Ramirez", "erik.ramirez@gmail.com", "5534678976",5), 
("Pablo", "Pérez", "pablo-perez@gmail.com", "55512637849",6), 
("Fabiola", "Vilchis", "fabiolayt1@gmail.com", "5565478965",7);



INSERT INTO cliente (nombre, apellido, correo_electronico, teléfono, contraseña, Ubicación_IDubicación)
VALUES 

("Brandon", "Jaimes", "brandon.jaimes@gmail.com", "5543456234", "bran1234", 1),
("Ilan", "Del Carmen", "illan@mailfalso.com", "5544332211", "My_illan", 8),
("Pat", "Ella", "pat.ella@gmail.com","1122334455", "pat.to.happiness", 9),
("Daniel", "Gomez", "danny.phantom@gmail.com","5599668844","danny_PHA", 10),
("Mario", "Moreno","cantinfleando@hotmail.com","1111155555","Cantinflas", 2);



INSERT INTO productos (nombre, precio, medida, descripción, imagen, existencia, Categoría_IDcategoría, Artesano_IDartesano) 
VALUES 

("Batman", 200, 25, "Batman es un superhéroe que te acompañará en todos tus aventuras, recuerda que puedes personalizarlo a tu gusto", "batman.png", "1", 6, 2),
("Baby Yoda", 350.00, 20, "Si cool quieres ser, un baby Yoda debes tener, recuerda que puedes personalizarlo a tu gusto", "babyyoda.png", "1", 6, 5),
("Carlitos", 350.00, 20, "¿Recuerdas los momentos en familia cuando veían a los Rugrats? Como olvidar al olvidar al adorable Carlitos", "carlitos.png", "1", 1, 1),
("Coraline", 420.00, 22, "Muñequita de Coraline tejida, recuerda que puedes personalizarlo a tu gusto ", "coraline.png", "1", 1, 5),
("Homero", 120.00, 15, "Desde Springfield hasta tus manos, este llavero ta hará decir ¡Woohoo!", "homero.png", "1", 1, 3);



INSERT INTO pedido(fecha_pedido, fecha_entrega, estado_pedido, Cliente_IDusuario) 
VALUES
('2021-11-15', '2021-11-19', "Entregado",2),
('2021-11-25', '2021-12-03', "En proceso",4),
('2021-11-29', '2021-12-07', "En proceso",5),
('2021-11-08', '2021-11-13', "Entregado",3),
('2021-11-28', '2021-11-05', "Pausado",1);

INSERT INTO carrito(precio_total, cantidad_producto, subtotal, Productos_IDproducto, Pedido_IDpedido) 
VALUES
(1000.00, 3, 900.00, 2, 2),
(230.00, 1, 200.00, 3, 5),
(550.00, 2, 520.00, 1, 4),
(1600.00, 4, 1400.00, 5, 3),
(160.00, 1, 150.00, 4, 1);



