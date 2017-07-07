module.exports = {
    entry: {
        task: './src/index.js'
    },
    output: {
        path: __dirname + '/build',
        filename: '[name].js',
        library: 'task',
        libraryTarget: 'umd'
    }
}