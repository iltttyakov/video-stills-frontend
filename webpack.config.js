const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

const PATH_SOURCE = path.join(__dirname, "./src");
const PATH_DIST = path.join(__dirname, "./dist");


module.exports = (env) => {
    const environment = env.environment;
    const isProduction = environment === "production";
    const isDevelopment = environment === "development";

    return {
        mode: environment,
        devServer: {
            static: {
                directory: PATH_DIST,
            },
            host: "localhost",
            port: 8080,
            historyApiFallback: true,
            client: {
                overlay: {
                    errors: true,
                    warnings: true,
                },
            },
        },
        entry: [path.join(PATH_SOURCE, "./index.js")],
        output: {
            path: PATH_DIST,
            filename: "js/[name].[contenthash].js",
            publicPath: "/",
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        debug: true,
                                        useBuiltIns: "usage",
                                    },
                                ],
                                [
                                    "@babel/preset-react",
                                    {
                                        runtime: "automatic",
                                    },
                                ],
                            ],
                        },
                    },
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: 'style-loader',
                        },
                        {
                            loader: 'css-loader',
                        },
                    ],
                },
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: "style-loader",
                        },
                        {
                            loader: "css-loader",
                            options: {
                                modules: {
                                    localIdentName: '[name]__[local]--[hash:base64:5]',
                                },
                            }
                        },
                        {
                            loader: "sass-loader",
                        },
                    ],
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif|mp4)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(PATH_SOURCE, "./index.html"),
            }),
            new CleanWebpackPlugin(),
        ],
    };
};