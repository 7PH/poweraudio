const path = require('path');
const webpack = require('webpack');

/**
 * Webpack config
 */
webpack({

    entry: path.resolve(__dirname, 'client.ts'),

    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },

    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },

    output: {

        filename: 'client-bundle.js',

        path: path.resolve(__dirname, 'dist')
    },

    mode: 'development',

    watch: true
})
    .watch({

        aggregateTimeout: 300,

        poll: undefined

    }, (err, stats) => {

        console.log(stats.toString({colors: true}));
    });
