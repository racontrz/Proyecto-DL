const express = require('express');
const morgan = require('morgan');
const routes = require('./src/routes/routes');
const app = express();



const PORT = process.env.PORT || 3000; 

app.use(morgan('dev'));
app.use(express.json());
app.use(routes);


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
