const mix = require('laravel-mix');
const webpackConfig = require('./webpack.config');

mix.js('resources/js/app.js', 'public/js')
    .extract()
    .vue()
    .postCss('resources/css/app.css', 'public/css', [
        //
    ])
    .webpackConfig(webpackConfig)
    .version();
