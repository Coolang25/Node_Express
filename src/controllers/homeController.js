const connection = require('../config/db')
const { get } = require('../routes/web')
const { getAllUsers, getUserById, updateUserById, deleteUserById } = require('../services/CRUDService')

const User = require('../models/user')

const getHomePage = async (req, res) => {
    let results = await User.find({})
    return res.render('home', { listUsers: results })
}

const getCreatePage = (req, res) => {
    return res.render('create')
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await User.findById(userId).exec()

    return res.render('edit', { userEdit: user })
}

const postCreateUser = async (req, res) => {
    let { email, name, city } = req.body

    await User.create({ email, name, city })

    res.redirect('/')
}

const postUpdateUser = async (req, res) => {
    let { email, name, city, id } = req.body

    await User.updateOne({ _id: id }, { email, name, city }).exec()

    res.redirect('/')
}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    let user = await User.findById(userId).exec()
    res.render('delete', { userEdit: user })
}

const postHandleRemoveUser = async (req, res) => {
    const userId = req.body.id;
    await User.deleteOne({ _id: userId }).exec()

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