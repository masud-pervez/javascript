const express = require('express')
const { register } = require('../controller/auth.controller')

const router = express.Router()

router
    .route('/register')
    .post(register)

module.exports = router;