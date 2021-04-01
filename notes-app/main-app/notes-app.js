const yargs=require('yargs')
const chalk=require('chalk')

const notes=require('./fn-notes.js')
const { demandOption } = require('yargs')

yargs.version('1.1.0')
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption: true,
            type:'string'
        },
        body:{
            describe:'Note Body',
            demandOption:true,
        }
    },
    handler(argv){        
        console.log('Title: '+argv.title)
        console.log('Body:'+argv.body)
        notes.addNotes(argv.title,argv.body)
        
    }
})

yargs.command({
    command:'remove',
    describe:'removing notes',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
        //console.log('Removing Notes!')
    }
})

yargs.command({
    command:'list',
    describe:'List all the notes',
    builder:{
        all:{
            describe:'All notes displyed..',
            demandOption:false,
            type:'string'
        }      
    },
    handler(argv){
        console.log('List of all commands')
        notes.getNotes()

    }
})

yargs.command({
    command:'read',
    describe:'reading a perticular note',
    builder:{
        title:{
            describe:'Title of note that you want to read',
            demandOption:true,
            type:'string'
        }
    },

    handler(argv) {
        //console.log('Reading command')        
        notes.readNote(argv.title)
    }
})

yargs.parse();                  //for output display
