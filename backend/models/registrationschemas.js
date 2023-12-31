const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
     userName:{
          type: String,
          require: true
     },
     password:{
          type: String,
          require: true
     }
}, {timestamps: true});


const accountCollection =  new mongoose.model("accountCollection", accountSchema);

const registerTeamSchema = new Schema(
     {
     userName:{
          type: String,
          require: true
     },
     teamName:{
          type: String,
          require: true
     },
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
     },
     phoneNum:{
          type: String,
          require: true
     },    
}, {timestamps: true});
const teamCollection =  new mongoose.model("teamCollection", registerTeamSchema);

const registerApplicantSchema = new Schema({
     userName:{
          type: String,
          require: true
     },
     fullName:{
          type: String,
          require: true
     },
     major:{
          type: String,
          require: true
     },
     year:{
          type: Number,
          require: true
     },
     expertise:{
          type: String,
          require: true
     },
     skill:{
          type: [String],
          require: true
     },
     description:{
          type: String,
          require: true
     },
     portofolioLink:{
          type: String,
          require: false
     },
     linkedlnLink:{
          type: String,
          require: false
     },
     phoneNum:{
          type: String,
          require: false
     },
     email:{
          type: String,
          require: true
     }
}, {timestamps: true});
const applicantCollection =  new mongoose.model("applicantCollection", registerApplicantSchema);

const matchedSchema = new Schema({
     userNameTeam: {
          type: String,
          require: true
     },
     userNameApplicants: {
          type: [String],
          require: true
     }
}, {timestamps: true})
const matchedCollection =  new mongoose.model("matchedCollection", matchedSchema)

module.exports = {accountCollection, teamCollection, applicantCollection, matchedCollection};