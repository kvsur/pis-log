module.exports = {
    webpack: (config, env) => {
        config.module.rules = [...config.module.rules, {
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader',
        }];
        // config.extraBabelPlugins = [
        //     ["import", {
        //         "libraryName": "antd",
        //         "libraryDirectory": "es",
        //         "style": "css"
        //     }]
        // ]
        // if (env !== 'production') {
        //     config.proxy = {
        //         "/api": {
        //             "target": "http://127.0.0.1:1024",
        //             "changeOrigin": true,
        //             "pathRewrite": {
        //                 "^/api": "/api"
        //             }
        //         }
        //     }
        // }
        console.log(config, env);
        return config;
    },
    // devServer: (configFunction) => {
    //     console.log(configFunction);
    //     return (proxy, allowedHost) => {
    //         console.log(proxy, allowedHost);
    //     }
    // },
    // jest: (config) => {
    //     console.log(config);
    //     return config;
    // }
}