const fs=require('fs')
const chalk=require('chalk')
//const { title } = require('process')

const getNotes= () =>{
    const nts=loadNotes()
    if(nts.length>0){
        //const i=1
        nts.forEach((notes)=>{
            console.log(chalk.bold(notes.title+'   ')+notes.body)
            //i++
        })
    }else{
        console.log(chalk.bgRed.bold.inverce('Empty note... Add new notes..'))
    }
    return 'Your Notes..'
}

const readNote=(tit)=>{
    const notes=loadNotes()
    const rdNots=notes.find((note)=>note.title===tit)
    if(rdNots){
        console.log(chalk.italic('Body:  '+ rdNots.body))
    }else{
        console.log('No title found')
    }
}

const addNotes=(title,body)=>{
    const notes=loadNotes()
    //const duplicate=notes.filter((note)=>{return note.title===title})
    const duplicate=notes.find((note)=>note.title===title)


    // const duplicate=notes.filter(function(note){
    //     return note.title===title
    // })

    if(!duplicate){
        notes.push ({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen.bold.white('Notes Added'))

    }else{
        console.log(chalk.bgRed.bold.white('Title has been taken'))
    }  
}

const saveNotes=(notes)=>{
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes=()=>{
    try {
    const databuffer=fs.readFileSync('notes.json')
    const dataJSON=databuffer.toString()
    return JSON.parse(dataJSON)
    }
    catch (r){
        return []
    }
}

const removeNotes=(notesTi)=>{
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
    removeNotes:removeNotes,
    getNotes:getNotes,
    readNote:readNote
}