const rewireLessWithModule = require('react-app-rewire-less-with-modules')
const rewireWebpackOutput = require('react-app-rewire-output')

module.exports = function override (config, env) {
  process.env.BASE_API = env === 'production' ? '/api' : '/api';
  config = rewireLessWithModule(config, env);
  // config = rewireWebpackOutput(config, env, {
  //   publicPath: '/build',
  // });
  // config.PUBLIC_URL = '/pis';
  config.devServer = {
    ...(config.devServer || {}),
    proxy: {
      '/api': {
        target: 'http://10.10.20.163:8751',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      },
    },
  };
  return config
}
