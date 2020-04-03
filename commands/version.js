var vers = require('../package.json');

function version() {
    console.log(vers.version);
}

module.exports = version;