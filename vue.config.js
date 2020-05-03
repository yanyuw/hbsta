
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://116.62.7.230:3702',
                // target: 'http://xxx.ccnu.edu.cn/',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                  '^/api': '/api'
                }
            }
        },
    },
}