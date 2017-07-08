# Graphql+mockjs的demo  
已用webpack打包，打开build文件夹中的index.html即可查看效果。
## 在webpack中使用handlebars 
webpack中使用handlebars做组件化开发需要配置handlebars-loader
```json
        loaders: [{
            test: /\.hbs/,
            loader: "handlebars-loader"
        }]
```
使用模板文件的时候直接引入
```js
    var tem = require('./template/home.hbs');
```
handlebars-loader会找到该模板文件并返回一个模板函数，向该函数传参就可以把数据传进去，返回的是渲染之后的html字符串
```js
    var html = tem({
        result: result
    });
    document.getElementById('app').innerHTML = html;
```


## 为什么要使用Graphql做API查询而不用RESTful  

