// import markdoc
const Markdoc = require('@markdoc/markdoc');

// require misc libraries
const getSource = require('./file.js')
const prettier = require("prettier");


const source = getSource();

const ast = Markdoc.parse(source);
const content = Markdoc.transform(ast, /* config */);

const html = Markdoc.renderers.html(content);

let output = prettier.format(html);

console.log(output)