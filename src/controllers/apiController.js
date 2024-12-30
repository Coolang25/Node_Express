const connection = require('../config/db')
const { get } = require('../routes/web')
const { getAllUsers, getUserById, updateUserById, deleteUserById } = require('../services/CRUDService')

const User = require('../models/user')

const getUsersAPI = async (req, res) => {
    let results = await User.find({})
    return res.status(200).json({
        errorCode: 0,
        data: results
    })
}

const postCreateUserAPI = async (req, res) => {
    let { email, name, city } = req.body

    let user = await User.create({ email, name, city })

    return res.status(200).json({
        errorCode: 0,
        data: user
    })
}

const putUpdateUserAPI = async (req, res) => {
    let { email, name, city, id } = req.body

    let user = await User.updateOne({ _id: id }, { email, name, city }).exec()

    return res.status(200).json({
        errorCode: 0,
        data: user
    })
}

const deleteUserAPI = async (req, res) => {
    const userId = req.body.id;
    let result = await User.deleteOne({ _id: userId }).exec()

    return res.status(200).json({
        errorCode: 0,
        data: result
    })
}

module.exports = {
    getUsersAPI,
    postCreateUserAPI,
    putUpdateUserAPI,
    deleteUserAPI
}