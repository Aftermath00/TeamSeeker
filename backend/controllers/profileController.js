const {teamCollection, applicantCollection} = require('../models/registrationschemas');

// get detail team by teamname
const detailTeam = async (req, res, next) => {
     let dataTeamDetail
     try{
          dataTeamDetail = await teamCollection.find({userName: req.params.username})
          if (dataTeamDetail == null){
               return res.status(404).json({message: 'Team Not Found'})
          }
     } catch (err){
          return res.status(500).json({message: err.message + "~"})
     }
     return res.status(200).json({
          dataTeamDetail
     })
}

// update team detail
const editTeamDetail = async (req, res, next) => {
     try{
          const data = await teamCollection.findOneAndUpdate({userName: req.params.username}, req.body) 
          if (!data){
               return res.status(404).json({message: 'Data Not Found'})
          }
          return res.status(200).json({ message: 'Detail Updated successfully' });
     } catch (err) {
          return res.status(500).json({ error: err.message });
     }
}

// delete team account
const delTeamAccount = async (req, res, next) => {
     try {
       const deletedTeam = await teamCollection.findOneAndDelete({userName: req.params.username});
       if (deletedTeam === null) {
         return res.status(404).json({ message: 'Team Not Found' });
       } else {
         return res.status(200).json({ message: 'Team deleted successfully' });
       }
     } catch (error) {
       return res.status(500).json({ error: error.message });
     }
};

// get detail applicant by username
const detailApplicant = async (req, res, next) => {
     let dataDetailApplicant
     try{
          dataDetailApplicant = await applicantCollection.find({userName: req.params.username})
          if (dataDetailApplicant == null){
               return res.status(404).json({message: 'Applicant Not Found'})
          }
     } catch (err){
          return res.status(500).json({message: err.message + "~"})
     }

     return res.status(200).json({
          dataDetailApplicant
     })
}

// update applicant detail
const editApplicantDetail = async (req, res, next) => {
     try{
          const data = await applicantCollection.findOneAndUpdate({userName: req.params.username}, req.body) 
          if (!data){
               return res.status(404).json({message: 'Data Not Found'})
          }
          return res.status(200).json({ message: 'Detail Updated successfully' });
     } catch (err) {
          return res.status(500).json({ error: err.message });
     }
}

// delete applicant account
const delApplicantAccount = async (req, res, next) => {
     try {
       const deletedApplicant = await applicantCollection.findOneAndDelete({userName: req.params.username});
       if (deletedApplicant === null) {
         return res.status(404).json({ message: 'Applicant Not Found' });
       } else {
         return res.status(200).json({ message: 'Applicant deleted successfully' });
       }
     } catch (error) {
       return res.status(500).json({ error: error.message });
     }
};

module.exports = {
     detailTeam,
     detailApplicant,
     delTeamAccount,
     delApplicantAccount,
     editTeamDetail, 
     editApplicantDetail
}