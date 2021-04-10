const request=require('request')

const geoLocation=(address,callback)=>{
    const urlLoca="https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1IjoiZGV2ZW5kcmE2OTY5IiwiYSI6ImNrbjR0OHR3czFqYzgybmxybzVmODZ1a3oifQ.1-SCcE8Tddr_1SCHRZNVSg"

    request({url:urlLoca,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect to location service!',undefined)
        }else if (response.body.features[0].length===0){
            callback('Unable to find location, Try another serach',undefined)
        }else{
            callback(undefined,{
                latitude:response.body.features[0].center[1],
                longitude:response.body.features[0].center[0],
                location:response.body.features[0].place_name
            })
        }
    })
}


module.exports=geoLocation