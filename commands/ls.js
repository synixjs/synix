//imports
const fs = require('fs');

// function which returns the array of all the directories

function ls(path) {
    fs.readdir(path, (err, files) => {
        files.forEach(file => {
            console.log(`${file}`)
        });
    });
}

// export the function
module.exports = ls;