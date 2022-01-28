const genericNames = require('generic-names');

module.exports = {
  presets: [
    '@babel/preset-env', // 根据配置的目标浏览器或则运行环境，选择对应的语法包，从而将代码进行转换
    '@babel/preset-react', // react 语法包，让我们可以使用 React ES6 Class Component 的写法， 支持JSX，TSX语法格式
    '@babel/preset-typescript', // https://github.com/babel/babel/issues/10570
  ],
  plugins: [
    '@babel/plugin-transform-runtime', // 官方插件，作用是减少冗余代码
    [
      '@babel/plugin-transform-modules-commonjs', // 将 ECMAScript modules 转换为 commonjs
      {
        allowTopLevelThis: true,
        loose: true,
        lazy: true,
      },
    ],
    [
      'babel-plugin-react-css-modules',
      {
        exclude: 'node_modules',
        webpackHotModuleReloading: true,
        generateScopedName: genericNames('[name]_[local]_[hash:base64:5]'),
        autoResolveMultipleImports: true,
        filetypes: {
          '.less': { syntax: 'postcss-less' },
        },
      },
    ],
  ],
};
