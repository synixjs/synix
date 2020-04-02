// modules
const { spawn,execSync,exec } = require("child_process");

function sync(branchNames) {
    let cmd;
    if (branchNames[0]) {
        if (branchNames[1]) {
            cmd = `git pull upstream ${branchNames[0]} --allow-unrelated-histories && git push origin ${branchNames[1]}`
        } else {
            cmd = `git pull upstream ${branchNames[0]} --allow-unrelated-histories && git push origin master`
        }
    } else {
        cmd = `git pull upstream master --allow-unrelated-histories && git push origin master`
    }

    exec(cmd,{cwd:"."},(error,stdout,stderr) => {
        if(error){
            console.log(error)
        }
        else{
            console.log(stdout)
            console.log(stderr)
        }
    });
}

module.exports = sync;
