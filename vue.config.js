module.exports = {
  devServer: {
    proxy: {
      '/getBanner': {
        target: 'https://m.you.163.com',
        changeOrigin: true,
        pathRewrite: {
          '^/getBanner': ''
        }
      }
    }
  }
}