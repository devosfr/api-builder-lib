const Build = require('@oseiasfreitas/front-builder');
const entry = require('prompt-sync')({sigint: true});
let value= null;
let main = null;

value = entry('Enter the directory hierarchy: ');
console.log('Hierarchy: ' + value);

main = entry('Enter the directory main folder: ');
console.log('Main folder: ' + main);

Build.makePage(value, main);