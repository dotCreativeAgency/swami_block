
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    // i file in ingresso
    entry: {
        //editor: "./src/editor.js",
        //script: "./src/script.js",
        index: './src/index.js',
    },

    output: {
        // file generati da webpack
        path: path.resolve(__dirname, 'assests'), // percorso dove genera i file
        filename: '[name]-bundle.js', // nome del file
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin({
                sourceMap: true,
            }),
        ],
    },
    //mode: 'development', // production(codice minimizzato) o development
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            [
                                '@babel/preset-react',
                                {
                                    pragma: 'wp.element.createElement',
                                    pragmaFrag: 'wp.element.Fragment',
                                    development: true,
                                },
                            ],
                        ],
                    },
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'],
            },
        ],
    },
}