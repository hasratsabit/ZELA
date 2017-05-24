const webpack = require("webpack");
const gulp = require("gulp");
const path = require('path');
const del = require("del");
const webpackConfig = require("./webpack.config.js");
const DevServer = require("webpack-dev-server");


gulp.task("move", function(){
	return gulp.src("./src/images/hero/**/*")
					.pipe(gulp.dest("./docs/images/hero"))
});
