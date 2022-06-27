const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
const path = require("path");

module.exports = {
    mode: 'development',
    entry: {
        app: './index.js'
    },
    output: {
        filename: 'cron-expression.js',
        path: path.resolve(__dirname, "dist"),
        library: "Cron",
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
            templateContent:
                `<!DOCTYPE html>
                    <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Sample Page</title>
                    <link rel="stylesheet" href="../index.css" />
                </head>
                <body>
                    <cron-expression value="1-2 * * * * *"></cron-expression>
                </body>
                <script type="module">
                    import './cron-expression.js';
                    console.log(Cron.default.prototype)
                </script>
                </html>`                
        })
    ]
};
