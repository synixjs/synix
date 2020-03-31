// A file to import every command and make an object which can then be imported from sx.js

module.exports = {
    init: require("./init/init"),
    ls: require("./ls"),
    pwd: require("./pwd"),
    open: require("./open"),
    mkdir: require("./mkdir"),
    cat: require("./cat"),
    rm: require("./rm"),
    mv: require("./mv"),
    mkpro: require("./mkpro"),
    sxglobal: require("./sxglobal"),
    sxcustom: require("./sxcustom"),
    edit: require("./edit"),
    touch: require("./touch"),
    cp: require("./cp"),
    clone: require("./misc/clone"),
    sync: require("./misc/sync")
};