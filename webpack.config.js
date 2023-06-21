const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');



const createPath = (dirName) => path.resolve(__dirname, dirName);

module.exports = {
	context: createPath('src'),
	mode: 'development',
	entry: './index.js',
	output: {
		filename: 'index.js',
		path: createPath('docs'),
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
				test: /\.(jsx|tsx|ts|js)$/,
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
                to: createPath('docs'),
            },
            ],
           }),
		new CopyPlugin({
			patterns: [
				{
					from: createPath('src/Data'),
					to: createPath('docs/Data'),
				},
			],
		}),
        new CleanWebpackPlugin(),
	]
}