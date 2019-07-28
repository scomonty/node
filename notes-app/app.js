const validator = require('validator');
const notes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');


// create add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'body title',
            demandOption: true,
            type: 'string'
        }
    },
    //this is a function - function keyword and : removed to shorten
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//create remove command

yargs.command({
    command: 'remove',
    describe: "remove a note",
    builder: {
        title:{
            describe: 'remove title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'show list of notes',
    builder: {
        title:{
            describe: 'show your list',
            type:'string'
        }
    },
    handler(argv) {
        notes.listNotes(argv);
    }
})


// create read command
yargs.command({
    command: 'read',
    describe: 'show notes that have been read',
    builder: {
        title: {
            describe: 'show notes',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

// instead of console.log 
yargs.parse();

//console.log(yargs.argv)

//run in terminal with node app.js {command} --{builder{object}}='text'
//example builder object == title or body