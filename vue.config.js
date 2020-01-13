const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, './src'),
      },
    },
  },
  outputDir: process.env.NODE_ENV === 'dev' ? 'build_dev' : 'build_production',
  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 1688,
    https: process.env.NODE_ENV === 'production',
  },
  productionSourceMap: true,
  css: {
    sourceMap: true,
  },
  pluginOptions: {
    s3Deploy: {
      registry: undefined,
      awsProfile: 'default',
      region: 'ap-northeast-2',
      bucket: process.env.NODE_ENV === 'dev' ? '' : 'www.good-db.com',
      createBucket: false,
      staticHosting: true,
      assetPath: process.env.NODE_ENV === 'dev' ? '' : 'build_production',
      assetMatch: '**',
      deployPath: '/',
      pwa: false,
      enableCloudfront: true,
      uploadConcurrency: 5,
      pluginVersion: '3.0.0',
      staticIndexPage: 'index.html',
      staticErrorPage: 'index.html',
      cloudfrontId: process.env.NODE_ENV === 'dev' ? '' : 'E2YLP6VAIZF49T',
      cloudfrontMatchers: '/*',
    },
  },
};
