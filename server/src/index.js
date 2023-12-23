const app = require('./app');
require("dotenv").config();
const { PG_PORT } = require('./config.js');



app.listen(PG_PORT)
console.log(`Server on port, ${ PG_PORT }`)