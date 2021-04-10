const request = require('request')

const key = "8b40874695d7af12ec761403ac1cedce"
const getWeather = (lat, lon, callback) => {


    if (lat >= -90 && lat <= 90 && lon >= -180 && lon <= 180) {
        const urlWeather = "http://api.weatherstack.com/current?access_key=" + key + "&query=" + lat + ",%20" + lon
        request({ url: urlWeather, json: true }, (error, response) => {
            if (error) {
                callback('Can\'t Connect network Service right now... Plese Try some time...', undefined)
            } else {
                callback(undefined, { temp: response.body.current.temperature, precip: response.body.current.precip })
            }
        })
    } else {
        callback('Invalid Location data', undefined)
    }





}

module.exports = getWeather