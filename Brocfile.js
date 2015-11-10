var BroccoliEyeglass = require('broccoli-eyeglass');
var path = require('path');

var options = {
  cssDir: 'stylesheets',
  assets: ['assets'],
  discover: false, // Don't automatically find & convert sass files in the trees
  sourceFiles: ['scss/app.scss'] // Array of files (or glob string) to compile
};

var outputTree = new BroccoliEyeglass(['assets'], options);

module.exports = outputTree;
