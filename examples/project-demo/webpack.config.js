const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const sourcePath = path.resolve('./src');
const distPath = path.resolve('./dist');
const npmBase = path.resolve('./node_modules');

const includedPackages = [].map((pkg) => path.join(npmBase, pkg));

//Webpack configuration
module.exports = {
    mode: 'development',
    entry: {
        app: 'index.jsx'
    },
    output: {
        path: distPath,
        publicPath: '',
        filename: 'scripts/[name].[hash:8].js'
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase: sourcePath,
        historyApiFallback: true,
        hot: true,
        inline: true,
        port: 8080,
        disableHostCheck: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    'css-loader']
            },
            {
                test: /\.jsx?$/,
                include: [].concat(
                    includedPackages,
                    [sourcePath]
                ),
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        alias: {
            'styles': `${sourcePath}/styles/`,
            'components': `${sourcePath}/components/`,
            'utils': `${sourcePath}/utils/`,
            'pages': `${sourcePath}/pages/`,
        },
        extensions: ['.js', '.jsx'],
        modules: [
            sourcePath,
            'node_modules'
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            debug: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[id].[hash].css"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: `${sourcePath}/index.html`,
            minify: {
                collapseWhitespace: true,
                conservativeCollapse: true,
                minifyJS: true
            },
        })
    ]
};