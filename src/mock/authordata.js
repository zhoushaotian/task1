var mock = require('mockjs');
var authorData = mock.mock({
    'author|20': ['@name']
});
console.log(authorData);
module.exports = authorData;