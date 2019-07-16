const path = require("path");
const common = require("./webpack.config");
const merge = require("webpack-merge");


module.exports = merge(common,  {
    mode:"development",
    output: {
        filename: "[name].[hash].js",
        path: path.resolve(__dirname, "dev")
      },

 
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader" , "css-loader", "sass-loader"]
                },
        ]
    }
})