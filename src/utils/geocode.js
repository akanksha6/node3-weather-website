const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2l2YW5heSIsImEiOiJjazRxb21sdWEwNG8yM2psaXFpbzRkbzduIn0.r9GxRwNXsitsz76GuSomOg'

    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to location services', undefined)
        } else if(body.features.length === 0){
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

//we pass error, response. But since we're using body property of response, we destructure the response object and use only body

module.exports = geocode