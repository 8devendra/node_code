const yargs=require('yargs')

const notes=require('./fn-notes.js')

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
    handler:function(argv){
        
        console.log('Title: '+argv.title)
        console.log('Body:'+argv.body)
        notes.addNotes(argv.title,argv.body)
        console.log('Adding new notes!')
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
    handler:function(argv){
        notes.removeNotes(args.title)
        console.log('Removing Notes!')
    }
})

yargs.command({
    command:'list',
    describe:'List all the notes',
    handler:function(){
        console.log('List of all commands')
    }
})

yargs.command({
    command:'read',
    describe:'reading a perticular note',
    handler:function () {
        console.log('Reading command')        
    }
})

yargs.parse();                  //for output display
