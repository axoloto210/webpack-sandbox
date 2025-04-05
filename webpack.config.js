const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
	mode: "production",
	entry: {
		index: "./src/index.js",
	},
	devtool: "inline-source-map",
	devServer: {
		static: "./dist",
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Caching",
		}),
		new WebpackManifestPlugin({
			fileName: "woop-manifest.json",
		}),
		// new BundleAnalyzerPlugin(),
	],
	output: {
		filename: "[name].[contenthash].js",
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
		moduleIds: "deterministic", // webpack5 ではproductionモードではデフォルトで有効
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendors",
					chunks: "all",
				},
			},
		},
	},
};
