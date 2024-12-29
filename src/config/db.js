require('dotenv').config
const mongoose = require('mongoose')

const connection = async () => {
    const options = {
        user: process.env.DB_USER,
        pass: process.env.DB_PASSWORD,
    }

    await mongoose.connect(process.env.DB_HOST, options)
    const state = Number(mongoose.connection.readyState)
    console.log(state)
}

module.exports = connection