module.exports = {
  plugins: [
    // 前缀追加
    require("autoprefixer")({
      overrideBrowserslist: [
        // 'Android 4.1',
        // 'iOS 7.1',
        // 'Chrome > 31',
        // 'ff > 31',
        // 'ie >= 8',
        // '> 1%',
        "defaults",
        // 'last 10 versions'
      ],
      grid: true,
    }),
    require("postcss-flexbugs-fixes"),
    require("postcss-pxtorem")({
      rootValue: 16, //75 设计稿宽度除以 10，  开头大写的Px 不转换 => height: 100Px, 内联样式不转换，需要 / 75 转成 rem
      unitPrecision: 6, // 计算结果保留 6 位小数
      selectorBlackList: [".no-rem", "no-rem"], // 排除，am-开头的class，不进行rem转换
      propList: ["*", "!font-weight", "!letter-spacing"], // 可以从px更改为rem的属性  感叹号开头的不转换
      replace: true, // 转换成 rem 以后，不保留原来的 px 单位属性
      mediaQuery: true, // 允许在媒体查询中转换px。
      minPixelValue: 0, // 设置要替换的最小像素值。
      exclude: /node_modules/i, // 排除 node_modules 文件(node_modules 内文件禁止转换)
    }),
  ],
};
