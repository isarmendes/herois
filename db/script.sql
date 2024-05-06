CREATE DATABASE herois;

\c herois;


CREATE TABLE herois(
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    poder VARCHAR(100) NOT NULL,
    nivel INTEGER NOT NULL,
    hp INTEGER NOT NULL
)


CREATE TABLE batalhas(
    id SERIAL PRIMARY KEY,
   FOREIGN KEY (heroi1_id) REFERENCES herois(id), 
   FOREIGN KEY (heroi2_id) REFERENCES herois(id),
   FOREIGN KEY(vencedor_id) REFERENCES herois(id)
)