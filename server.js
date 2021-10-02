if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

const express = require('express')
const expressLayouts= require('express-ejs-layouts')
const indexRouter = require('./routes/index.js')
const app= express()

app.set('view engine','ejs')
app.set('views',__dirname + '/views')
app.set('layout','layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

const mongoose = require('mongoose')

mongoose.connect( process.env.DATABASE_URI)

const db =mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to database'))
app.use('/',indexRouter)

app.listen(env.process.PORT || 3000)
