DROP DATABASE IF EXISTS peliculas;

CREATE DATABASE IF NOT EXISTS peliculas;

USE peliculas;

CREATE TABLE IF NOT EXISTS pelicula(
  pelicula_id VARCHAR(9) PRIMARY KEY,
  titulo VARCHAR(100),
  anio VARCHAR(4),
  rating DECIMAL(2,1),
  imagen VARCHAR(255)
);
