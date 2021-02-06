
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');


module.exports = {
    // i file in ingresso
    entry: {
        //editor: "./src/editor.js",
        //script: "./src/script.js",
        "js/editor": './src/editor.js',
        "css/style": './src/style.scss.js'
    },

    output: {
        // file generati da webpack
        path: path.resolve(__dirname, 'assests'), // percorso dove genera i file
        filename: '[name]-bundle.js', // nome del file
    },
    optimization: {
        minimize: false,
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
        new ESLintPlugin(),
        new CleanWebpackPlugin(),
        //new FixStyleOnlyEntriesPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name]-bundle.css",
        }),
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
    resolve: {
        fallback: { "path": require.resolve("path-browserify") }
    },
    externals:{
        jquery: "jQuery",
        "@wordpress/blocks": ["wp","blocks"],
        "@wordpress/i18n": ["wp","i18n"],
        "@wordpress/block-editor": ["wp","blockEditor"]
    }
}
