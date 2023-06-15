const express = require('express');
const {welcome} = require('../controllers/authController')

const router = express.Router();

router.get('/', (_req, res) => {
     res.send('Welcome to TeamSekeer API');
});

router.get('/registerteam', welcome);
router.get('/registerapplicant', welcome);

module.exports = router;