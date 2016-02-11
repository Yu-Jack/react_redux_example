'use strict';
let src_path = "./app/src/";
let enrty_file = "/main.js";
const path = require('path');
const config = {
    entry: {
        example1: src_path + 'example1' + enrty_file,
        example2: src_path + 'example2' + enrty_file,
        example3: src_path + 'example3' + enrty_file
    },
    output: {
        path: path.resolve(__dirname),
        filename: src_path + '[name]/bundle.js'
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
