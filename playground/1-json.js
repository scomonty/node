const fs = require('fs');

const book = {
    title: 'The Martian',
    author: 'Andy Wier'
}

// // accept the book object and return it in a string
// const bookJSON = JSON.stringify(book);


// // JSON.parse()  takes in json string and returned a parsed object

// //console.log(bookJSON);

// // create file called 1-JSON and store bookJSON in it
// fs.writeFileSync('1-JSON.json', bookJSON);


// // to read the same file from this file
// const dataBuffer = fs.readFileSync('1-JSON.json');

// //.toString() returns the file in the text expected instead of buffer text
// const dataJSON = dataBuffer.toString();

// //parse the data so that we can access with dot notation.
// const data = JSON.parse(dataJSON);

// console.log(data.author)


const getJSONData = JSON.parse(fs.readFileSync('1-JSON.json'));
getJSONData.name = 'Scott';
getJSONData.age = 38;
//console.log(getJSONData);

const newJSONData = JSON.stringify(getJSONData);

fs.writeFileSync('1-JSON.json', newJSONData);