var mock = require('mockjs');
var authorData = mock.mock({
    'author|20': [{
        'name': '@cname',
        'address': '@city(true)'
    }]
});
module.exports = authorData;