const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
                use: 'css-loader'
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
    plugins: [
        new webpack.LoaderOptionsPlugin({
            debug: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            template:`${sourcePath}/index.html`,
            minify: {
                collapseWhitespace: true,
                conservativeCollapse: true,
                minifyJS: true
            },
        })
    ]
};