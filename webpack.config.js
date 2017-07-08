module.exports = {
    entry: {
        task: './src/index.js',
    },
    output: {
        path: __dirname + '/build',
        filename: 'build.js',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [{
            test: /\.hbs/,
            loader: "handlebars-loader"
        }]
    }
}