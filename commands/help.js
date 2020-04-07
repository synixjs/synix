var commands = {
    "init": {
        def: "Initialises synix with the specified text-editor"
    },
    'version': {
        def: "Prints the version of synix"
    },
    'ls': {
        def: "Lists the files and folders in your cwd"
    },
    'pwd': {
        def: "Gives the path of the cwd"
    },
    'open': {
        def: "Opens the specified folder as a project in your preferred editor"
    },
    'mkdir': {
        def: "Creates the specified folder in your cwd"
    },
    'cat': {
        def: "Prints the contents of the file to the terminal/cmd"
    },
    'rm': {
        def: "Removes the specified file/folder from your cwd"
    },
    'mkpro': {
        def: "Creates the folder and opens it as a peoject in your text-editor"
    },
    'mv': {
        def: "Moves the file contents into another"
    },
    'cp': {
        def: "Copies the file contents into another"
    },
    'touch': {
        def: "Creates the specified file in your cwd"
    },
    'clone': {
        def: "Clones a git repository and sets it's upstream"
    },
    'sync': {
        def: "Syncs the local, origin and the upstream repositories"
    },
    'edit': {
        def: "Opens the base configuration file in edit mode"
    },
    'des': {
        def: "Opens desktop in file-manager"
    },
    'dow': {
        def: "Opens downloads in file-manager"
    },
    'doc': {
        def: "Opens documents in file-manager"
    }
};

function help() {
    for (var key in commands) {
        const padding = " ".repeat((10 - key.length))
        console.log(`${key}${padding}:${commands[key].def}`)
    }
    console.log('A detailed explation is available in the docs :https://synix-docs.netlify.com/ccc/commands.html\n')
}

module.exports = help;