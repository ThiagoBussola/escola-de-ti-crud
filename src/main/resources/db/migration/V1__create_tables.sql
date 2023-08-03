CREATE SCHEMA IF NOT EXISTS projeto;

CREATE SEQUENCE IF NOT EXISTS projeto.idkey_pessoa;
CREATE TABLE IF NOT EXISTS projeto.pessoa (
	idkey int8 NOT NULL DEFAULT nextval('projeto.idkey_pessoa'::regclass),
	nome TEXT NULL,
	cpf TEXT NULL,
	datanascimento date NULL,
	CONSTRAINT pk_pessoa PRIMARY KEY (idkey)
);

CREATE SEQUENCE IF NOT EXISTS projeto.idkey_contato;
CREATE TABLE IF NOT EXISTS projeto.contato (
	idkey int8 NOT NULL DEFAULT nextval('projeto.idkey_contato'::regclass),
	email TEXT NULL,
	telefone TEXT NULL,
	idkey_pessoa int8 NULL,
	CONSTRAINT pk_contato PRIMARY KEY (idkey),
	CONSTRAINT fk_pessoa FOREIGN KEY (idkey_pessoa) REFERENCES projeto.pessoa(idkey)
);
CREATE INDEX IF NOT EXISTS pessoa_ifk ON projeto.contato USING btree(idkey_pessoa);