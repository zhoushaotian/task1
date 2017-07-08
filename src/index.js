var tem = require('./template/home.hbs');
var { graphql } = require('graphql');
var data = require('./mock/index');
var schema = require('./model/schema');
//设置解析器
var root = {
    article: () => {
        return data.shareData.story;
    },
    author: () => {
        return data.authorData.author;
    }
};
graphql(schema, '{article{title,source,like},author{name,address}}', root).then(function(res) {
    var result = {
            story: [],
        }
        //格式化数据
    res.data.article.forEach((e, index) => {
        e.by = res.data.author[index].name;
        e.address = res.data.author[index].address;
        result.story.push(e);
    });
    //拿到数据 开始渲染页面
    var html = tem({
        result: result
    });
    document.getElementById('app').innerHTML = html;

});