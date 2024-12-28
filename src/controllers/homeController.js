const connection = require('../config/db')

const users = []

const getHomePage = (req, res) => {

    return res.render('home')
}

const getCreatePage = (req, res) => {

    return res.render('create')
}

const postCreateUser = async (req, res) => {
    let { email, name, city } = req.body


    let [result, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES ( ?, ?, ?)`,
        [email, name, city]
    )

    res.send('ok')
}

module.exports = {
    getHomePage,
    getCreatePage,
    postCreateUser
}