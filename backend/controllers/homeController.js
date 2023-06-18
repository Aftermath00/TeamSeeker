const { ObjectId } = require('mongodb');
const {teamCollection, applicantCollection} = require('../models/registrationschemas');

const searchApplicantSkills = async (keywords) => {
     try {
          let data = await applicantCollection.find(
               {
                    skill: {$in: keywords}
               }
          )
          return data;

     } catch (err) {
          throw err
     }
}

const applicantBySkillReq = async (req, res, next) => {
     try{
          const username = new ObjectId(req.params.username);
          const teamData = await teamCollection.findById(username);
          if (teamData){
               const applicantBySkills = await searchApplicantSkills(teamData.skillReq);
               return res.status(200).json({applicantBySkills})
          }
          return res.status(404).json({message: 'Data Not Found'})
          
     } catch (err) {
          return res.status(500).json({ error: err.message });
     }
}

module.exports = {applicantBySkillReq}