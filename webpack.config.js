const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {WebpackManifestPlugin} = require("webpack-manifest-plugin");

module.exports = {
	mode: "production",
	entry: {
		index: "./src/index.js",
		print: "./src/print.js",
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Output Management",
		}),
        new WebpackManifestPlugin({
            fileName: 'woop-manifest.json',
          }),
	],
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
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
};
