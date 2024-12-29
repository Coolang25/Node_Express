require('dotenv').config()
const express = require('express') // commonjs
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const connection = require('./config/db')
const Kitten = require('./models/Kitten')

const app = express()
const port = process.env.PORT || 8080
const hostname = process.env.HOST_NAME

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// config view engine
configViewEngine(app)

app.use('/', webRoutes);

const cat = new Kitten({ name: 'Zildjian' });
cat.save();

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
