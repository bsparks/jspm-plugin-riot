var compiler = require('riot-compiler');

module.exports.translate = function(load) {
    return compiler.compile(load.source);
};
