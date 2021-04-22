//const { response } = require('express')
const express = require('express')
const app=express()

app.get('',(req,res)=>{
    res.send('Hello Express!')
})

app.get('/about',(req,res)=>{
    res.send('<h1>about Page..</h1>')
})

app.get('/weather',(req,res)=>{
    res.send([{
        location:'Sawantwadi',
        tempratiure:'48'
    }])
})

app.listen(3000,()=>{
    console.log('eXPRESS IS START 3000')
})