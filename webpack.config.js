const path = require(`path`);

module.exports = {
    mode: `development`,
    entry: `./src/index.js`,
    output: {
        filename: `bundle.js`,
        path: path.join(__dirname, `dist`),
    },
    devtool: `source-map`,
    module: {
        rules: [
            {
                test: /\.styl$/,
                use: [
                    {
                        loader: `style-loader` // creates style nodes from JS strings
                    },
                    {
                        loader: `css-loader` // translates CSS into CommonJS
                    },
                    {
                        loader: `stylus-loader` // compiles Stylus to CSS
                    }
                ]
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true,
                },
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, `dist`),
        publicPath: 'http://localhost:8080',
        compress: true,
        watchContentBase: true,
    },
};
