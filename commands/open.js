// modules
const exec = require("child_process").exec;
const path = require("path");

// imports
var sxconfig = require(path.join(__dirname, "..", "sxconfig.json"));

function open(pathArray) {
    // remove open from the array
    pathArray = pathArray.slice(1);
    // generate a open string
    cdString = ".";
    pathArray.forEach(dir => {
        cdString = cdString + "/" + dir;
    });
    // execute the open command
    exec(`cd ${cdString} && ${sxconfig.Text_editor[1]['command']} .`, { cwd: process.cwd() }, (error) => {
        if (error) {
            console.error(`exec error: ${error}`);
            console.log('For `open` docs visit https://synix-docs.netlify.com/ccc/commands.html#open')
            return;
        }
        console.log(`Opening ${sxconfig.Text_editor[0]['editor_name']}...`);
    });

}

module.exports = open;