var { buildSchema } = require('graphql');
module.exports = buildSchema(`
    type Query{
        article:[Message],
        author: [Person]
    },
    type Message{
        title: String,
        source: String,
        like: Int
    },
    type Person{
        name: String,
        address: String
    }
`)