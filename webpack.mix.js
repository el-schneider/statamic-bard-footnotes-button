let mix = require('laravel-mix');

mix.js('resources/js/addon.js', 'dist/js').vue();
mix.sass('resources/css/addon.scss', 'dist/css');
