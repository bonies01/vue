// module.exports={
//     dev: {
//         env: require('./dev.env'),
//         port:8080,
//         autoOpenBrowser:true,
//         assetsSubDirectory:'static',
//         assetsPublicPath:'/',
//         proxyTable:{
//             '/api':{
//                 target:'http://127.0.0.1:8760/', // 你请求的第三方接口
//                 changeOrigin:true, // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
//                 pathRewrite:{  // 路径重写，
//                     '^/api':''  // 替换target中的请求地址，也就是说以后你在请求http://api.douban.com/v2/XXXXX这个地址的时候直接写成/api即可。
//                 }
//             }
//         },
//         cssSourceMap: false
//     }
// }
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
                target: 'http://127.0.0.1:8760/',
                // 允许跨域
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}