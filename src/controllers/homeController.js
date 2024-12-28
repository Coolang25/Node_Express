const connection = require('../config/db')

const users = []

const getHomePage = (req, res) => {
    // simple query
    connection.query(
        'SELECT * FROM users',
        function (err, results, fields) {
            users = results
            console.log(results);
            res.send(JSON.stringify(users))
        }
    )
}

module.exports = {
    getHomePage
}