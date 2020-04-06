//importing filesystem
const fs = require('fs');

//function removing the files
function rm(path, FileName) {
    //if it contains '*', all files with the extension are deleted
    if (FileName.includes('*')) {
        extension = FileName.slice(1);
        fs.readdir(path, (err, files) => {
            files.forEach(file => {
                if (file.match(extension)) {
                    new_path = path.concat(file);
                    fs.unlink(new_path, (err) => {
                        if (err) {
                            console.log("File does not exist with this name");
                            console.log('For `rm` docs visit https://synix-docs.netlify.com/ccc/commands.html#rm')
                        } else {
                            console.log(`${file} has been deleted`);
                        }
                    });
                }
            });
        });
    } else if (!(FileName.includes('.'))) {
        var new_path = path.concat(FileName);
        fs.rmdir(new_path, { recursive: true }, (err) => {
            if (err) {
                console.log("Folder does not exist with this name");
                console.log('For `rm` docs visit https://synix-docs.netlify.com/ccc/commands.html#rm')
            } else {
                console.log(`${FileName} has been deleted`);
            }
        });
    }
    //else the particular filename is deleted
    else {
        var new_path = path.concat(FileName);
        fs.unlink(new_path, (err) => {
            if (err) {
                console.log("File does not exist with this name");
                console.log('For `rm` docs visit https://synix-docs.netlify.com/ccc/commands.html#rm')
            } else {
                console.log(`${FileName} has been deleted`);
            }
        });
    }

}

//exporting the rm function
module.exports = rm;