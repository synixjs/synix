var fs = require('fs');

function cp(old_path, new_path) {
    source = './'
    var old_path_wrt = source.concat(old_path);
    var new_path_wrt = source.concat(new_path);

    fs.copyFile(old_path_wrt, new_path_wrt, (err) => {
        if (err) {
            console.log("File cannot be copied");
        } else {
            console.log(`File ${old_path} has been copied to ${new_path}`);
        }
    });


}

module.exports = cp;