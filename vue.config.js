const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
}),
{
  configureWebpack: {
    resolve: {
      alias: {
        'assets': 'src/assets',
        'common': 'src/common',
        'components': 'src/components',
        'network': 'src/network',
        'views': 'src/views',
      }
    }
  }
}
