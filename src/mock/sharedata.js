var mock = require('mockjs');
var shareData = mock.mock({
    'story|20': [{
        'title': '@title',
        'source': '@domain',
        'like': '@natural(200,5000)'
    }],
});
console.log(shareData);
module.exports = shareData;