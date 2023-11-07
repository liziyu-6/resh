/*
 * @Author: lijun liziyu@163.com
 * @Date: 2023-10-25 16:18:25
 * @LastEditors: lijun liziyu@163.com
 * @LastEditTime: 2023-10-25 16:59:09
 * @FilePath: \qiankun-vue\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  lintOnSave: false, // 关闭eslint检测
  devServer: {
    port: 8081, //这里的端口是必须和父应用配置的子应用端口一致
    headers: {
      //因为qiankun内部请求都是fetch来请求资源，所以子应用必须允许跨域
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      //资源打包路径
      library: 'vueApp1',
      libraryTarget: 'umd'
    }
  }
}
