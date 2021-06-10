const path = require('path');
// const webpack = require('webpack');
const { IgnorePlugin } = require('webpack');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const { existsSync } = require('fs');


// const isProd = process.env.NODE_ENV === 'production'
// const isUseCDN = process.env.IS_USE_CDN === 'true';
const isAnalyz = process.env.IS_ANALYZ === 'true';

function resolve(dir) {
  return path.join(__dirname, dir);
}
let isTs = true;
if (existsSync(resolve('./src/main.js'))) {
  isTs = false;
}
module.exports = {
  pages: {
    app: {
      // page 的入口
      entry: isTs ? 'src/main.ts' : 'src/main.js',
      filename: 'index.html',
    },
  },
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('./src'));
    config.resolve.alias.set('vue$', resolve('./node_modules/vue/dist/vue.esm-bundler.js'));
    // if `IS_ANALYZ` env is TRUE on report bundle info
    isAnalyz &&
      config.plugin('webpack-report').use(BundleAnalyzerPlugin, [
        {
          analyzerMode: 'static',
        },
      ]);
  },
  // disable source map in production
  productionSourceMap: false,
  // ESLint Check: DISABLE for false
  // Type: boolean | 'warning' | 'default' | 'error'
  lintOnSave: 'warning',
  // babel-loader no-ignore node_modules/*
  transpileDependencies: [],
};
