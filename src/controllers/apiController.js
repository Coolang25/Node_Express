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

module.exports = {
    getUsersAPI,
}