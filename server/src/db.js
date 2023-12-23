const pg = require('pg');
const { PG_PORT, PG_USER, PG_HOST, PG_DATABASE, PG_PASSWORD } = require('./config');

const pool = new pg.Pool({
  port: PG_PORT,
  user: PG_USER,
  host: PG_HOST,
  database: PG_DATABASE,
  password: PG_PASSWORD
});

pool.on('connect', () =>{
  console.log('Database connected')
});

module.exports = pool;


// const { Pool } = require("pg");
// require("dotenv").config();

// const pool = new Pool({
//   port: process.env.PORT || "3000",
//   user: process.env.USER || "postgres",
//   host: process.env.HOST || "localhost",
//   database: process.env.DATABASE || "drums",
//   password: process.env.PASSWORD || "16350676",
//   ORIGIN: process.env.ORIGIN || "http://localhost:5173",
//   allowExitOnIdle: true
// });

// module.exports = pool;