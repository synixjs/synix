//importing filesystem
const fs = require('fs');

//function checking the contents of file
function cat(path, FileName) {
    var new_path = path.concat(FileName);

    fs.readFile(new_path, "utf-8", (err, data) => {
        if (err) {
            console.log("File does not exist with this name");
        } else {
            console.log(`${FileName} has the following contents:`);
            console.log('\n');
            console.log(data);
            console.log('\n');
        }
    });


}

//exporting the cat function
module.exports = cat;