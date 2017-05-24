const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const CleanPlugin = require("webpack-clean-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ModernizrPlugin = require("modernizr-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";
const isDev = process.env.NODE_ENV === "development";

const cssDev = ['style-loader', 'css-loader', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
	fallback: 'style-loader',
	loader: ['css-loader', 'sass-loader']
});

const ModernizrConfig = {
  "classPrefix": "",
  "options": [
    "addTest",
    "atRule",
    "domPrefixes",
    "load",
    "prefixed",
    "prefixes",
    "prefixedCSS",
    "setClasses",
    "testStyles"
  ]
}

const cssLoader = isProd ? cssProd : cssDev;

// const imageLoader = isProd
// 		? [
// 			'file-loader?name=[name].[ext]&outputPath=images/',
// 			'image-webpack-loader'
// 		]
// 		: 'file-loader?name=[name].[ext]&outputPath=images/'
const plugins = isProd
		?
				[
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
					new ImageminPlugin({
						test: 'images/**',
						optipng: {
							optimizationLevel: 9
						},
						optijpegtran: {
							optimizationLevel: 9
						}
					}),
				]
			: [
					new HtmlPlugin({
						template: 'src/index.html'
					})
				]

		plugins.push(new webpack.optimize.CommonsChunkPlugin("vendors"))

module.exports = {
	entry: {
		bundle: "./src/js/main.js",
		vendors: [
			'jquery'
		]
	},
	output: {
		path: path.resolve(__dirname, 'docs'),
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
				use: cssLoader,
				exclude: /node_modules/
			},

			{
				test: /\.html$/,
				use: ['html-loader'],
				exclude: /node_modules/
			},
			{
			test: /\.(png|jpg|jpeg|gif|woff|ttf|eot|svg|woff2|mp4|webm)$/,
			use: 'file-loader?name=[name].[ext]&outputPath=images/',
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, "docs"),
		compress: true,
		stats: {
			colors: true,
			chunks: false,
			assets: false,
			timings: false,
			modules: false,
			hash: false,
			version: false
		},
		port: 4200,
		open: true
	},
	plugins: plugins
}
