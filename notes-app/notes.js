const fs = require('fs');
const chalk = require('chalk');


const getNotes = () => { return 'Your notes...' }

const addNote =  (title, body) => {
        const notes = loadNotes()
        // check to make sure note doesn't alredy exist
        const duplicateNote = notes.find( (note) => {
                return note.title === title
        })

        if(!duplicateNote) {
            notes.push({
                title: title,
                body:body
            })
            saveNotes(notes) 
        }
        else {
            console.log('note title already exists');
        }
 
}


const readNote = (title) => {
    const notes = loadNotes();
    const checkNotes = notes.find( (note) => {
        return note.title === title
    })
    if(checkNotes) {
        console.log(chalk.cyan(` title: ${checkNotes.title}`));
        console.log(`body: ${checkNotes.body}`)
    }
    else {
        console.log(chalk.red('note not found'));
    }
}



const removeNote = (title) => {
    const notes = loadNotes();
    const checkNotes = notes.filter( (note) => {
        return note.title === title
    })

    if(checkNotes.length === 0) {
        console.log(chalk.red.inverse('note does not exist'));
    }
    else {
        const removeArray = notes.filter( (note) => {
            return note.title !== title;
        })
        saveNotes(removeArray);
        console.log(chalk.green.inverse('note removed'))
    }

}

const listNotes = () => {
    const notes = loadNotes();
    notes.forEach( (note) => {
        console.log(chalk.blue(`your notes: ${note.title}`));
      });

}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}



const loadNotes = () => {
   try{
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson)
   }
   catch(e) {
    return[];
   }
   

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}