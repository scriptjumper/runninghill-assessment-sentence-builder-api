CREATE DATABASE sentence_builder;

CREATE TABLE types (
	id serial PRIMARY KEY,
	title VARCHAR ( 50 ) 
);

INSERT INTO types (title)
VALUES ('Noun'),
('Verb'),
('Adjective'),
('Adverb'),
('Pronoun'),
('Preposition'),
('Conjunction'),
('Determiner'),
('Exclamation');