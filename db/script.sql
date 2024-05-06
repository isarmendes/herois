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

INSERT INTO herois (nome, poder, nivel, hp) VALUES ('Superman', 'Superforça', 20, 1000),
    ('Homem de Ferro', 'Armadura de alta tecnologia', 18, 200),
    ('Batman', 'Habilidades de combate excepcionais', 17, 180),
    ('Capitão América', 'Superforça, escudo indestrutível', 16, 170),
    ('Mulher-Maravilha', 'Força sobre-humana, voo', 19, 220),
    ('Thor', 'Superforça, controle sobre o trovão', 20, 240),
    ('Flash', 'Super-velocidade', 16, 160),
    ('Homem-Aranha', 'Agilidade, lançadores de teia', 15, 150),
    ('Lanterna Verde', 'Anel de poder, construção de objetos', 18, 200),
    ('Hulk', 'Superforça ilimitada, resistência', 20, 300),
    ('Aquaman', 'Comunicação telepática com criaturas marinhas', 17, 180),
    ('Viúva Negra', 'Mestre em combate corpo-a-corpo', 15, 150),
    ('Pantera Negra', 'Agilidade, força', 17, 180),
    ('Deadpool', 'Fator de cura regenerativo', 16, 160),
    ('Supergirl', 'Superforça, voo', 18, 200),
    ('Capitã Marvel', 'Voo, superforça', 19, 220),
    ('Arqueiro Verde', 'Mestre em arco e flecha', 15, 150),
    ('Wolverine', 'Fator de cura acelerado, garras retráteis', 18, 200),
    ('Cyborg', 'Tecno-poderes, força aumentada', 16, 180),
    ('Doutor Estranho', 'Magia, manipulação da realidade', 19, 210),
    ('Shazam', 'Força sobre-humana', 18, 220),
    ('Mulher-Gato', 'Agilidade felina', 15, 150),
    ('Homem-Formiga', 'Habilidade de encolhimento e crescimento', 16, 160),
    ('Supergirl', 'Superforça', 18, 200),
    ('Batgirl', 'Habilidades de combate, inteligência', 16, 160),
    ('Arqueiro Verde', 'Mestre em arco e flecha', 17, 170),
    ('Asa Noturna', 'acrobacias', 17, 180),
    ('Ravena', 'Manipulação de magia negra', 17, 190),
    ('Estelar', 'manipulação de energia', 18, 200),
    ('Robin', 'Habilidades acrobáticas', 16, 170),  -- Vários personagens, portanto uma descrição geral
    ('Batwoman', 'Habilidades de combate', 16, 170),
    ('Hera Venenosa', 'Manipulação de plantas', 17, 180),
    ('Besouro Azul', 'Armadura de alta tecnologia', 16, 170),
    ('Capitão Frio', 'Manipulação de gelo', 16, 160),
    ('Nuclear', ' energia nuclear', 17, 180),
    ('Rorschach', ' combate corpo-a-corpo', 15, 150),
    ('Question', 'Investigação', 16, 160),
    ('Atom', 'Encolhimento, tecnologia', 17, 170),
    ('Espectro', 'Poderes místicos', 18, 190),
    ('Mera', 'manipulação hidrocinética', 17, 180) 
    ('Vespa', 'Habilidade de encolhimento', 16, 160),
    ('Demolidor', 'Sentidos aguçados', 16, 170),
    ('Jessica Jones', 'Força sobre-humana', 16, 180),
    ('Luke Cage', 'Pele indestrutível', 16, 190),
    ('Punho de Ferro', 'Habilidades de kung fu', 17, 180),
    ('Capitã Britânia', 'Força sobre-humana', 17, 180),
    ('Surfista Prateado', ' manipulação de energia cósmica', 19, 220),
    ('Motoqueiro Fantasma', 'manipulação de fogo', 18, 190),
    ('Visão', 'Força sobre-humana', 19, 210),
    ('Mercúrio', ' reflexos aprimorados', 17, 170),
    ('Feiticeira Escarlate', 'Manipulação da realidade', 18, 200),
    ('Falcão', 'Voo ', 16, 170),
    ('Máquina de Combate', 'Força aprimorada', 18, 200),
    ('Tempestade', 'Manipulação do clima', 18, 200),
    ('Senhor das Estrelas', 'Especialista em combate', 16, 180),
    ('Gavião Arqueiro', 'Mestre em arco e flecha', 17, 180),
    ('Homem de Gelo', 'Manipulação do gelo', 17, 180);

