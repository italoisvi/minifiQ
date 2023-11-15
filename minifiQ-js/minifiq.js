var fs = require('fs');
var path = require('path');
var UglifyJS = require('uglify-js');

var src = process.env['INPUT_SRC'];
var dest = process.env['INPUT_DEST'];

var result = UglifyJS.minify(fs.readFileSync(src, 'utf8'));

fs.writeFileSync(dest, result.code, 'utf8');