const request = require('request');

const geoCode = (address, callback) => {
    const geoCodeurl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiZGlja2V5ZGlja3VtcyIsImEiOiJjanlvcnV5aTIxN3ZpM2NwaHQyZWpqMW9yIn0.df-8RnY_qyc5rHfMAB0IQQ&limit=1`;
    request({url:geoCodeurl, json: true}, (error, response) => {
        const {body} = response
        const {features} = body
        const {center, place_name} = features[0]
        if(error) {
            callback(`unable to connect to location services`, undefined)
        }
        else if(!response.body.features.length) {
            callback(`unable to find location. try another search`, undefined)
        }
        else {
            callback(undefined, {
                latitude: center[0],
                longitude:center[1],
                placeName:place_name
            });
        }
    })
    
    }

 module.exports = geoCode;