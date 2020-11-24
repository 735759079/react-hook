const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const ROOT_PATH = path.resolve(__dirname);
const BUILD_PATH = path.resolve(ROOT_PATH, "build");
const APP_PATH = path.resolve(ROOT_PATH, "src");

module.exports = {
    devServer: {
        port: 3000,
    },
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "[name].bundle.js",
        path: BUILD_PATH,
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: "babel-loader",
                include: APP_PATH,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "react-demo",
            filename: "./index.html",
            template: "./public/index.html",
            inject: "body",
        }),
    ],
};
