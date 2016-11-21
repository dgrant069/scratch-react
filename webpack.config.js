const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const sassLoaders = [
  	'css-loader',
  	'postcss-loader',
  	'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './src')
];

module.exports = {
	debug: true,
	devtool: 'eval-source-map',
	noInfo: false,
	entry: "./src/index.jsx",
	target: 'web',
    output: {
        path: "./src",
        filename: "index.js"
    },
	devServer: {
    	contentBase: './src',
        inline: true,
        port: 4000
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    presets: ['es2015', 'react']
                }
            },
			{
	        	test: /\.scss$/,
				loaders: ["style", "css?sourceMap", "sass?sourceMap"]
			}
        ]
    },
	postcss: [
    	autoprefixer({
	      browsers: ['last 2 versions']
	    })
	]
}
