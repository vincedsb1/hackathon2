-- Active: 1686063302207@@127.0.0.1@3306@checkpoint3
CREATE DATABASE IF NOT EXISTS emmaus_connect;

USE emmaus_connect;

DROP TABLE IF EXISTS product;
CREATE TABLE product (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
   mark VARCHAR(255),
  model VARCHAR(255),
  description TEXT,
  screen_size DECIMAL,
  antutu_index INTEGER,
  has_accessories BOOLEAN,
  network VARCHAR(255),
  part_number INTEGER,
  val_a INTEGER,
  val_m INTEGER,
  val_s INTEGER,
  val_total INTEGER,
  is_sold BOOLEAN,
  memory_id INTEGER,
  storage_id INTEGER,
  os_id INTEGER,
  condition_id INTEGER,
  weighting_id INTEGER,
  state_id INTEGER
);

DROP TABLE IF EXISTS memory;
CREATE TABLE memory (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  memory INTEGER
);

DROP TABLE IF EXISTS storage;
CREATE TABLE storage (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  storage INTEGER
);

DROP TABLE IF EXISTS os;
CREATE TABLE os (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  os VARCHAR(255)
);

DROP TABLE IF EXISTS state;
CREATE TABLE state (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  state_label VARCHAR(255),
  state_value INTEGER
);

DROP TABLE IF EXISTS `condition`;
CREATE TABLE `condition` (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  condition_label VARCHAR(255)
);



DROP TABLE IF EXISTS weighting;
CREATE TABLE weighting (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  weighting VARCHAR(255)
);

DROP TABLE IF EXISTS user;
CREATE TABLE user (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  firstname VARCHAR(255),
  lastname VARCHAR(255),
  profile_picture VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255),
  is_admin BOOLEAN
);


insert into 
  product (
    mark, 
    model, 
    description, 
    screen_size, 
    antutu_index, 
    has_accessories, 
    network, 
    part_number, 
    val_a, 
    val_m, 
    val_s, 
    val_total, 
    is_sold, 
    memory_id, 
    storage_id, 
    os_id, 
    condition_id, 
    weighting_id, 
    state_id
  )
values
  ("Apple","iPhone 6S","Petit iPhone avec une caméra de 12 MP et un écran Retina de 4.7 pouces.","4.7","0","0","4G","0","0","0","0","0","0","2","2","1","0","0","0"),
