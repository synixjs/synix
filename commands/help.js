var commands = {
    "init": {
        def : "Initialises synix with the specified text-editor",
        args : "<name of the text-editor>",
        optionalArgs : "none",
        usage : "sx init code  #for vscode"
    },
    'version': {
        def : "Prints the version of synix",
        args : "none",
        optionalArgs : "none",
        usage : "sx v #or sx version"
    },
    'ls': {
        def : "Lists the files and folders in your cwd",
        args : "none",
        optionalArgs : "none",
        usage : "sx ls"
    },
    'pwd': {
        def : "Gives the path of the cwd",
        args : "nope",
        optionalArgs : "none",
        usage : "sx pwd"
    },
    'open': {
        def : "Opens the specified folder as a project in your preferred editor",
        args : "<folder-name>",
        optionalArgs : "none",
        usage : "sx open <folder-name>"
    },
    'mkdir': {
        def : "Creates the specified folder in your cwd",
        args : "<folder-name>",
        optionalArgs : "none",
        usage : "sx mkdir <folder-name>  #creates folder in cwd"
    },
    'cat': {
        def : "Prints the contents of the file to the terminal/cmd",
        args : "<file-name>",
        optionalArgs : "none",
        usage : "sx mkdir <file-name>"
    },
    'rm': {
        def : "Removes the specified file/folder from your cwd",
        args : "<file-name> or <folder-name>",
        optionalArgs : "none",
        usage : "sx mkdir <file-name>/<folder-name>"
    },
    'mkpro': {
        def : "Creates the folder and opens it as a peoject in your text-editor",
        args : "<folder-name>",
        optionalArgs : "none",
        usage : "sx mkpro <folder-name>"
    },
    'mv': {
        def : "Moves the file contents into another",
        args : "<from-file-name> and <to-file-name>",
        optionalArgs : "none",
        usage : "sx mv <from-file-name> <to-file-name>"
    },
    'cp': {
        def : "Copies the file contents into another",
        args : "<from-file-name> and <to-file-name>",
        optionalArgs : "none",
        usage : "sx cp <from-file-name> <to-file-name>"
    },
    'touch': {
        def : "Creates the specified file in your cwd",
        args : "<file-name>",
        optionalArgs : "none",
        usage : "sx touch <file-name>"
    },
    'clone': {
        def : "Clones a git repository and sets it's upstream",
        args : "<forked-repository-url> and <upstream-repository-url>",
        optionalArgs : "<name-of-the-upstream-variable>",
        usage : "sx clone <forked-repository-url> <upstream-repository-url>"
    },
    'sync': {
        def : "Syncs the local, origin and the upstream repositories",
        args : "none",
        optionalArgs : "<upstream-branch-name> and <origin-branch-name>",
        usage : "sx sync"
    },
    'edit': {
        def : "Opens the base configuration file in edit mode",
        args : "none",
        optionalArgs : "none",
        usage : "sx edit"
    },
    'des': {
        def : "Opens desktop in file-manager",
        args : "none",
        optionalArgs : "none",
        usage : "sx des"
    },
    'dow': {
        def : "Opens downloads in file-manager",
        args : "none",
        optionalArgs : "none",
        usage : "sx dow"
    },
    'doc': {
        def : "Opens documents in file-manager",
        args : "none",
        optionalArgs : "none",
        usage : "sx doc"
    }
};

function help(){
    for(var key in commands){
        console.log(`Command : ${key}`)
        console.log(`Def : ${commands[key].def}`)
        console.log(`*Args : ${commands[key].args}`)
        console.log(`*Optional Args : ${commands[key].optionalArgs}`)
        console.log(`Usage : ${commands[key].usage}`)
        console.log('---\n')
    }
    console.log('A detailed explation is available in the docs : https://synix-docs.netlify.com/ccc/commands.html')
}

module.exports = help;