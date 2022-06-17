const fs = require('fs');

function getSource(){
  return fs.readFileSync(__dirname + '/source.md', 'utf8');
};

module.exports = getSource