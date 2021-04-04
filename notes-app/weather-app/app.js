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


const request=require('request')
const key=''

const url ="http://api.weatherstack.com/current?access_key="+key+"&query=15.918875,%2073.814398"

request({url:url},(error,response)=>{
    const data=JSON.parse(response.body)

    console.log(data.current)

})