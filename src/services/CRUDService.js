const connection = require('../config/db')

const getAllUsers = async () => {
    let [results, fields] = await connection.query('select * from Users')
    return results;
}

const getUserById = async (id) => {
    let [results, fields] = await connection.query('select * from Users where id = ?', [id])

    return results && results.length > 0 ? results[0] : {}
}

const updateUserById = async (id, email, name, city) => {
    let [results, fields] = await connection.query(
        `UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?`,
        [email, name, city, id]
    )
}

const deleteUserById = async (id) => {
    let [results, fields] = await connection.query(
        `DELETE FROM Users WHERE id = ?`,
        [id]
    )
}

module.exports = {
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById
}