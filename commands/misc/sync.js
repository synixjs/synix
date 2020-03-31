// modules
const { spawn } = require("child_process");

function sync(branchNames) {
    let cmd;
    if (branchNames[0]) {
        if (branchNames[1]) {
            cmd = `git pull upstream ${branchNames[0]} && git push origin ${branchNames[1]}`
        } else {
            cmd = `git pull upstream ${branchNames[0]} && git push origin`
        }
    } else {
        cmd = `git pull upstream && git push origin`
    }

    let command = spawn(cmd, [], { shell: true });

    command.stderr.on("data", data => {
        console.log(`${data}`)
    });
}

module.exports = sync;