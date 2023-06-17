const express = require('express');
const router = express.Router();
const {
     teamRegistration, 
     applicantRegistration, 
     teamLogin,
     applicantLogin,
} = require('../controllers/authController')

const {
     detailTeam,
     detailApplication,
     delTeamAccount,
     delApplicantAccount,
     editTeamDetail,
     editApplicantDetail
} = require('../controllers/profileController')

router.get('/', (_req, res) => {
     res.send('Welcome to TeamSekeer API');
});

router.post('/registerteam', teamRegistration);
router.post('/registerapplicant', applicantRegistration);
router.post('/teamlogin', teamLogin);
router.post('/applicantlogin', applicantLogin);
router.get('/detailteam/:teamname', detailTeam);
router.get('/detailapplicant/:username', detailApplication);
router.delete('/delteam/:id', delTeamAccount);
router.delete('/delapplicant/:id', delApplicantAccount);
router.put('/editteamdetail/:id', editTeamDetail);
router.put('/editapplicantdetail/:id', editApplicantDetail);

module.exports = router;