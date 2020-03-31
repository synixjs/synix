var fs = require("fs");

function touch(path, FileName = "New") {
    var new_path = path.concat(FileName);

    fs.open(new_path, "wx", (err, fd) => {
        if (err) {
            console.log("File cannot be created");
        } else {
            console.log(`File ${FileName} has been created succesfully`);
        }
        fs.close(fd, (err) => {
            if (err) {
                console.log("File cannot be closed");
            }
        });
    });
};

module.exports = touch;