const connection = require('../config/db')
const { get } = require('../routes/web')
const { getAllUsers, getUserById, updateUserById, deleteUserById } = require('../services/CRUDService')

const users = []

const getHomePage = async (req, res) => {
    let results = await getAllUsers()
    return res.render('home', { listUsers: results })
}

const getCreatePage = (req, res) => {
    return res.render('create')
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId)

    return res.render('edit', { userEdit: user })
}

const postCreateUser = async (req, res) => {
    let { email, name, city } = req.body

    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES ( ?, ?, ?)`,
        [email, name, city]
    )

    res.redirect('/')
}

const postUpdateUser = async (req, res) => {
    let { email, name, city, id } = req.body

    await updateUserById(id, email, name, city)

    res.redirect('/')
}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId)
    res.render('delete', { userEdit: user })
}

const postHandleRemoveUser = async (req, res) => {
    const userId = req.body.id;
    await deleteUserById(userId)

    res.redirect('/')
}


module.exports = {
    getHomePage,
    getCreatePage,
    postCreateUser,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser
}