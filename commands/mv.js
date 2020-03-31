//importing filesystem
const fs = require('fs');

//function movinf the file
function mv(old_path, new_path) {
    source = './'
    var old_path_wrt = source.concat(old_path);
    var new_path_wrt = source.concat(new_path);

    fs.rename(old_path_wrt, new_path_wrt, (err) => {
        if (err) {
            console.log("Invalid path");
        } else {
            console.log("File moved");
        }
    });


}

//exporting the mv function
module.exports = mv;