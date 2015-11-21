var path = require("path");
var webpack = require("webpack");
var AssetsPlugin = require('assets-webpack-plugin');
var assetsPluginInstance = new AssetsPlugin({
	prettyPrint: true,
	filename: 'assets.json'
})

module.exports = {
	cache: true,
	context: __dirname + "/public",
	entry: {
		"index": "./index-page",
		"common": './common',
	},
	output: {
		path: __dirname + "/dist",
		publicPath: "http://cdn.example.com/public/",
		filename: "[name]-[chunkhash].js",
		chunkFilename: "[chunkhash].js"
	},
	module: {
		loaders: [
			// required to write "require('./style.css')"
			{ test: /\.css$/,    loader: "style-loader!css-loader" },

			// required for bootstrap icons
			// { test: /\.woff$/,   loader: "url-loader?prefix=font/&limit=5000&mimetype=application/font-woff" },
			// { test: /\.ttf$/,    loader: "file-loader?prefix=font/" },
			// { test: /\.eot$/,    loader: "file-loader?prefix=font/" },
			// { test: /\.svg$/,    loader: "file-loader?prefix=font/" },

			// for  js/jsx files
			{ test: /\.jsx?$/,    loader: "babel?presets[]=react,presets[]=es2015" },
		]
	},
	resolve: {
		alias: {
			jquery: "jquery"
		}
	},
	plugins: [
		// new webpack.ProvidePlugin({
		// 	// Automtically detect jQuery and $ as free var in modules
		// 	// and inject the jquery library
		// 	// This is required by many jquery plugins
		// 	jQuery: "jquery",
		// 	$: "jquery"
		// }),
		assetsPluginInstance
	]
};
