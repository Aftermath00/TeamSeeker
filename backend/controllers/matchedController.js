const {matchedCollection, applicantCollection, teamCollection} = require('../models/registrationschemas');


// adding matched
const addingMatched = async (req, res, next) => {
     try {
          const userNameTeam = req.body.userNameTeam
          const userNameApplicants = req.body.userNameApplicants

          let userNameTeamChecking = await matchedCollection.findOne({userNameTeam: userNameTeam })
          if (userNameTeamChecking != null){
               userNameTeamChecking.userNameApplicants.push(userNameApplicants)                    
          } else{
               userNameTeamChecking = new matchedCollection({
                    userNameTeam: userNameTeam,
                    userNameApplicants: [userNameApplicants]
               });
          }
          await userNameTeamChecking.save()
          res.json({
               message: "Matching Successful!"
          })
     } catch (error) {
          res.status(500).json({
               error: error.message
          })
     }
}

// getting matches
const gettingMatches = async (req, res, next) => {
     try{
         const matches = await matchedCollection.find({userNameTeam: req.body.usernameTeam})
          if (matches == null){
               return res.status(404).json({message: 'Matches Not Found'})
          }
          const {userNameApplicants} = matches[0];
          return res.status(200).json({
               userNameApplicants
          })

     } catch (err){
          return res.status(500).json({message: err.message + "~"})
     }
}

// deleting match
const deleletingMatch = async (req, res, next) => {
     try {
          const usernameteam = req.body.usernameTeam;
          const usernameapplicant = req.body.usernameApplicant;
          
          const updatedMatch = await matchedCollection.updateOne(
               { userNameTeam: usernameteam },
               { $pull: { userNameApplicants: usernameapplicant } }
          );
         
          if (updatedMatch.nModified === 0) {
               return res.status(404).json({ message: 'Team or Applicant Not Found' });
          }
          return res.status(200).json({ message: 'Match deleted successfully' });
     } catch (error) {
          return res.status(500).json({ error: error.message });
     }
};


module.exports = {addingMatched, gettingMatches, deleletingMatch}