const {teamCollection, applicantCollection} = require('../models/registrationschemas');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const teamRegistration = (req, res, next) => {
     bcrypt.hash(req.body.password, 10, (err, hashedPass) => {
          if(err){
               res.json({
                    error: err
               })
          }
          let team = new teamCollection ({
               teamName: req.body.teamName,
               projectTitle: req.body.projectTitle, 
               objective: req.body.objective,
               position: req.body.position,
               skillReq: req.body.skillReq,
               description: req.body.description,
               email: req.body.email,
               password: hashedPass,
          })
          team.save()
               .then(team => {
                    res.json({
                         message: "Team registration Successful!"
                    })
               })
               .catch(err => { 
                    res.status(500).json({
                         error: err
                    })
               })
     })

     

}

const applicantRegistration = (req, res, next) => {
     bcrypt.hash(req.body.password, 10, (err, hashedPass) => {
          if(err){
               res.json({
                    error: err
               })
          }
          let applicant = new applicantCollection ({
               fullName: req.body.fullName,
               userName: req.body.userName,
               major: req.body.major, 
               semester: req.body.semester,
               expertise: req.body.expertise,
               skill: req.body.skill,
               description: req.body.description,
               portofolioLink: req.body.portofolioLink,
               email: req.body.email,
               password: hashedPass,

          })
          applicant.save()
               .then(() => {
                    res.status(200).json({
                         message: "Applicant registration Successful!"
                    })
               })
               .catch(err => { 
                    res.status(500).json({
                         error: err
                    })
               })
     })

}

const teamLogin = (req, res, next) => {
     let teamname = req.body.teamNameLogin
     let password = req.body.passwordLogin

     teamCollection.findOne({teamName:teamname})
     .then(team =>{
          if (team){
               bcrypt.compare(password, team.password, (err, result) => {
                    if (err){
                         res.json({
                              message: err
                         }) 
                    }
                    if (result){
                         res.json({
                              message: 'Login Successful!'
                         }) 
                    } else{
                         res.json({
                              message: 'Wrong Password!'
                         }) 
                    }
               })
          } else{
               res.json({
                    message: 'No user found!'
               })
          }
     })
     
}

const applicantLogin = (req, res, next) => {
     let username = req.body.usernameLogin
     let password = req.body. 

     applicantCollection.findOne({userName:username})
     .then(applicant =>{
          if (applicant){
               bcrypt.compare(password, applicant.password, (err, result) => {
                    if (err){
                         res.json({
                              message: err
                         }) 
                    }
                    if (result){
                         res.json({
                              message: 'Login Successful!'
                         }) 
                    } else{
                         res.json({
                              message: 'Wrong Password!'
                         }) 
                    }
               })
          } else{
               res.json({
                    message: 'No user found!'
               })
          }
     })
     
}




module.exports = {teamRegistration, applicantRegistration, teamLogin, applicantLogin};