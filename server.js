if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express')
const expressLayouts= require('express-ejs-layouts')
const bodyParser = require('body-parser')
const indexRouter = require('./routes/index.js')
const authorsRouter= require('./routes/authors.js')
const booksRouter= require('./routes/books.js')
const methodOveride=require('method-override')
const app= express()
const path=require('path')
app.set('view engine','ejs')
app.set('views',__dirname + '/views')
app.set('layout','layouts/layout')
app.use(expressLayouts)
app.use(methodOveride('_method'))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({limit:'10mb', extendended:false }))

const mongoose = require('mongoose')

mongoose.connect( process.env.DATABASE_URI)

const db =mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to database'))
app.use('/',indexRouter)
app.use('/authors',authorsRouter)
app.use('/books',booksRouter)

app.listen(process.env.PORT || 3000)