const geoCode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');
const yargs = require('yargs');


// const url = 'https://api.darksky.net/forecast/85e472822c26164541fa808e7b8073c1/37.8267,-122.4233'

// // add json: true to auto parse the response data
//     request({ url:url, json: true }, (error, response) => {
//      //console.log(response.body.currently);
//      console.log(`It is currently ${response.body.currently.temperature} degrees ouside. There is a ${response.body.currently.precipProbability}% chance of rain.`)
//   })







yargs.command({
    command: 'location',
    describe: 'enter your location',
    builder: {
        title: {
            describe: 'location',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        geoCode(argv.title, (error, data) => {
            const {latitude, longitude, placeName} = data
            if(error) {
                return console.log(error)
            }
            forecast(latitude, longitude, (error, forecastData) => {
                if(error) {
                    return console.log(error)
                }
                console.log(placeName);
                console.log(forecastData.forecast);
              })
        
        })
    }
})

yargs.parse();