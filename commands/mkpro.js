const exec = require("child_process").exec;

function mkpro(name) {
    // execute the mkpro command
    exec(`sx mkdir ${name} && sx open ${name}`, { cwd: process.cwd() }, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        } else {
            console.log("Creating Project....");
        }
    });
}

module.exports = mkpro;