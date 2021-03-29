const fs=require('fs')
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
        console.log('Title has been taken')
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
    const notes=loadNotes()
        
}

module.exports={
    getNotes:getNotes,
    addNotes:addNotes
}