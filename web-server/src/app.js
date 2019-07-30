const express = require('express');

const app = express();

//configure what server should do when someone tries to get resource from url
// takes two aruments first is partial URL ie app.com would be empty string - app.com/help would be '/help'
//second is function where we descrbe what to do when someone visits first argument url
app.get('', (req, res) => {
    res.send('<h1>Weather</h1>');
})

app.get('/help', (req, res) => {
    res.send({
        name: 'scott',
        age: 38
    });
})

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>');
})

app.get('/weather', (req, res) => {
    res.send({
        city: 'stillwater',
        forecast: 'sunny'
    });
})


//to start server and have it listen to specific port
app.listen(3000, () => {
    console.log('server is up on port 3000')
})