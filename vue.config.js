module.exports = {
  devServer: {
    proxy: {
      '/getData': {
        target: 'https://m.you.163.com',
        changeOrigin: true,
        pathRewrite: {
          '^/getData': ''
        }
      }
    }
  },
  publicPath: './'
}