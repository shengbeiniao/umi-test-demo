export default {
  chainWebpack: config => {
    // 设置src为基础引用目录
    config.resolve.modules.add('src')
  },
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: {
          immer: true,
          hmr: true
        },
        dynamicImport: { webpackChunkName: true },
        title: 'umi-dva',
        dll: false
      }
    ]
  ]
}
