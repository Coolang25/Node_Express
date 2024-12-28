const connection = require('../config/db')

const users = []

const getHomePage = (req, res) => {

    return res.render('home')
}

const postCreateUser = (req, res) => {
    console.log(req.body)
    return res.render('home')
}

module.exports = {
    getHomePage,
    postCreateUser
}