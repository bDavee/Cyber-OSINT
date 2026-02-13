CREATE DATABASE mbt;



CREATE TABLE telek (
    id int NOT NULL AUTO_INCREMENT,
    telepules varchar(200),
    muvmod varchar(200),
    allapot varchar(1),
    fedoszint decimal(6,2),
    fekuszint decimal(6,2),
    PRIMARY KEY (id)  
);

CREATE TABLE kapcsolo(
    telek_id int NOT NULL,
    nyersanyagid int NOT NULL,
    PRIMARY KEY (nyersanyagid, telek_id)
);

CREATE TABLE nyersanyag (
   id int NOT NULL,
   nev varchar(250),
   PRIMARY KEY (id)
);