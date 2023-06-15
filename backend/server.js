require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.SERVER_PORT;

function serverConn(){
     app.listen(PORT, () =>{
          console.log(`Server is running on http://localhost:${PORT}`)
     })
}

module.exports = serverConn;