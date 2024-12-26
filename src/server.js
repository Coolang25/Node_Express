const express = require('express') // commonjs
const path = require('path')
require('dotenv').config()
// import express from 'express' es modules

const app = express()
const port = process.env.PORT || 8080
const hostname = process.env.HOST_NAME

// config template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    // res.send('Hello World!')
    res.render('sample.ejs')
})

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
