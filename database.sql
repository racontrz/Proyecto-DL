

CREATE DATABASE drum;

	CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) ,
  email VARCHAR(255)  UNIQUE,
  password VARCHAR(500) ,
  image VARCHAR(500)
);
 
CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(45) ,
  brand VARCHAR(45) ,
  description VARCHAR(500) ,
  image VARCHAR(500),
  price VARCHAR ,
  create_by INT ,
  CONSTRAINT create_by
    FOREIGN KEY (create_by)
    REFERENCES users (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
		);
 