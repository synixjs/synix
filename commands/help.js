var commands = {
    "init": "Yet to be written",
    'ls': 'Yet to be written',
    'pwd': 'Yet to be written',
    'open': 'Yet to be written',
    'mkdir': 'Yet to be written',
    'cat': 'Yet to be written',
    'rm': 'Yet to be written',
    'mkpro': 'Yet to be written',
    'mv': 'Yet to be written',
    'sxglobal': 'Yet to be written',
    'sxcustom': 'Yet to be written',
    'edit': 'Yet to be written',
    'touch': 'Yet to be written',
    'cp': 'Yet to be written',
    'clone': 'Yet to be written',
    'sync': 'Yet to be written',
    'version': 'Yet to be written'
};

function help(){
    for(var key in commands){
        console.log(key + ' : ' + commands[key]);
    }
}

module.exports = help;