const app = require('./app');
require("dotenv").config();
const { PORT } = require('./config.js');



app.listen(PORT)
console.log('Server on port', PORT)