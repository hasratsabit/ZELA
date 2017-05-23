const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const CleanPlugin = require("webpack-clean-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
	entry: {
		bundle: "./src/js/main.js",
		vendors: [
			'jquery'
		]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		// publicPath: '/dist'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: ['css-loader', 'sass-loader']
				}),
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: ['style-loader', 'css-loader']
				}),
				exclude: /node_modules/
			},
			{
				test: /\.html$/,
				use: 'html-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(mp4|webm)$/,
				use: 'url-loader',
				exclude: /node_modules/
			},
			{
			test: /\.(png|jpg|jpeg|gif|woff|ttf|eot|svg|woff2)$/,
			loader: 'file-loader',
			options: {
					name: '[name].[ext]',
					outputPath: 'images/'
				},
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: "styles.css"
		}),
		new OptimizeCssAssetsPlugin({
			assetNameRegExp: /.css$/,
			cssProcessor: require("cssnano"),
			cssProcessorOptions: { discardComments: {removeAll: true}},
			canPrint: true
		}),
		new HtmlPlugin({
			template: 'src/index.html',
			hash: true,
			minify: {
				collapseWhitespace: true,
				removeComments: true
			}
		}),
		new webpack.optimize.CommonsChunkPlugin("vendors")
	]
}
