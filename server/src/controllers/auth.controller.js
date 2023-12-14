const pool = require('../db.js');
const bcrypt = require('bcrypt');
const { createAccessToken } = require('../libs/jwt.js');


const getUser = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (error) {
    console.log(error.message);
  };
};


const postUser = async (req, res) => {
  const { name, email, password} = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      'INSERT INTO users ( name, email, password) VALUES ($1, $2, $3) RETURNING *',[
        name, 
        email, 
        hashedPassword
     ]
    ); 
  
    const token = await createAccessToken({ id: result.rows[0].id });
    res.cookie('token', token, {
      httpOnly: true,
      sameSite: 'none',
      maxAge: 1000 * 60 * 60 * 24 * 7
    })       

    return res.json({
      token: token,
    })
  } catch (error) {
    console.log(error.message);
  };
};

module.exports = {
  getUser,
  postUser
} 