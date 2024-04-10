const router = require('express').Router()
const {signup,login, getUser} = require('../controllers/userControllers')

router.post('/login',login)
router.post('/signup',signup)

module.exports = router