("Apple","iPhone 6S Plus","Version plus grande de l'iPhone 6S avec un écran Retina de 5.5 pouces.","5.5","0","0","4G","0","0","0","0","0","0","2","2","1","0","0","0"),
("Apple","iPhone 7","Téléphone élégant avec une caméra améliorée de 12 MP et une résistance à l'eau.","4.7","0","0","4G","0","0","0","0","0","0","2","3","1","0","0","0"),
("Apple","iPhone 7 Plus","Version plus grande de l'iPhone 7 avec un double appareil photo de 12 MP.","5.5","0","0","4G","0","0","0","0","0","0","3","3","1","0","0","0"),
("Apple","iPhone 8","Puissant iPhone avec une caméra de 12 MP et la capacité de recharge sans fil.","4.7","0","0","4G","0","0","0","0","0","0","2","4","1","0","0","0"),
("Apple","iPhone 8 Plus","Version plus grande de l'iPhone 8 avec un double appareil photo de 12 MP.","5.5","0","0","4G","0","0","0","0","0","0","3","4","1","0","0","0"),
("Apple","iPhone X","Design révolutionnaire avec un écran Super Retina de 5.8 pouces et une technologie de reconnaissance faciale.","5.8","0","0","4G","0","0","0","0","0","0","3","4","1","0","0","0"),
("Apple","iPhone XR","iPhone abordable avec un écran Liquid Retina de 6.1 pouces et une seule caméra de 12 MP.","6.1","0","0","4G","0","0","0","0","0","0","3","4","1","0","0","0"),
("Apple","iPhone XS","iPhone haut de gamme avec un écran Super Retina de 5.8 pouces et un double appareil photo de 12 MP.","5.8","0","0","4G","0","0","0","0","0","0","4","4","1","0","0","0"),
("Apple","iPhone XS Max","Version plus grande de l'iPhone XS avec un écran Super Retina de 6.5 pouces.","6.5","0","0","4G","0","0","0","0","0","0","4","4","1","0","0","0"),
("Apple","iPhone 11","Performances améliorées, double appareil photo de 12 MP, écran Liquid Retina de 6.1 pouces.","6.1","0","0","4G","0","0","0","0","0","0","4","4","1","0","0","0"),
("Apple","iPhone 11 Pro","iPhone haut de gamme avec triple appareil photo de 12 MP, écran Super Retina de 5.8 pouces.","5.8","0","0","4G","0","0","0","0","0","0","4","4","1","0","0","0"),
("Apple","iPhone 11 Pro Max","Version plus grande de l'iPhone 11 Pro avec un écran Super Retina de 6.5 pouces.","6.5","0","0","4G","0","0","0","0","0","0","4","4","1","0","0","0"),
("Apple","iPhone SE (2016)","Petit iPhone avec un écran de 4 pouces et une caméra de 12 MP.","4","0","0","4G","0","0","0","0","0","0","2","2","1","0","0","0"),
("Apple","iPhone SE (2020)","iPhone compact avec un écran Retina HD de 4.7 pouces et une puce A13 Bionic.","4.7","0","0","4G","0","0","0","0","0","0","3","4","1","0","0","0"),
("Apple","iPhone 12 Mini","iPhone compact avec un écran Super Retina XDR de 5.4 pouces et double appareil photo de 12 MP.","5.4","0","0","4G","0","0","0","0","0","0","4","4","1","0","0","0"),
("Apple","iPhone 12","iPhone avec un écran Super Retina XDR de 6.1 pouces et double appareil photo de 12 MP.","6.1","0","0","4G","0","0","0","0","0","0","4","4","1","0","0","0"),
("Apple","iPhone 12 Pro","iPhone haut de gamme avec écran Super Retina XDR de 6.1 pouces, triple appareil photo de 12 MP.","6.1","0","0","4G","0","0","0","0","0","0","5","5","1","0","0","0"),
("Apple","iPhone 12 Pro Max","Version la plus grande de l'iPhone 12 Pro avec un écran Super Retina XDR de 6.7 pouces.","6.7","0","0","4G","0","0","0","0","0","0","5","5","1","0","0","0"),
("Samsung","Galaxy S7","Smartphone avec un écran Super AMOLED de 5.1 pouces et un appareil photo de 12 MP.","5.1","0","0","4G","0","0","0","0","0","0","4","3","2","0","0","0"),
("Samsung","Galaxy S8","Téléphone avec un écran Infinity de 5.8 pouces, un appareil photo de 12 MP et reconnaissance d'iris.","5.8","0","0","4G","0","0","0","0","0","0","4","4","2","0","0","0"),
("Samsung","Galaxy S9","Puissant téléphone avec un écran Infinity de 5.8 pouces, un appareil photo de 12 MP à double ouverture.","5.8","0","0","4G","0","0","0","0","0","0","4","4","2","0","0","0"),
("Samsung","Galaxy S10","Téléphone avec écran Infinity de 6.1 pouces, triple appareil photo de 12 MP et lecteur d'empreintes digitales à ultrasons.","6.1","0","0","4G","0","0","0","0","0","0","6","5","2","0","0","0"),
("Samsung","Galaxy S20","Smartphone avec écran Dynamic AMOLED de 6.2 pouces, triple appareil photo de 12 MP et prise en charge de la 5G.","6.2","0","0","4G","0","0","0","0","0","0","6","5","2","0","0","0"),
("Samsung","Galaxy Note 8","Téléphone stylé avec écran Infinity de 6.3 pouces, stylet S Pen et double appareil photo de 12 MP.","6.3","0","0","4G","0","0","0","0","0","0","5","4","2","0","0","0"),
("Samsung","Galaxy Note 9","Téléphone avec écran Infinity de 6.4 pouces, stylet S Pen amélioré et double appareil photo de 12 MP.","6.4","0","0","4G","0","0","0","0","0","0","5","5","2","0","0","0"),
("Samsung","Galaxy Note 10","Téléphone avec écran Dynamic AMOLED de 6.3 pouces, stylet S Pen et triple appareil photo de 12 MP.","6.3","0","0","4G","0","0","0","0","0","0","6","6","2","0","0","0"),
("Samsung","Galaxy Note 20","Téléphone avec écran Dynamic AMOLED de 6.7 pouces, stylet S Pen et triple appareil photo de 12 MP.","6.7","0","0","4G","0","0","0","0","0","0","6","5","2","0","0","0"),
("Huawei","P9","Smartphone avec double appareil photo Leica de 12 MP, écran Full HD de 5.2 pouces.","5.2","0","0","4G","0","0","0","0","0","0","3","3","2","0","0","0"),
("Huawei","P10","Téléphone avec double appareil photo Leica de 20 MP, écran Full HD de 5.1 pouces.","5.1","0","0","4G","0","0","0","0","0","0","4","3","2","0","0","0"),
("Huawei","P20","Téléphone avec triple appareil photo Leica de 12 MP, écran Full HD de 5.8 pouces.","5.8","0","0","4G","0","0","0","0","0","0","4","5","2","0","0","0"),
("Huawei","P30","Smartphone avec triple appareil photo Leica de 40 MP, écran Full HD de 6.1 pouces.","6.1","0","0","4G","0","0","0","0","0","0","5","4","2","0","0","0"),
("Huawei","Mate 9","Téléphone avec double appareil photo de 20 MP, écran Full HD de 5.9 pouces et grande batterie.","5.9","0","0","4G","0","0","0","0","0","0","4","4","2","0","0","0"),
("Huawei","Mate 10","Téléphone avec double appareil photo Leica de 12 MP, écran Full HD de 5.9 pouces et puce Kirin 970.","5.9","0","0","4G","0","0","0","0","0","0","4","4","2","0","0","0"),
("Huawei","Mate 20 Pro","Téléphone avec triple appareil photo Leica de 40 MP, écran AMOLED de 6.39 pouces et reconnaissance faciale 3D.","6.39","0","0","4G","0","0","0","0","0","0","5","5","2","0","0","0"),
("Huawei","Mate 30 Pro","Téléphone avec quadruple appareil photo Leica de 40 MP, écran AMOLED de 6.53 pouces et puce Kirin 990.","6.53","0","0","4G","0","0","0","0","0","0","6","5","2","0","0","0"),
("Google","Pixel","Téléphone avec appareil photo de 12,3 MP, assistant Google intégré et mise à jour régulière du système d'exploitation.","5","0","0","4G","0","0","0","0","0","0","4","3","2","0","0","0"),
("Google","Pixel 2","Téléphone avec appareil photo de 12,2 MP, écran OLED de 5 pouces et résistance à l'eau.","5","0","0","4G","0","0","0","0","0","0","4","4","2","0","0","0"),
("Google","Pixel 3","Téléphone avec appareil photo de 12,2 MP, écran OLED de 5.5 pouces et charge sans fil.","5.5","0","0","4G","0","0","0","0","0","0","4","4","2","0","0","0"),
("Google","Pixel 4","Téléphone avec appareil photo de 16 MP, écran OLED de 5.7 pouces, reconnaissance faciale et radar Soli.","5.7","0","0","4G","0","0","0","0","0","0","5","4","2","0","0","0"),
("OnePlus","5","Téléphone avec double appareil photo de 16 MP, écran Optic AMOLED de 5.5 pouces et performances élevées.","5.5","0","0","4G","0","0","0","0","0","0","5","4","2","0","0","0"),
("OnePlus","6","Téléphone avec double appareil photo de 16 MP, écran Optic AMOLED de 6.28 pouces et processeur Snapdragon 845.","6.28","0","0","4G","0","0","0","0","0","0","5","4","2","0","0","0"),
("OnePlus","7","Téléphone avec double appareil photo de 48 MP, écran Optic AMOLED de 6.41 pouces et processeur Snapdragon 855.","6.41","0","0","4G","0","0","0","0","0","0","5","5","2","0","0","0"),
("OnePlus","8","Téléphone avec triple appareil photo de 48 MP, écran Fluid AMOLED de 6.55 pouces et prise en charge de la 5G.","6.55","0","0","4G","0","0","0","0","0","0","6","5","2","0","0","0"),
("Xiaomi","Mi 8","Téléphone avec double appareil photo de 12 MP, écran AMOLED de 6.21 pouces et puissant processeur Snapdragon 845.","6.21","0","0","4G","0","0","0","0","0","0","5","4","2","0","0","0"),
("Xiaomi","Mi 9","Téléphone avec triple appareil photo de 48 MP, écran AMOLED de 6.39 pouces et charge sans fil rapide.","6.39","0","0","4G","0","0","0","0","0","0","5","4","2","0","0","0"),
("Xiaomi","Mi 10","Téléphone avec quadruple appareil photo de 108 MP, écran AMOLED de 6.67 pouces et prise en charge de la 5G.","6.67","0","0","4G","0","0","0","0","0","0","6","5","2","0","0","0"),
("Xiaomi","Redmi Note 7","Téléphone abordable avec double appareil photo de 48 MP, écran Full HD de 6.3 pouces.","6.3","0","0","4G","0","0","0","0","0","0","3","3","2","0","0","0"),
("Xiaomi","Redmi Note 8","Téléphone abordable avec quadruple appareil photo de 48 MP, écran Full HD de 6.3 pouces.","6.3","0","0","4G","0","0","0","0","0","0","4","3","2","0","0","0"),
("Xiaomi","Redmi Note 9","Téléphone abordable avec quadruple appareil photo de 48 MP, écran Full HD de 6.53 pouces et grande batterie.","6.53","0","0","4G","0","0","0","0","0","0","3","4","2","0","0","0"),
("Oppo","Reno 10x Zoom","Téléphone avec triple appareil photo de 48 MP, écran AMOLED de 6.6 pouces et zoom optique 10x.","6.6","0","0","4G","0","0","0","0","0","0","5","5","2","0","0","0");