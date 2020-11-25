const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
    resolve: {
        extensions: [".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                loader: "babel-loader",
                include: APP_PATH,
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
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
        new MiniCssExtractPlugin({ filename: "css/index.css" }),
    ],
};
