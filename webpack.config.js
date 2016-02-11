var path = require('path');
var config = {
    entry: [path.resolve(__dirname, './app/src/main.js')],
    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /.[js|jsx]$/,
            exclude: /node_modles/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015','react']
            }
        }]
    }
};
module.exports = config;
