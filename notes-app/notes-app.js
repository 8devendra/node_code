const yargs=require('yargs')

yargs.version('1.1.0')
yargs.command({
    command:'add',
    describe:'Add a new note',
    handler:function(){
        console.log('Adding new notes!')
    }
})

yargs.command({
    command:'remove',
    describe:'removing notes',
    handler:function(){
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

console.log(yargs.argv)