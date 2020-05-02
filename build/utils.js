'use strict'
const path = require('path')
const config = require('../config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const packageConfig = require('../package.json')
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin-for-multihtml')
const PAGT_PATH = path.resolve(__dirname,'../src/pages')
const merge = require('webpack-merge')
// html-base-data 更具实际情况配置
const HtmlBaseData = require('../config/html-base-data');
const isBuild = ['production', 'test'].includes(process.env.NODE_ENV);

exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less', {  javascriptEnabled: true  }),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}

/**
 * 多页面js入口
 */
exports.entries = function () {
  let entryFiles = glob.sync(PAGT_PATH + '/*/*.js');
  let map = {};
  entryFiles.forEach((filePath) => {
    let filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'));
    console.log(filename, 'filePath', filePath);
    map[filename] = isBuild ? path.resolve('src', 'pages', filename, `${filename}.js`) : ['webpack-hot-middleware/client?reload=true&noInfo=true', path.resolve('src', 'pages', filename, `${filename}.js`)];
  });
  return map;
}

/**
 * 多页面输出配置
 */
exports.htmlPlugin = function () {
  let entryHtml = glob.sync(PAGT_PATH + '/*/*.hbs');
  let arr = [];
  entryHtml.forEach((filePath) => {
    let filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'));
    let conf = {
      template: filePath,
      filename: filename + '.html',
      chunks: ['manifest', 'vendor', filename],
      inject: true,
      multihtmlCache: true,
      data: {...HtmlBaseData, ie9:'不支持IE10以下浏览器，推荐使用IE10及以上，Chrome等现代浏览器！'},
    };
    if (process.env.NODE_ENV === 'production') {
      conf = merge(conf, {
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true
        },
        chunksSortMode: 'dependency'
      })
    }
    arr.push(new HtmlWebpackPlugin(conf));
  });
  return arr;
}

// export.prerenderSpaPlugin =function() {
//   let entryHtml = glob.sync(path.resolve(__dirname,'dist') + '/*/*.html');
//   let arr = [];
//   entryHtml.forEach((filePath))
// }
