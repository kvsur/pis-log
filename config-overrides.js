const rewireLessWithModule = require('react-app-rewire-less-with-modules')

module.exports = function override (config, env) {
  process.env.BASE_API = env === 'production' ? '/api' : '/api';
  config = rewireLessWithModule(config, env);
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
