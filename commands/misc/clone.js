// modules
const { spawn } = require("child_process");

function clone(urls) {
    if (!urls[0]) {
        console.log("url not given")
        return
    }
    let cmd;
    let folderName = urls[0].substring(urls[0].lastIndexOf("/") + 1, urls[0].lastIndexOf("."))
    if (urls[1]) {
        if (urls[2]) {
            cmd = `git clone ${urls[0]} && cd ${folderName} && git remote add ${urls[2]} ${urls[1]}`
        } else {
            cmd = `git clone ${urls[0]} && cd ${folderName} && git remote add upstream ${urls[1]}`
        }
    } else {
        cmd = `git clone ${urls[0]}`
    }

    let command = spawn(cmd, [], { shell: true });

    command.stderr.on("data", data => {
        console.log(`${data}`)
    });
}

module.exports = clone;