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

const {
  PG_DATABASE,
  PG_HOST,
  PG_PASSWORD,
  PG_PORT,
  PG_USER,
} = require("./config.js");

const pg = require("pg");
// import pg from "pg";

const pool = new pg.Pool({
  port: PG_PORT,
  host: PG_HOST,
  user: PG_USER,
  password: PG_PASSWORD,
  database: PG_DATABASE,
});

pool.on("connect", () => {
  console.log("Database connected");
});

module.exports = pool;