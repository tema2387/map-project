// sass-loader — загружает SCSS и компилирует его в CSS
// node-sass — Node Sass
// postcss-loader — обработка CSS с помощью PostCSS
// postcss-preset-env — полезные настройки PostCSS
// css-loader — загрузка стилей
// style-loader — применение стилей к элементам DOM

// postcss.config.js
module.exports = {
    plugins: {
        'postcss-preset-env': {
            browsers: 'last 2 versions',
        },
    },
}