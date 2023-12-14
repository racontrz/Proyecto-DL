CREATE DATABASE drum;

--TABLA DE USUARIOS--
CREATE TABLE
	users (
		user_id SERIAL PRIMARY KEY,
		name VARCHAR(50),
		email VARCHAR(50) UNIQUE,
		password VARCHAR(250),
		image VARCHAR(250)
	);

--TABLA DE PRODUCTOS--
CREATE TABLE
	products (
		product_id SERIAL PRIMARY KEY,
		name VARCHAR(50),
		brand VARCHAR(50),
		descripcion VARCHAR(1000),
		image VARCHAR(500),
    price INT,
		user_id INT,
		CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users (user_id) ON DELETE CASCADE
	);
 