const { ObjectId } = require('mongodb');
const {teamCollection, applicantCollection} = require('../models/registrationschemas');

// get detail team by teamname
const detailTeam = async (req, res, next) => {
     let teamname
     try{
          teamname = await teamCollection.find({teamName: req.params.teamname})
          if (teamname == null){
               return res.status(404).json({message: 'Team Not Found'})
          }
     } catch (err){
          return res.status(500).json({message: err.message + "~"})
     }
     return res.status(200).json({
          teamname
     })
}

// update team detail
const editTeamDetail = async (req, res, next) => {
     try{
          const data = await teamCollection.findByIdAndUpdate(new ObjectId(req.params.id), req.body) 
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
       const deletedTeam = await teamCollection.findOneAndDelete({ _id: new ObjectId(req.params.id) });
       if (deletedTeam === null) {
         return res.status(404).json({ message: 'Team Not Found' });
       } else {
         return res.status(200).json({ message: 'Team deleted successfully' });
       }
     } catch (error) {
       return res.status(500).json({ error: error.message });
     }
};

// get detail application by username
const detailApplication = async (req, res, next) => {
     let username
     try{
          username = await applicantCollection.find({userName: req.params.id})
          if (username == null){
               return res.status(404).json({message: 'Applicant Not Found'})
          }
     } catch (err){
          return res.status(500).json({message: err.message + "~"})
     }

     return res.status(200).json({
          username
     })
}

// update applicant detail
const editApplicantDetail = async (req, res, next) => {
     try{
          const data = await applicantCollection.findByIdAndUpdate(new ObjectId(req.params.id), req.body) 
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
       const deletedApplicant = await applicantCollection.findOneAndDelete({ _id: new ObjectId(req.params.id) });
       if (deletedApplicant === null) {
         return res.status(404).json({ message: 'Team Not Found' });
       } else {
         return res.status(200).json({ message: 'Team deleted successfully' });
       }
     } catch (error) {
       return res.status(500).json({ error: error.message });
     }
};

module.exports = {
     detailTeam,
     detailApplication,
     delTeamAccount,
     delApplicantAccount,
     editTeamDetail, 
     editApplicantDetail
}