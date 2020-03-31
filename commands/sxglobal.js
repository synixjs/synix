// modules
const path = require("path");
const exec = require("child_process").exec;
const os = require("os");

// imports
var sxconfig = require(path.join(__dirname, "..", "sxconfig.json"));

function sxglobal(index, key) {
    if (os.type() == "Windows_NT") {
        exec(`explorer ${sxconfig.Globals[index][key]}`, err => {
            console.log(`Opening ${sxconfig.Globals[index][key]}...`);
        });
    } else if (os.type() == "Linux") {
        exec(`xdg-open ${sxconfig.Globals[index][key]}`, err => {
            console.log(`Opening ${sxconfig.Globals[index][key]}...`);
        });
    } else if (os.type() == "Darwin") {
        exec(`open ${sxconfig.Globals[index][key]}`, err => {
            console.log(`Opening ${sxconfig.Globals[index][key]}...`);
        });
    } else {
        console.log("Your OS is not supported");
    }
}

module.exports = sxglobal;