#!/usr/bin/env node

// Modules
const path = require("path");
const process = require('process');

// command imports form ./commands/exportFile.js
var {
    init,
    ls,
    pwd,
    open,
    mkdir,
    cat,
    rm,
    mkpro,
    mv,
    sxglobal,
    sxcustom,
    edit,
    touch,
    cp,
    clone,
    sync,
    version,
    help
} = require("./commands/exportFile.js");

// Config File
var sxconfig = require(path.join(__dirname, "sxconfig.json"))

// Arrays for keys of global, custom and editor commands
// 1) Globals
var globKeys = [];
sxconfig.Globals.forEach(obj => {
    globKeys.push(Object.keys(obj)[0]);
});

// 2) Custom
var custKeys = [];
sxconfig.Custom.forEach(obj => {
    custKeys.push(Object.keys(obj)[0]);
});

// Initializise command
passedArgs = process.argv.slice(2);
if (passedArgs.length == 2 && passedArgs[0].toLowerCase() == "init") {
    init(passedArgs[1].toLowerCase());
    process.exit(0);
}

// Check if SYNIX is initialized
// 1) Globals
sxconfig.Globals.forEach((obj) => {
    if (Object.values(obj)[0] == "None") {
        console.log("SYNIX is not initialized")
        process.exit(0);
    }
})

// 2) Text_editor
sxconfig.Text_editor.forEach((obj) => {
    if (Object.values(obj)[0] == "None") {
        console.log("SYNIX is not initialized")
        process.exit(0);
    }
})

// argument parsing
if (passedArgs.length == 0) {
    console.error(`No arguments passed`);
} else if (passedArgs.length == 1 && passedArgs[0].toLowerCase() == "ls") {
    ls("./");
} else if (passedArgs.length == 1 && passedArgs[0].toLowerCase() == "pwd") {
    pwd();
} else if (passedArgs.length >= 1 && passedArgs[0].toLowerCase() == "open") {
    open(passedArgs);
} else if (passedArgs.length >= 1 && passedArgs[0].toLowerCase() == "mkdir") {
    mkdir("./", passedArgs[1]);
} else if (passedArgs.length >= 1 && passedArgs[0].toLowerCase() == "cat") {
    cat("./", passedArgs[1]);
} else if (passedArgs.length >= 1 && passedArgs[0].toLowerCase() == "rm") {
    rm("./", passedArgs[1]);
} else if (passedArgs.length >= 1 && passedArgs[0].toLowerCase() == "mkpro") {
    mkpro(passedArgs[1]);
} else if (passedArgs.length >= 1 && passedArgs[0].toLowerCase() == "mv") {
    mv(passedArgs[1], passedArgs[2]);
} else if (passedArgs.length == 1 && globKeys.includes(passedArgs[0].toLowerCase())) {
    sxglobal(globKeys.indexOf(passedArgs[0].toLowerCase()), passedArgs[0].toLowerCase())
} else if (passedArgs.length == 1 && custKeys.includes(passedArgs[0].toLowerCase())) {
    sxcustom(custKeys.indexOf(passedArgs[0].toLowerCase()), passedArgs[0].toLowerCase())
} else if (passedArgs.length == 1 && passedArgs[0].toLowerCase() == "edit") {
    edit();
} else if (passedArgs.length >= 1 && passedArgs[0].toLowerCase() == "touch") {
    touch("./", passedArgs[1]);
} else if (passedArgs.length >= 1 && passedArgs[0].toLowerCase() == "cp") {
    cp(passedArgs[1], passedArgs[2]);
} else if (passedArgs.length >= 1 && passedArgs[0].toLowerCase() == "clone") {
    clone(passedArgs.slice(1))
} else if (passedArgs.length >= 1 && passedArgs[0].toLowerCase() == "sync") {
    sync(passedArgs.slice(1));
} else if (passedArgs.length == 1 && (passedArgs[0].toLowerCase() == "version" || passedArgs[0].toLowerCase() == "v")) {
    version();
} else if (passedArgs.length == 1 && passedArgs[0].toLowerCase() == "help") {
    help();
} else {
    console.error(`Argument(s) ${passedArgs} cannot be parsed`);
}