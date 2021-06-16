module.exports = {
  // 基本路径  对外公开路径   3.3使用 publicPath   basePath 已经被废弃
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  configureWebpack: {
    performance: {
      hints: false
    }
  },
  // 在npm run build 或 yarn build 时 ，生成文件的目录名称（要和baseUrl的生产环境路径一致）（默认dist）
  outputDir: 'dist',
  // 用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
  assetsDir: 'static',
  // 是否开启eslint保存检测，有效值：ture | false | 'error'
  lintOnSave: process.env.NODE_ENV === 'development',
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  // webpack-dev-server 相关配置
  devServer: {
    host: '0.0.0.0',
    port: 8888,
    open: true,
    // proxy: {
    // detail: https://cli.vuejs.org/config/#devserver-proxy
    // [process.env.VUE_APP_BASE_API]: {
    //   // target: `http://192.168.27.136:8080`,
    //   target: `http://192.168.27.79:8080`, //赵成韬
    //   // target: `http://192.168.27.129:8080`, //徐政
    //   changeOrigin: true,
    //   pathRewrite: {
    //     ["^" + process.env.VUE_APP_BASE_API]: ""
    //   }
    // },
    //图片地址代理
    // [process.env.VUE_APP_IMGBASE_API]: {
    //   target: `http://192.168.27.79:9300`,
    //   changeOrigin: true,
    //   pathRewrite: {
    //     ["^" + process.env.VUE_APP_IMGBASE_API]: ""
    //   }
    // }
    // },
    disableHostCheck: true
  }
}
