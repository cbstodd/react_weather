let webpack = require('webpack');

module.exports = {
    entry:     [
        './app/app.jsx'
    ],
    externals: {},
    plugins:   [
        new webpack.ProvidePlugin({
            '$':      'jquery',
            'jQuery': 'jquery'
        })
    ],
    output:    {
        path:     __dirname,
        filename: './public/bundle.js'
    },
    resolve:   {
        root:       __dirname,
        alias:      {
            Main:           'app/components/Main.jsx',
            Nav:            'app/components/Nav.jsx',
            About:          'app/components/About.jsx',
            Examples:       'app/components/Examples.jsx',
            Weather:        'app/components/Weather.jsx',
            WeatherForm:    'app/components/WeatherForm.jsx',
            WeatherMessage: 'app/components/WeatherMessage.jsx',
            openWeatherMap: 'app/api/openWeatherMap.jsx',
            ErrorModal:     'app/components/ErrorModal.jsx',
        },
        extensions: ['', '.js', '.jsx']
    },
    module:    {
        loaders: [
            {
                loader:  'babel-loader',
                query:   {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test:    [/\.jsx?$/, /\.css$/],
                exclude: /(node_modules|bower_components)/
            },
            {
                loader: 'style!css', // This are the loaders
                test:   /\.css?$/,
            }
        ]
    },
    watch:     true,
    devtool:   'cheap-module-eval-source-map'
};
