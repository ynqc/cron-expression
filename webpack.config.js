const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './bundle.js'
    },
    output: {
        filename: 'cron-expression.js',
        path: __dirname + '/dist',
        library: "Cron",
        libraryTarget: "umd",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules )/,
                use: {
                    loader: 'babel-loader'
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
                </html>`                
        })
    ]
};
