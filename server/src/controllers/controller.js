
const pool = require('../../db');
const bcrypt = require('bcrypt');


const postUser = async ( user ) => {
  try {
    let { name, email, password } = user;
  const key = bcrypt.hashSync(password);
  password = key;
  const values = [ name, email, key ];
  const consulta = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *';
  await pool.query(consulta, values); 
  } catch (error) {
    console.log(error.message);
  }
};

const dataUser = async ( email ) => {
  try {
    const values = [email];
    const consulta = 'SELECT * FROM users WHERE email = $1';
    const { rows: [user], rowCount } = await pool.query(consulta, values);
    if ( !rowCount ) {throw { code: 404, message: 'User not found' } };
    delete user.password;
    return user;
  } catch (error) {
    console.log(error.message)
  }
}

const keyUser = async ( email, password ) => {
  try {
    const values = [email, password];
    const consulta = 'SELECT * FROM users WHERE email = $1 AND password = $2';
    const { rows: [user], rowCount } = await pool.query(consulta, values);
    if ( !rowCount ) {throw { code: 404, message: 'User not found' } };
    delete user.password;
    return user;
  } catch (error) {
    console.log(error.message)
  }
 
};
const getAllProductos = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products');
    res.json(result.rows);
  } catch (error) {
    console.log(error.message);
  };
};

const getIdProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM products WHERE product_id = $1', [id]);

    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (error) {
    console.log(error.message);
  }
};
const postProducto = async (req, res) => {
  const {product_id, name, brand, description, image, price, user_id} = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO products (product_id, name, brand, description, image, price, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',[
        product_id, 
        name, 
        brand, 
        description, 
        image, 
        price, 
        user_id
      ]
    );
  
    res.send(result.rows[0]);
  } catch (error) {
    console.log(error.message);
  };
};

const deleteProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM products WHERE product_id = $1', [id]);

    if (result.rowCount === 0) {
      res.status(404).json({ message: 'Producto no encontrado' });
    } else {
      res.sendStatus(204);
    }

  } catch (error) {
    console.log(error.message);
  }
};

const putProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, brand, description, image, price } = req.body;

    const result = await pool.query(
      'UPDATE products SET name = $1, brand = $2, description = $3, image = $4, price = $5 WHERE product_id = $6 RETURNING *', [
        name,
        brand,
        description,
        image,
        price,
        id
      ]
    );

    if (result.rows.length === 0) {
      res.status(404).json({ message: 'Producto no encontrado' });
    } else {
      res.json(result.rows[0]);
    }
  } catch (error) {
    console.log(error.message);
    
  }
};

module.exports = {
  postUser,
  dataUser,
  keyUser,
  getAllProductos,
  getIdProducto,
  postProducto,
  deleteProducto,
  putProducto
}