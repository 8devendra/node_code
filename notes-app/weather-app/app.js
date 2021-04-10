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




geoLocation('Sawantwadi',(error,data)=>{
    if(error){
        console.log(error)
    }else{
        //console.log(data)
        const loca=data.location
        getWeather(data.latitude,data.longitude,(error,data)=>{
            if(error){
                console.log(error)
            }else {
                console.log('It is currently ' + data.temp + ' degrees out. There is a ' + data.precip + ' chance of rain at '+loca+' place. ')
            }
        })
        
    }
})







