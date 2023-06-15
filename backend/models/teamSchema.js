const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registerTeamSchema = new Schema({
     projectTitle:{
          type: String,
          require: true
     },
     objective:{
          type: String,
          require: true
     },
     position:{
          type: String,
          require: true
     },
     skillReq:{
          type: [String],
          require: true
     },
     description:{
          type: String,
          require: true
     },
     email:{
          type: String,
          require: true
     }
});

const teamCollection =  new mongoose.model("teamCollection", registerTeamSchema);
