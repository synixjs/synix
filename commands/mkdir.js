//importing filesystem
const fs = require('fs');

//function making the directory
function mkdir(path, FolderName = "New") {
    var new_path = path.concat(FolderName);

    fs.mkdir(new_path, (err) => {
        if (err) {
            console.log("Folder with this name already exists. Please check your cwd");
        } else {
            console.log(`Folder ${FolderName} created`);
        }
    });


}

//exporting the mkdir function
module.exports = mkdir;