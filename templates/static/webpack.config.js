const webpack = require('webpack');
const resolve = require('path').resolve;
const path = require('path');
const config = {
    devtool: 'eval-source-map',
    entry: __dirname + '/js/index.jsx',
    output: {
        path: resolve('../public'),
        filename: 'bundle.js',
        publicPath: resolve('../public')
    },
    resolve: {
	modules: [path.resolve(__dirname, './js'), 'node_modules'],
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2016', 'react']
            }
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader?modules'
        }, { 
            test: /\.(png|jpg)$/, 
            loader: 'url-loader' 
        }
            
        
	]
    }
};
module.exports = config;

