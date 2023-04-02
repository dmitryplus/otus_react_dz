const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');



const createPath = (dirName) => path.resolve(__dirname, dirName);

const regExpForRules = /\.(jsx|js|ts)$/;

module.exports = {
	context: createPath('src'),
	mode: 'development',
	entry: './index.js',
	output: {
		filename: 'index.js',
		path: createPath('dist'),
	},
	resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
        alias: {
            '@': createPath('src'),
        }
    },
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.(jsx|js)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'@babel/preset-env', 
								{ 
									targets: 
									{ 
										node: 'current' 
									} 
								}
							],
							'@babel/preset-typescript',
							'@babel/preset-react'
						],
						plugins: [
							'@babel/plugin-proposal-class-properties'
						]
				  	}
				}
			},
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			}
		],
	  },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new CopyPlugin({
            patterns: [
               { 
                from: createPath('src/favicon.ico'), 
                to: createPath('dist'),  
            },
            ],
           }),
        new CleanWebpackPlugin(),
	]
}