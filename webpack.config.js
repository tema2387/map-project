// Плагины
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'), // входной фаил(т.е. то, какие файлы вебпак будет компилировать.)
    },
    output: {
        path: path.resolve(__dirname, './dist'), // выходной фаил(папка dist)
        filename: '[name].bundle.js', // название выходного файла(фаил который будет помещен в dist)(Префикс "[name]" соответствует названию файла в src:)
    },
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        // contentBase: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    plugins: [
        // Плагин создания HTML на основе шаблона
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/index.html'), // путь до фаила
            filename: 'index.html', // название выходного файла
        }),
        // удаляет/очищает директорию сборки проекта 
        new CleanWebpackPlugin(),
        // применять изменения только при горячей перезагрузке
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            // JavaScript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            // изображения
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            // шрифты и SVG
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
            // CSS, PostCSS, Sass
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
        ],
    },
}