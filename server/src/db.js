const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.USER || "postgres",
  host: process.env.HOST || "localhost",
  database: process.env.DATABASE || "drums",
  password: process.env.PASSWORD || "16350676",
  ORIGIN: process.env.ORIGIN || "http://localhost:5173",
  allowExitOnIdle: true
});

module.exports = pool;