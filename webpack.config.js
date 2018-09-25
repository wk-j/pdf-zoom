const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BitbarWebpackProgressPlugin = require("bitbar-webpack-progress-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: {
        vendor: "./src/vendor.ts",
        main: "./src/app/main.ts"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
    },

    devtool: "source-map",

    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            { test: /\.css$/, loaders: ["to-string-loader", "style-loader", "css-loader"] },
            { test: /\.tsx?$/, loader: "babel-loader?presets[]=es2015!awesome-typescript-loader" },
            { test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/, loader: 'url-loader?limit=30000&name=assets/[name]-[hash].[ext]' },
            { test: /\.html$/, loader: 'raw-loader' }
        ],
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                htmlLoader: {
                    minimize: false
                },
                preLoaders: [
                    { test: /\.js$/, loader: "source-map-loader" }
                ]
            }
        }),
        new CopyWebpackPlugin([
            // { from: "src/images", to: "images" },
            // { from: "src/favicon.ico" },
            { from: "src/pdf/Python.pdf", to: "pdf" },
        ]),
        new BitbarWebpackProgressPlugin(),
        new HtmlWebpackPlugin({
            title: "Web",
            filename: "index.html",
            template: "src/index.html",
            hash: true
        })
    ],

    externals: {},
}