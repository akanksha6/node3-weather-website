const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/7e13a3db6c16f3e7a6035cff504d8b92/'+ latitude +','+ longitude

    request({url, json: true}, (error,{body}) => {
        if(error) {
            callback('Unable to connect to location services', undefined)
        } else if(body.error) {
            callback('Unable to find location', undefined)
        } else {
            const data = body.currently
            callback(undefined, body.daily.data[0].summary + 'The temperature is ' + data.temperature + '. There is ' + data.precipProbability + '% chance of rain'
            )
        }
    })
}

module.exports = forecast