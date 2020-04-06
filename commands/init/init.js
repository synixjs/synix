//imports
const fs = require("fs");
const path = require("path");
const os = require("os");
const process = require('process');

function init(editorAlias) {
    // Absolute Path
    var filePath = path.join(__dirname, "..", "..", "sxconfig.json");

    // Text Editor json
    var sublJSON = require(path.join(__dirname, "subl.json"));
    var codeJSON = require(path.join(__dirname, "code.json"));
    var atomJSON = require(path.join(__dirname, "atom.json"));

    // Get Data
    let data = fs.readFileSync(filePath);
    let sxconfig = JSON.parse(data);

    //Paths
    desPath = path.join(os.homedir(), "Desktop");
    docPath = path.join(os.homedir(), "Documents");
    dowPath = path.join(os.homedir(), "Downloads");

    // changing values
    // Globals
    sxconfig.Globals[0].des = desPath;
    sxconfig.Globals[1].dow = dowPath;
    sxconfig.Globals[2].doc = docPath;
    // Text Editor
    if (editorAlias == "subl") {
        sxconfig.Text_editor = sublJSON;
    } else if (editorAlias == "code") {
        sxconfig.Text_editor = codeJSON;
    } else if (editorAlias == "atom") {
        sxconfig.Text_editor = atomJSON;
    } else {
        console.log(`${editorAlias} is not supported`)
        console.log("SYNIX is not initialized")
        console.log('For text-editors list visit https://synix-docs.netlify.com/ccc/commands.html#text-editors-supported')
        process.exit(0);
    }

    // Update JSON
    fs.writeFileSync(filePath, JSON.stringify(sxconfig, null, 1), err => {
        if (err) {
            console.log("Error writing file:", err);
            console.log('Try installing synix with sudo')
            return;
        }
    });

    // FeedBack
    console.log("Initializing SYNIX...\n");
    console.log(sxconfig);
    console.log("\nDone.");
    console.log('For documentation visit https://synix-docs.netlify.com/')
}

module.exports = init;