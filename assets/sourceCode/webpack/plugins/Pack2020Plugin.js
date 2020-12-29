class Pack2020Plugin {
  constructor(option) {
    this.name = option.name;
  }
  apply(compiler) {
    // emit 钩子是生成资源到 output 目录之前执行，emit 是一个异步串行钩子，需要用 tapAsync 来注册
    compiler.hooks.emit.tapAsync('Pack2020Plugin', (compilation, callback) => {
      // 回调方式注册异步钩子
      const hopeOf2021 = `把2020打包，2021，${this.name}要努力加油！！`
      // compilation存放了这次打包的所有内容
      // 所有待生成的文件都在它的 assets 属性上
      compilation.assets['hope.txt'] = {
        // 添加copyright.txt
        source: function () {
          return hopeOf2021
        },
        size: function () {
          // 文件大小
          return hopeOf2021.length
        },
      }
      callback(); // 必须调用
    })
  }
}

module.exports = Pack2020Plugin;