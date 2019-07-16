const path = require("path")
const webpack = require('webpack');
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

    devtool: "none",
    entry: "./src/index.js",
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/template.html"
      })
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            }, 
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                  loader: "file-loader",
                  options: {
                    name: "[name].[hash].[ext]",
                    outputPath: "pics"
                  }
                }
              },
              {
                test: /\.js$/, //Regular expression 
                exclude: /(node_modules|bower_components)/,//excluded node_modules 
                use: {
                loader: "babel-loader", 
                options: {
                  presets: ["@babel/preset-env"]  //Preset used for env setup
                 }
                }
               }
        ]
    }
}
