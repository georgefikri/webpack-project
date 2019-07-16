const path = require("path")
const common = require("./webpack.config");
const merge = require("webpack-merge");
const exportCSS = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const minimizeJS = require("terser-webpack-plugin")

module.exports = merge(common,  {
    mode:"production",
    output: {
        filename: "[name].[contentHash].js",
        path: path.resolve(__dirname, "dist")
      },
    plugins: [
        new exportCSS({
            filename: "[name].[contentHash].css"
        }),
        new CleanWebpackPlugin()
    ],

    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new minimizeJS
        ]
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [exportCSS.loader , "css-loader", "sass-loader"]
            }
        ]
    }
})