//can view all documentation at expressjs.com - API reference tab
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const forecast = require('./utils/forecast');
const geoCode = require('./utils/geocode');

// console.log(__dirname);
// console.log(__filename);

//define paths for express config
const publicDirectory = path.join(__dirname, '../public');
// if we want to name the hbs folder something other than views - this is the first line needed  - second argument is the folder name
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');


const app = express();

//setup static directory to serve
app.use(express.static(publicDirectory));

//configure what server should do when someone tries to get resource from url
// takes two aruments first is partial URL ie app.com would be empty string - app.com/help would be '/help'
//second is function where we descrbe what to do when someone visits first argument url
// app.get('', (req, res) => {
//     res.send('<h1>Weather</h1>');
// })

// app.get('/help', (req, res) => {
//     res.send({
//         name: 'scott',
//         age: 38
//     });
// })

// app.get('/about', (req, res) => {
//     res.send('<h1>About</h1>');
// })

app.get('/weather', (req, res) => {
    if(!req.query.address) {
        return res.send({
            error: 'you must provide an address'
        })
    }

    geoCode(req.query.address, (error, {latitude, longitude, placeName} ) => {
        if(error) {
            return res.send({error:error})
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if(error) {
                return res.send({error:error})
            }
            return res.send({
                location: placeName,
                forecast: forecastData,
                address: req.query.address
            })
          })

    });
})




//to add in index.hbs from views folder
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Scott'
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
        name: 'Scott'

    })
})


app.get('/help', (req, res) => {
    res.render('help', {
        title: 'help',
        name: 'lorem ipsum'
    })
})




app.get('/products', (req, res) => {
    if(!req.query.search) {
        return res.send({
            error: 'you must provide a search term'
        })
    }
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: ' article not found',
        name: 'Scott'
    })

})

//for 404 page must be last app.get
app.get('*', (req, res) => {
    res.render('404', {
       title: '404 page not found',
       name: 'Scott'
    })
})


//to set up handlebars npm package
app.set('view engine','hbs')
// if we want to name the hbs folder something other than views - this is the second line needed
app.set('views', viewsPath)
hbs.registerPartials(partialsPath);


//to start server and have it listen to specific port
app.listen(3000, () => {
    console.log('server is up on port 3000')
})