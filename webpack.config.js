const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

module.exports = {
	mode: "development",
	entry: {
		index: {
			import: "./src/index.js",
			dependOn: "shared",
		},
		another: {
			import: "./src/another-module.js",
			dependOn: "shared",
		},
		shared: "lodash",
	},
	devtool: "inline-source-map",
	devServer: {
		static: "./dist",
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Development",
		}),
		new WebpackManifestPlugin({
			fileName: "woop-manifest.json",
		}),
	],
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
		publicPath: "/",
	},
	module: {
		rules: [
			//styleのロード設定
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			// imageのロード設定
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
		],
	},
	optimization: {
		runtimeChunk: "single",
	},
};
