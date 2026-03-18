CREATE DATABASE filme_db;

USE filme_db;

CREATE TABLE filme (
	id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(400) NOT NULL,
    anoLancamento INT NOT NULL,
    duracao INT NOT NULL,
    sinopse VARCHAR(4000) NOT NULL,
    classificacao VARCHAR(400) NOT NULL,
    ativo BOOLEAN NOT NULL,
    cadastro DATETIME NOT NULL
);

CREATE TABLE genero (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(400) NOT NULL,
    ativo BOOLEAN NOT NULL,
    cadastro DATETIME NOT NULL
);

CREATE TABLE filmeGenero (
	id INT AUTO_INCREMENT PRIMARY KEY,
    filme_id INT NOT NULL,
    genero_id INT NOT NULL,
    
    FOREIGN KEY(filme_id) REFERENCES filme(id),
    FOREIGN KEY(genero_id) REFERENCES genero(id)
);

CREATE TABLE ator (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(400) NOT NULL,
    dataNascimento DATETIME NOT NULL,
    nacionalidade VARCHAR(400) NOT NULL,
    cadastro DATETIME NOT NULL
);

CREATE TABLE filmeAtor (
	id INT AUTO_INCREMENT PRIMARY KEY,
    filme_id INT NOT NULL,
    ator_id INT NOT NULL,
    personagem VARCHAR(400) NOT NULL,
    protagonista BOOLEAN NOT NULL,
    
	FOREIGN KEY(filme_id) REFERENCES filme(id),
    FOREIGN KEY(ator_id) REFERENCES ator(id)
    
);
