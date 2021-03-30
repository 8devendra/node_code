const fs=require('fs')

// const book={
//     title:'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }
// const bookJSON=JSON.stringify(book)
// fs.writeFileSync('1-json-date.json',bookJSON);

// const dataBuffer=fs.readFileSync('1-json-date.json')
// const dataJSON=dataBuffer.toString()
// const data=JSON.parse(dataJSON)
// console.log(data.author)

// const dataBuffer=fs.readFileSync('1-json-date.json')
// const dataJSON=dataBuffer.toString()
// const data=JSON.parse(dataJSON)
// data.name='Deve'
// const df=JSON.stringify(data)
// fs.writeFileSync('1-json-date.json',df)


//arrow function 
const event={
    name:'Birthday Party',
    guestName:['Dev','om','Vir'],
    printGuestList(){
        console.log('Guest list for '+this.name),
        this.guestName.forEach((guest)=>{
            console.log(guest+' is attending '+this.name)
        })
    }
}

event.printGuestList()