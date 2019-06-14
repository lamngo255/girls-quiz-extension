const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
	configureWebpack: {
		plugins: [
			new CopyPlugin([
				{
					from: path.resolve(__dirname, "./template/manifest.template.json"),
					to: path.resolve(__dirname, "./dist/manifest.json")
				},
				{
					from: path.resolve(__dirname, "./template/images"),
					to: path.resolve(__dirname, "./dist/images")
				},
				{
					from: path.resolve(__dirname, "./template/js"),
					to: path.resolve(__dirname, "./dist/js")
				}
			])
		]
	}
};
