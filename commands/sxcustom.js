// modules
const path = require("path");
const { spawn } = require("child_process");

// imports
var sxconfig = require(path.join(__dirname, "..", "sxconfig.json"));

function sxcustom(index, key) {
    let cmd = `${sxconfig.Custom[index][key]}`;
    let command = spawn(cmd, [], { shell: true });

    command.stdout.on("data", data => {
        console.log(`${data}`);
    });

    command.stderr.on("data", data => {
        console.log(`Error occured while executing ${sxconfig.Custom[index][key]}`);
    });
}

module.exports = sxcustom;