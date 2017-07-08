var tem = require('./template/home.hbs');
var { graphql, buildSchema } = require('graphql');
var data = require('./mock/index');
var schemaStory = buildSchema(`
    type Query{
        title: [String],
        source: [String],
        by:[String]
    },
`);
var rootStory = {
    title: () => {
        var arr = [];
        data.shareData.story.forEach(function(e) {
            arr.push(e.title);
        });
        return arr;
    },
    source: () => {
        var arr = [];
        data.shareData.story.forEach(function(e) {
            arr.push(e.source);
        });
        return arr;
    },
    by: () => {
        return data.authorData.author;
    }
};
var result = [];
graphql(schemaStory, '{title,source,by}', rootStory).then(function(res) {
    console.log("schema1:", res);
    res.data.title.forEach((e, index) => {
        result.push({
            title: e,
            by: res.data.by[index],
            source: res.data.source[index]
        });
    });
    //拿到数据 开始渲染页面
    var html = tem({
        result: result
    });
    document.getElementById('app').innerHTML = html;

});