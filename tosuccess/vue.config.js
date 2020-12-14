const axiosRequest = 'http://192.168.101.24:10019/'
const path = require('path');
// y 172.20.6.184

module.exports = {
  // css: {
  //   loaderOptions: {
  //     css: {
  //       extract: true,
  //       loaderOptions: {
  //         // 给 sass-loader 传递选项
  //         sass: {
  //           prependData: `@import "./src/styles/common.scss";`
  //         },
  //       },
  //       modules: false
  //     },
  //     postcss: {
  //       // 这里的选项会传递给 postcss-loader
  //     }
  //   }
  // },
  publicPath: './',
  outputDir: 'dist',
  // assetsDir: 'static',
  assetsDir: './assets',
  // dist文件下的map文件
  productionSourceMap: false, // 生产环境是否生成souceMap 文件
  lintOnSave: false,
  runtimeCompiler: true,
  configureWebpack: (config) => {
    config.resolve = {
      extensions: ['.js', '.json', '.vue'],
      alias: {
        '@': path.resolve(__dirname, './src'),
        'api': path.resolve(__dirname, './src/api'),
        'views': path.resolve(__dirname, './src/views'),
        'public': path.resolve(__dirname, './public')
      }
    }
  },
  devServer: {
    open: true,
    port: 8080,
    // 不检查域名
    // sockHost: 'http://localhost:7020/',
    disableHostCheck: true,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: axiosRequest,
        // 允许跨域
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  }
}
