const mix = require('laravel-mix');
const webpackConfig = require('./webpack.config');
const path = require('path');

mix.alias({
    ziggy: path.resolve('vendor/tightenco/ziggy/dist/vue'),
});

mix.js('resources/js/app.js', 'public/js')
    .extract()
    .vue()
    .postCss('resources/css/app.css', 'public/css', [
        //
    ])
    .webpackConfig(webpackConfig)
    .version();
