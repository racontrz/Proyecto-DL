CREATE TABLE
	users (
		user_id SERIAL PRIMARY KEY,
		name VARCHAR(50),
		email VARCHAR(50) UNIQUE,
		password VARCHAR(250),
		image VARCHAR(250)
	);

select * from users

insert into users (user_id, name, email, password, image)
values (1, 'ricardo', 'deta18@gmail.com', 123456, 'google.cl')


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
	
	select * from products;
	
	insert into products (product_id, name, brand, descripcion, image, price, user_id)
values (1, 'bateria', 'tama', 'swinstart', 'google.cl', 1000, 1)
 