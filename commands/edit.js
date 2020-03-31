// modules
const path = require("path");
const exec = require("child_process").exec;

// imports
var filePath = path.join(__dirname, "..");
var sxconfig = require(path.join(__dirname, "..", "sxconfig.json"));


function edit() {
    exec(`cd ${filePath} && ${sxconfig.Text_editor[1]['command']} sxconfig.json`, error => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`Opening Config file...`);
    });
}

module.exports = edit;