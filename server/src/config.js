const PORT = process.env.PORT || 3000;
const ORIGIN = 'https://famed-lettuce-production.up.railway.app' || "http://localhost:5173";
// const ORIGIN = process.env.ORIGIN || "http://localhost:5173";


const PG_PORT = process.env.PG_PORT || 5432;
const PG_USER = process.env.PG_USER || "postgres";
const PG_HOST = process.env.PG_HOST || "localhost";
const PG_DATABASE = process.env.PG_DATABASE || "drums";
const PG_PASSWORD = process.env.PG_PASSWORD || "16350676";

module.exports = {
  PORT,
  ORIGIN,
  PG_PORT,
  PG_USER,
  PG_HOST,
  PG_DATABASE,
  PG_PASSWORD
}
