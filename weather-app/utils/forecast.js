const request = require('request');



const forecast = (lon, lat, callback) => {
    const url = `https://api.darksky.net/forecast/85e472822c26164541fa808e7b8073c1/${lat},${lon}`;
    request({url:url, json: true}, (error, response) => {
        const {body} = response
        const {currently} = body
        const {temperature, precipProbability} = currently
        if(error) {
            callback(`unable to connect to location services`, undefined)
        }
        else if(response.body.code === 400) {
            callback(`unable to find location. try another search`, undefined)
        }
        else {
            callback(undefined, {
                forecast: `It is currently ${temperature} degrees ouside. There is a ${precipProbability}% chance of rain.`
            });
        }
    })

}

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)



module.exports = forecast;