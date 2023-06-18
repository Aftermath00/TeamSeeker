const { ObjectId } = require('mongodb');
const {teamCollection, applicantCollection} = require('../models/registrationschemas');

const searchApplicantSkills = async (res, keyword0, keyword1 = null, keyword2 = null, ...others) => {
     try {
          // const skills = [keyword0, keyword1, keyword2, ...others];
          let data = await applicantCollection.find(
               {
                    skill: {$in: keyword0}
               }
          )
          return console.log(data);
     } catch (err) {
          throw err
     }
}


const teamNames = async (req, res, next) => {
     try{
          const teamId = new ObjectId(req.params.id);
          const teamData = await teamCollection.findById(teamId);
          if (teamData){
               const applicantSkills = await searchApplicantSkills(...teamData.skillReq);
               return res.status(200).json({applicantSkills})
          }
          return res.status(404).json({message: 'Data Not Found'})
          
     } catch (err) {
          return res.status(500).json({ error: err.message });
     }
}

module.exports = {teamNames}