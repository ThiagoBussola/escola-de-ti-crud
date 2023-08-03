CREATE SEQUENCE IF NOT EXISTS projeto.idkey_users;
CREATE TABLE IF NOT EXISTS projeto.users (
	idkey int8 NOT NULL DEFAULT nextval('projeto.idkey_users'::regclass),
	email TEXT NULL,
	senha TEXT NULL,
	CONSTRAINT pk_users PRIMARY KEY (idkey)
)