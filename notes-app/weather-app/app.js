// console.log("Starting")
// setTimeout(()=>{
//     console.log("2 sec Timeout")
// },2000)
// setTimeout(()=>{
//     console.log("1 sec Timeout")
// },1000)
// setTimeout(()=>{
//     console.log("0 ms Timeout")
// },0)
// console.log("Stoping")
const request = require('request')
const geoLocation=require('./utill/geocode')
const getWeather=require('./utill/weatherCode')




// geoLocation('Kudal',(error,data)=>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log(data)
//     }




getWeather('16.017475','73.67801449999999',(error,data)=>{
    if(error){
        console.log(error)
    }else{
        console.log('It is currently ' + data.temp + ' degrees out. There is a ' + data.precip + ' chance of rain.')
    }
})