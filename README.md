# Graphql+mockjs的demo  
已用webpack打包，打开build文件夹中的index.html即可查看效果。
## 目录结构
```
├─build //webpack输出
├─node_modules //包目录
└─src   //源文件目录
    ├─mock   //包含所有mock文件
    ├─model  //schema数据模型目录
    └─template //handlebars模板目录
    |_index.js //入口文件
``` 

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


## Graphql与其他API查询比较  
- Graphql是一种数据查询语言，在查询的时候可以指定所需查询的字段，并且在一个请求中直接返回所有需要的数据。
RESTfulAPI中一个URL就是一个网络资源，通过HTTPP method的方式区分不同的数据操作，在这种查询中，
如果所需查询的数据字段很多，需要发出多次请求才能得到最终数据。
- Graphql显得更加灵活。比如，有时候我们在一个RESTfulAPI查询中可能不需要所有的字段信息。对一个URL
RESTful会返回所有的字段信息，而Graphql则可以灵活指定需要的字段。也就是说，
想要什么字段就会返回什么字段，不会返回多余的信息。
- Graphql不像RESTfulAPI一个资源的查询就是一个端点（URL）。而是所有数据的访问都在一个端点。  
- Graphql有类型系统，可以检测返回数据的正确性，提高了Graphql查询的稳定性。另外，GraphQL的查询语句更加语义化。  
- 但是由于Graphql出现比restfulAPI要晚，如果要大规模使用需要服务器端同时支持，对现有API进行改造成本会很高，
大概这是Graphql未能火起来的原因，并且由于每一个字段都需要一个解析器来对数据库做一个查询可能会产生冗余。  
## 自己对Graphql的理解
- 在定义schema的时候会对type的使用云里雾里，个人理解，一个schema需要一个根查询，也就是Type Query，这个对象定义了可以查询的根字段。  
Graphql如其名，像是一个图查询语言，所做的查询可以看成一棵树，在Type Query中定义的字段可以看成一棵树的根节点。例如  
```JS
 {
    type query{//定义了两个根查询，一个person，一个like
        person:Person,  //person字段的类型是Person这个是自定义的对象类型
        like: String   //like字段的类型是String这个是系统内置的标量类型
    }
    type Person{//自定义的Person类型
        name: String,
        sex: String
    }
 }
```
- 在Graphql查询中，`一次查询的终点是标量类型`，就相当于，标量类型对应一棵树的叶子节点，
我理解的是，一次查询像是一棵树遍历的过程，一直要遍历到叶子节点，当然可以同时遍历多棵树。
每一个根查询就是一棵树。  
- 每一个字段都要有一个解析器。一个解析器是指一个函数，通过函数的返回值指定字段的值。 








