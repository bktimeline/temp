//Path Module
const { log } = require('console');
const path = require('path')
console.log(path.sep);

const filePath = path.join('/content','subfolder','test.text')
console.log(filePath); //path

const base =path.basename(filePath)
console.log(base); //test text

const absolute = path.resolve(__dirname,'content','subfolder','test.text')
console.log(absolute);