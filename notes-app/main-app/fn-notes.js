const fs=require('fs')
const chalk=require('chalk')
//const { title } = require('process')

const getNotes=function () {
    return 'Your Notes..'
}

const addNotes=function(title,body){
    const notes=loadNotes()
    const duplicate=notes.filter(function(note){
        return note.title===title
    })

    if(duplicate.length===0){
        notes.push ({
            title:title,
            body:body
        })
        saveNotes(notes)
        return 'Notes Added'

    }else{
        console.log(chalk.bgRed.bold.white('Title has been taken'))
    }  
}

const saveNotes=function(notes){
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes=function(){
    try {
    const databuffer=fs.readFileSync('notes.json')
    const dataJSON=databuffer.toString()
    return JSON.parse(dataJSON)
    }
    catch (r){
        return []
    }
}

const removeNotes=function(notesTi){
    //console.log(notesTi)
    const notes=loadNotes()
    const rmv=notes.filter(function(notes){
        return notes.title!==notesTi
    })
    if(notes.length>rmv.length){
        saveNotes(rmv)
        console.log(chalk.bgGreen.bold.white('Note Remove'))
    }else{
        console.log(chalk.bgRed.bold.white('No title Found..'))
    }
    
        //delet code
        
 
}

module.exports={
    getNotes:getNotes,
    addNotes:addNotes,
    removeNotes:removeNotes
}