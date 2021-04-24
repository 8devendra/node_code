const path=require('path')
const express = require('express')
const hbs=require('hbs')
const { title } = require('process')
const app=express()


//Define paths for express config

const publiPath=path.join(__dirname,'../public')
console.log(publiPath)


    //If we want to change view path then follow this steps
        const viewsPath=path.join(__dirname,'../templets/views')
        app.set('views',viewsPath)

        const partialPath=path.join(__dirname,'../templets/partials')
        hbs.registerPartials(partialPath)



//setup an handelbars location
app.set('view engine','hbs')

app.use(express.static(publiPath))


app.get('',(req,res)=>{
    res.render('index',{
        title:'Main Page'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        name:'Devendra',
        last:'Haldankar',
        title:'about'
    })
})

app.get('/weather',(req,res)=>{
    res.render('weather',{
        title:'weather',
        location:'Sawantwadi',
        tempratiure:'48'
    })
})

app.listen(3000,()=>{
    console.log('eXPRESS IS START 3000')
})

/**

//for static web page
app.use(express.static(publiPath))

app.get('',(req,res)=>{
    res.send('Hello Express!')
})

app.post('/',(req,res)=>{
    res.send('Got a post request')
})

app.put('/about',(req,res)=>{
    res.send('Put request')
})

app.get('/about',(req,res)=>{
    res.send('<h1>1about Page..</h1>')
})
 

 */