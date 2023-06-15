require('dotenv').config();
const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = process.env.SERVER_PORT;
const BASE_PATH = process.env.BASE_PATH || '/api';

function serverConn(){
     app.listen(PORT, () =>{
          console.log(`Server is running on http://localhost:${PORT}`)
     })
}

app.use(BASE_PATH, routes)

module.exports = serverConn;