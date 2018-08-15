const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config');
const router = require('./server/router');

const webpackCompiler = webpack(webpackConfig);
const app = express();

app.use('/api', router);
app.use(webpackDevMiddleware(webpackCompiler, {}));

app.listen(8080, () => {-
    console.log('started http://localhost:8080');
});