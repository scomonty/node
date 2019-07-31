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



module.exports = forecast;