const express = require('express')

const router= express.Router()

router.get('/', (res,req)=>{

    res.render('index')
})


module.exports= router