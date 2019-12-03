const path = require(`path`);
const autoprefixer = require(`autoprefixer`);

module.exports = {
    mode: `development`,
    entry: `./src/index.js`,
    output: {
        filename: `bundle.js`,
        path: path.resolve(__dirname, `dist`),
    },
    devtool: `source-map`,
    module: {
        rules: [
            {
                test: /\.styl$/,
                use: [
                    {
                        loader: `style-loader`
                    },
                    {
                        loader: `css-loader`
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer()
                            ],
                            sourceMap: true
                        }
                    },
                    {
                        loader: `stylus-loader`
                    }
                ]
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
