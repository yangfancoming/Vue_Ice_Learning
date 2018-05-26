module.exports = {
  lintOnSave: false, // 保存时是不是用eslint-loader 来lint 代码
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.json', '.vue'],
    },
  },

    devServer: {  // configure webpack-dev-server behavior
        open: process.platform === 'darwin',
        host: '127.0.0.1',
        port: 9527,
        https: false,
        hotOnly: false,
        // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
        proxy:{ // string | Object
            '/api': {
                target: 'http://127.0.0.1:9090',// 解决，不能采用 http://localhost:9000/xxx,换成 http://ip:9000/xxx
                // target: 'http://127.0.0.1:8080/',
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        },
        before: app => {}
    },
    // chainWebpack: (config)=>{
    //     config.resolve.alias
    //         .set('@$', resolve('src'))
    //         .set('assets',resolve('src/assets'))
    //         .set('components',resolve('src/components'))
    //         .set('layout',resolve('src/layout'))
    //         .set('base',resolve('src/base'))
    //         .set('static',resolve('src/static'))
    // },




};

