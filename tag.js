var compiler = require('riot-compiler');

module.exports.translate = function(load) {
    load.metadata.format = 'cjs';
    var compiledtag = compiler.compile(load.source);
    //console.log(compiledtag);
    var output = 'var riot = require("riot");\n' + compiledtag;

    return output;
};
