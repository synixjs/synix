//importing filesystem
const fs = require('fs');

//function checking the contents of file
function cat(path, FileName) {
    var new_path = path.concat(FileName);

    fs.readFile(new_path, "utf-8", (err, data) => {
        if (err) {
            console.error("File does not exist with this name");
            console.log('Please check your current working directory')
            console.log('For `cat` docs visit https://synix-docs.netlify.com/ccc/commands.html#cat')
        } else {
            console.log('\n');
            console.log(data);
            console.log('\n');
        }
    });


}

//exporting the cat function
module.exports = cat;