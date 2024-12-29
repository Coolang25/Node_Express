require('dotenv').config()
const express = require('express') // commonjs
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const apiRoutes = require('./routes/api')
const connection = require('./config/db')

const app = express()
const port = process.env.PORT || 8080
const hostname = process.env.HOST_NAME

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// config view engine
configViewEngine(app)

app.use('/', webRoutes);
app.use('/v1/api/', apiRoutes);

(async () => {
    try {
        await connection()
        app.listen(port, hostname, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (error) {
        console.log("error", error)
    }
})()
