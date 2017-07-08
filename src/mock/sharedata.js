var mock = require('mockjs');
var shareData = mock.mock({
    'story|20': [{
        'title': '@title',
        'source': '@domain'
    }],
});
console.log(shareData);
module.exports = shareData;