var fs = require('fs');
var path = require('path');
var minify = require('html-minifier').minify;

var src = process.env['INPUT_SRC'];
var dest = process.env['INPUT_DEST'];

var result = minify(fs.readFileSync(src, 'utf8'), {
    collapseWhitespace: true,
    removeComments: true
});

fs.writeFileSync(dest, result, 'utf8');