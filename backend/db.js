const mongoose = require("mongoose");

const url = process.env.DB_URL;

function dbConn (){
     const connectionParams={
          useNewUrlParser: true,
          useUnifiedTopology: true,
          serverSelectionTimeoutMS: 5000,
          autoIndex: false, // Don't build indexes
          maxPoolSize: 10, // Maintain up to 10 socket connections
          serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
          socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
          family: 4 // Use IPv4, skip trying IPv6
     }

     mongoose.connect(url,connectionParams)
     .then( () => {
          console.log('Connected to database ')
     })
     .catch( (err) => {
         console.error(`Error connecting to the database. \n${err}`);
     })
      
}

module.exports = dbConn;




