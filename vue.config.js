const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  // lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('views', resolve('src/views'))
      .set('components', resolve('src/components'))
      .set('common', resolve('components/common'))
      .set('content', resolve('components/content'))
      .set('network', resolve('src/network'))

    // 这里只写了两个个，你可以自己再加，按这种格式.set('', resolve(''))
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, "src/assets/css/global.less") //需要自行添加
      ]
    }
  }
};
