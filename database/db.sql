CREATE DATABASE pruebadb IF NOT EXISTS;

use pruebadb;

CREATE TABLE comment (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name Varchar(255) NOT NULL,
    comment Varchar(255) NOT NULL
);

describe pruebadb;
