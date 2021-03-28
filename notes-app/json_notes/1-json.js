const fs=require('fs')

// const book={
//     title:'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }
// const bookJSON=JSON.stringify(book)
// fs.writeFileSync('1-json-date.json',bookJSON);

const dataBuffer=fs.readFileSync('1-json-date.json')
const dataJSON=dataBuffer.toString()
const data=JSON.parse(dataJSON)
console.log(data.author)
