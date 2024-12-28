const express = require('express')
const router = express.Router()
const { getHomePage, postCreateUser, getCreatePage } = require('../controllers/homeController')

router.get('/', getHomePage)

router.get('/create', getCreatePage)
router.post('/create-user', postCreateUser)

module.exports = router