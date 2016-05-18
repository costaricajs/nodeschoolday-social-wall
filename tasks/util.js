'use strict';

var colors = require('colors/safe');
var del = require('del');

function cleanFiles(path) {
  path.forEach(function(path, index){
    console.log('Delete ---> ', index);
    debug(path, 'white', 'bgMagenta');
  });
  del.sync(path);
}

function debug(message, textColor, bgColor) {

  if (typeof message === 'object') {
    return console.log(message);
  }
  message = message || '';
  textColor = textColor || 'green';
  bgColor = bgColor || 'bgBlack';
  return console.log(colors[textColor][bgColor](message));
}

var util = {
  debug: debug,
  cleanFiles: cleanFiles
};

module.exports = util;

/*
colors and styles!
text colors
black
red
green
yellow
blue
magenta
cyan
white
gray
grey
background colors
bgBlack
bgRed
bgGreen
bgYellow
bgBlue
bgMagenta
bgCyan
bgWhite
styles
reset
bold
dim
italic
underline
inverse
hidden
strikethrough
extras
rainbow
zebra
america
trap
random
*/
