var fs = require('fs');
var path = require('path');
var CleanCSS = require('clean-css');

var src = process.env['INPUT_SRC'];
var dest = process.env['INPUT_DEST'];

var input = fs.readFileSync(src, 'utf8');
var output = new CleanCSS({}).minify(input);

fs.writeFileSync(dest, output.styles, 'utf8');