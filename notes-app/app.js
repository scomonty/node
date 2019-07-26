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
            describe: 'Note title'
        }
    },
    handler: function(argv) {
        console.log('adding a new note', argv)
    }
})

//create remove command

yargs.command({
    command: 'remove',
    describe: "remove a note",
    handler: function() {
        console.log('removing the note')
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'show list of notes',
    handler: function() {
        console.log('here is your list')
    }
})


// create read command
yargs.command({
    command: 'read',
    describe: 'show notes that have been read',
    handler: function() {
        console.log('hey you read this already')
    }
})

console.log(yargs.argv)