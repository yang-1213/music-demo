// vue.config.js
// module.exports = {
// 	publicPath:'/',
//     // 修改的配置
//     devServer: {
//         proxy: {
//             '/': {
//                 target: 'http://localhost:3000',
//                 changeOrigin: true,
//                 ws: true
//             }
//         }
//     }
// }
// // .env.development
// VUE_APP_BASE_API='/'
// vue.config.js




// 解决less全局引入问题
const path = require('path')

module.exports = {
    chainWebpack: config => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
    },
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    }
}

function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, 'src/common/css/mixin.less'), // 需要全局导入的less
            ],
        })
}