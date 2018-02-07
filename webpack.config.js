/*
* @Author: Rosen
* @Date:   2017-05-08 15:28:19
* @Last Modified by:   Pearl8
* @Last Modified time: 2018-02-07 11:19:55
*/
var webpack             = require('webpack');
var ExtractTextPlugin   = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin   = require('html-webpack-plugin');

// 环境变量配置，dev / online
var WEBPACK_ENV         = process.env.WEBPACK_ENV || 'dev';

// 获取html-webpack-plugin参数的方法
var getHtmlConfig = function(name, title){
    return {
        template    : './src/view/' + name + '.html',
        filename    : 'view/' + name + '.html',
        title       : title,
        inject      : true,
        hash        : true,
        chunks      : ['common', name]
    };
};
// webpack config
var config = {
    entry: {
        'common'               : ['./src/page/common/index.js'],
        'work'                 : ['./src/page/work/index.js'],
        'ife1'                 : ['./src/page/ife1/index.js'],
        'ife2'                 : ['./src/page/ife2/index.js'],
        'ife3'                 : ['./src/page/ife3/index.js'],
        'ife4'                 : ['./src/page/ife4/index.js'],
        'ife5'                 : ['./src/page/ife5/index.js'],
        'ife6'                 : ['./src/page/ife6/index.js'],
        'ife7'                 : ['./src/page/ife7/index.js'],
        'ife8'                 : ['./src/page/ife8/index.js'],
        'ife9'                 : ['./src/page/ife9/index.js'],
        'ife10'                 : ['./src/page/ife10/index.js'],
        'ife11'                 : ['./src/page/ife11/index.js'],
        'ife12'                 : ['./src/page/ife12/index.js'],
        'ife2-1'                 : ['./src/page/ife2-1/index.js'],
        'ife2-2'                 : ['./src/page/ife2-2/index.js'],
        'ife2-3'                 : ['./src/page/ife2-3/index.js'],
        'ife2-4'                 : ['./src/page/ife2-4/index.js'],
        'ife2-5'                 : ['./src/page/ife2-5/index.js'],

    },
    output: {
        path: './dist',
        publicPath : '../',/* ../ /dist 根据环境不同来选择*/
        filename: 'js/[name].js'
    },
    externals : {
        'jquery' : 'window.jQuery'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader","css-loader") },
            { test: /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=100&name=resource/[name].[ext]' },
            { test: /\.string$/, loader: 'html-loader'}
        ]
    },
    resolve : {
        alias : {
            node_modules    : __dirname + '/node_modules',
            util            : __dirname + '/src/util',
            page            : __dirname + '/src/page',
            service         : __dirname + '/src/service',
            image           : __dirname + '/src/image'
        }
    },
    plugins: [
        // 独立通用模块到js/base.js
        new webpack.optimize.CommonsChunkPlugin({
            name : 'common',
            filename : 'js/base.js'
        }),
        // 把css单独打包到文件里
        new ExtractTextPlugin("css/[name].css"),
        // html模板的处理
        new HtmlWebpackPlugin(getHtmlConfig('work', '练习册')),
        new HtmlWebpackPlugin(getHtmlConfig('ife1', '百度前端学院练习')),
        new HtmlWebpackPlugin(getHtmlConfig('ife2', '百度前端学院练习')),
        new HtmlWebpackPlugin(getHtmlConfig('ife3', '百度前端学院练习')),
        new HtmlWebpackPlugin(getHtmlConfig('ife4', '百度前端学院练习')),
        new HtmlWebpackPlugin(getHtmlConfig('ife5', '百度前端学院练习')),
        new HtmlWebpackPlugin(getHtmlConfig('ife6', '百度前端学院练习')),
        new HtmlWebpackPlugin(getHtmlConfig('ife7', '百度前端学院练习')),
        new HtmlWebpackPlugin(getHtmlConfig('ife8', '百度前端学院练习')),
        new HtmlWebpackPlugin(getHtmlConfig('ife9', '百度前端学院练习')),
        new HtmlWebpackPlugin(getHtmlConfig('ife10', '百度前端学院练习')),
        new HtmlWebpackPlugin(getHtmlConfig('ife11', '百度前端学院练习')),
        new HtmlWebpackPlugin(getHtmlConfig('ife12', '百度前端学院练习')),
        new HtmlWebpackPlugin(getHtmlConfig('ife2-1', '百度前端学院练习')),
        new HtmlWebpackPlugin(getHtmlConfig('ife2-2', '百度前端学院练习')),
        new HtmlWebpackPlugin(getHtmlConfig('ife2-3', '百度前端学院练习')),
        new HtmlWebpackPlugin(getHtmlConfig('ife2-4', '百度前端学院练习')),
        new HtmlWebpackPlugin(getHtmlConfig('ife2-5', '百度前端学院练习')),


    ]
};

if('dev' === WEBPACK_ENV){
    config.entry.common.push('webpack-dev-server/client?http://localhost:8088/');
}

module.exports = config;