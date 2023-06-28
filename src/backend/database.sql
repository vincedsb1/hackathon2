-- Active: 1686063302207@@127.0.0.1@3306@checkpoint3
CREATE DATABASE IF NOT EXISTS emmaus_connect;

USE emmaus_connect;

DROP TABLE IF EXISTS product;
CREATE TABLE product (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  model VARCHAR(255),
  description TEXT,
  screen_size DECIMAL,
  antutu_index INTEGER,
  has_accessories BOOLEAN,
  network INTEGER,
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